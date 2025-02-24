import { useState } from "react";
import "./Header.css";

function Schedule() {
  const [reservation, setReservation] = useState({
    name: '',
    pax: '',
    email: '',
    contact: '',
    date: '',
  });
  
  const [reservationList, setReservationList] = useState([]);

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
        date: reservation.date,
      };

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
    }
  };

  // Delete reservation function
  const handleDelete = (id) => {
    const updatedList = reservationList.filter((reservation) => reservation.id !== id);
    setReservationList(updatedList);
  };

  return (
    <div className="container-fluid p-5 mt-5">
      <h1 className="text-center mb-5">Campgyup Reservation</h1>

      {/* Form to add a new reservation */}
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

      {/* Button to add the reservation */}
      <div className="mt-3">
        <button onClick={addReservation} className="btn btn-dark">+ Add Reservation</button>
      </div>

      <hr />

      {/* Render the reservation list immediately */}
      <h3 className="mt-5">Reservations List</h3>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Pax</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Date</th>
            <th>Actions</th> {/* Added an actions column for delete */}
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
                <td>
                  {/* Delete button */}
                  <button 
                    onClick={() => handleDelete(reservationRecord.id)} 
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
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
