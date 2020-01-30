import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div class="card mb-3" style={{ width: 100 + 'rem' }}>
            <div class="row no-gutters">
                <div class="col-4">
                    <img src={props.image} class="card-img" alt={props.title} />
                    <div class="col-8">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title">{props.title}</h5>
                                <p class="card-text"><small class="text-muted">{props.author}</small></p>
                            </div>
                            <p class="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

