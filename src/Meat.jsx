import AosAnimation from "./AosAnimtation";
import { useState, useEffect } from "react";
import "./Header.css";

function Meats() {
  const [meats, setMeatList] = useState([]);

  useEffect(() => {
    fetch('/meat.json')
      .then((response) => response.json())
      .then((data) => {
        setMeatList(data);
      });
  }, []);

  return (
    <div data-aos="fade-up" className="row g-0" > 
        {meats.map((meatList) => (
            <div className="col-6 col-md-3" key={meatList.id}>
              <div className="card h-100">
                <img className="img-fluid" src={meatList.image} alt={meatList.name} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="card-title fw-bold">{meatList.name}</div>
                  <div className="card-text">{meatList.description}</div>
                </div>
              </div>
              <AosAnimation />
            </div>
        ))}
    </div>
  );
}

export default Meats;
