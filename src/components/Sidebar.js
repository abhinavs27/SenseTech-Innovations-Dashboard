import './main.css';
import React, { Component } from "react";


export default class Sidebar extends Component {
  render() {
    return (

      <ul className="list-group sidebar-list">
        <li className="list-group-item bg-dark1 list-group-item-first text-center" ><i className="fas fa-cube my-5 py-3"></i></li>
        <li className="list-group-item bg-dark1 text-center"><a href="">Overview</a></li>
        <li className="list-group-item bg-dark1 text-center"><a href="">Cloud</a></li>
        <li className="list-group-item bg-dark1 text-center"><a href="">Sketch</a></li>
        <li className="list-group-item bg-dark1 text-center"><a href="">Experiment</a></li>
        <li className="list-group-item bg-dark1 text-center"><a href="">Security</a></li>
        <li className="list-group-item bg-dark1 text-center"><a href="">Ownership</a></li>
        <li className="list-group-item bg-dark1 text-center"><a href="">A/B Test</a></li>
        <li className="list-group-item bg-dark1 text-center"><a href="">Colors</a></li>
        <li className="list-group-item bg-dark1 list-group-item-last" ></li>
      </ul>
    );
  }
}
