import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Header.css";
function Schedule () {
 
  return (
    <div className="bg-success-subtle d-flex flex-column min-vh-100">
      <div className="row g-0 mt-5">
        <div className="col-md-12">
          <h2 className="mt-5 text-center reserved-Sched">Campgyup Reserved Schedule</h2>
        </div>
      </div>

        <table className="table table-bordered mt-5">
              <thead>
                  <tr>
                    <th>Name</th>
                    <th>Pax</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Date Reserved</th>

                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Vincent Teng</td>
                    <td>1</td>
                    <td>teng@test.com</td>
                    <td>09666999359</td>
                    <td>February 24, 2025</td>
                  </tr>
              </tbody>
        </table>
    </div>
  )
}

export default Schedule