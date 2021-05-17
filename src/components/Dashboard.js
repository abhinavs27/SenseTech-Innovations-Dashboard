import React, { Component } from "react";
import './main.css';
import Sidebar from "./Sidebar";
import BodyData from "./BodyData";


export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <div className="row">
          <div className="col-sm-2 col-md-2 sidebar badge-dark SidebarclassName" id="sidebar" >
            <Sidebar />
          </div>
          <div className="col-md-10 ">
            <BodyData />

          </div>
        </div>
      </div>


    );
  }
}
