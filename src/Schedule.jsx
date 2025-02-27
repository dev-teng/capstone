import { useState, useEffect } from "react";
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Swal from 'sweetalert2';

function Schedule() {
  const [reservation, setReservation] = useState({
    name: '',
    pax: '',
    email: '',
    contact: '',
    date: '',
  });
  
  const [reservationList, setReservationList] = useState([]);
  const [userProfile, setUserProfile] = useState('');
  const db = getFirestore(firebaseApp)

  // Add reservation function
  const addReservation = () => {
    if (reservation.name === '' || reservation.pax === '' || reservation.email === '' || 
        reservation.contact === '' || reservation.date === '') {
      alert('Missing fields ❌');
    } else {
      const nextId = reservationList.length > 0 ? Math.max(...reservationList.map(res => res.id)) + 1 : 1;
      const newReservation = {
        id: nextId,
        name: reservation.name,
        pax: reservation.pax,
        email: reservation.email,
        contact: reservation.contact,
        date: reservation.date
      };
      addDoc(collection(db, "cosInfos"), newReservation).then(()=> {
        // Add new reservation to the list
        setReservationList([...reservationList, newReservation]);
        // Reset the input fields
        setReservation({
          name: '',
          pax: '',
          email: '',
          contact: '',
          date: '',
        });
      }); 
    }
  };

  // Delete reservation function
  const handleDelete = (id) => {
     const docRef = doc(db, "cosInfos", id)
     deleteDoc(docRef).then(() => {
     setReservationList((prevList) => prevList.filter((reservation)=>reservation.id !== id))
    });
           
  };

  let navigate = useNavigate();

  useEffect(() => {
    //authentication
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user){
        setUserProfile({
          email: user.email,
          displayName: user.displayName
          //in session
        })
        
      }else {
        navigate("/") //without session
      }
    });


    //rendered db list
    onSnapshot(collection(db, "cosInfos"), snapshot => {
      const newReservationList =[]
      snapshot.forEach((reservationDoc)=> {
        const reservationData = reservationDoc.data()
        newReservationList.push({...reservationData, id: reservationDoc.id})
      });
      setReservationList(newReservationList);
    });


  }, []);

  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if(result.isConfirmed){
        const auth = getAuth();
        signOut(auth).then(()=> {
          navigate("/");
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //Swal.fire('Logout Cancelled');
      }
    });
   
  };

  return (
    <div className="container-fluid p-5 mt-5">
      <h1 className="text-center mb-5">Campgyup Reservation</h1>

      <div className="border border-circle d-grid p-2 text-center mb-5" style={{width: "12rem"}}>
        <span className="fw-bold">{userProfile.displayName}</span> 
        <span className="mb-2">{userProfile.email}</span> 
        <button onClick={logout} className="btn btn-dark btn-sm">Logout</button>
      </div>

      <div className="row">
        <div className="col-md-6">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={reservation.name} 
            onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label>Pax</label>
          <input 
            type="number" 
            className="form-control" 
            value={reservation.pax} 
            onChange={(e) => setReservation({ ...reservation, pax: e.target.value })}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={reservation.email} 
            onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label>Contact</label>
          <input 
            type="tel" 
            className="form-control" 
            value={reservation.contact} 
            onChange={(e) => setReservation({ ...reservation, contact: e.target.value })}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <label>Date</label>
          <input 
            type="date" 
            className="form-control" 
            value={reservation.date} 
            onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-3">
        <button onClick={addReservation} className="btn btn-dark">+ Add Reservation</button>
      </div>

      <hr />
      <h3 className="mt-5">Reservations List</h3>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Pax</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservationList.length > 0 ? (
            reservationList.map((reservationRecord) => (
              <tr key={reservationRecord.id}>
                <td>{reservationRecord.name}</td>
                <td>{reservationRecord.pax}</td>
                <td>{reservationRecord.email}</td>
                <td>{reservationRecord.contact}</td>
                <td>{reservationRecord.date}</td>
                <td><button onClick={() => handleDelete(reservationRecord.id)} className="btn btn-danger"> Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No Reservations</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
