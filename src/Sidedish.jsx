import AosAnimation from "./AosAnimtation";
import "./Header.css";
import { useState, useEffect } from "react";

function Sidedish () {
    const [sideDish, setSideDish] = useState([]);

    useEffect(() => {
        fetch('/side-dish.json')
        .then((response) => response.json())
        .then((data) => {
            setSideDish(data);
        })
    },[])
    return (
        <div className="row g-0">
            {sideDish.map((sideDishList) => (
                <div data-aos="fade-up" className="col-6 col-md-3" key={sideDishList.id}>
                    <div className="card h-100" >
                        <img className="img-fluid" src={sideDishList.image} alt={sideDishList.name} />
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div className="card-title fw-bold">{sideDishList.name}</div>
                            <div className="card-text">{sideDishList.description}</div>
                        </div>
                    </div>
                    <AosAnimation />
                </div>
             ))}
        </div>
    )
}

export default Sidedish