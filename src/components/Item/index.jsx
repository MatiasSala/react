import React from "react"

const Item = ({product}) => {
    return (
        <div class="card" style="width:400px">
            <img class="card-img-top" src="img_avatar1.png" alt="Card image"/>
            <div class="card-body">
                <h4 class="card-title">{product.name}</h4>
                <p class="card-text">{product.description}</p>
                <a href="#" class="btn btn-primary">See Profile</a>
            </div>
        </div>
        )}

export default Item;


