import React from "react"

const Item = ({product}) => {
    return (
        <div className="card" style="width:400px">
            <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">Agregar al Carrito</a>
            </div>
        </div>
        )}

export default Item;


