import React, { Component } from "react";
import './main.css';
import Table from "./Table";


export default class BodyData extends Component {
  render() {
    return (
      <div className="card-header bg-white" >

        <div className="container">
          <div className="row">
            <div className="col-10">
              <h1>Overview </h1>
            </div>

            <div className="col-2">
              <i className="fas fa-ellipsis-h ellipsis "></i>
              <button className="btn btn-success1 form-check-inline " type="">Add</button>
            </div>
          </div>

          <Table />

          <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-center footer">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>


    );
  }
}
