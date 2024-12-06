import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name, image }) => {
    return (
        <div className="pokemon-card">
            <div className="pokemon-card-header">
                <h3 className="pokemon-name">{name}</h3>
                <div className="pokemon-element">
                    <p>{"Element"}</p>
                </div>
            </div>
            <img src={image} alt={name} className="pokemon-image" />
            <div className="pokemon-info">
                <h3>{"Descriptions"}</h3>
            </div>
        </div>
    );
};

export default PokemonCard;