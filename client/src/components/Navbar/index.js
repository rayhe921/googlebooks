import React from "react";
import "./style.css";

function Navbar(props) {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">{props.title}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">{props.linkOne}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">{props.linkTwo}</a>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar;

