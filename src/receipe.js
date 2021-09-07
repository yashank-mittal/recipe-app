import React from 'react'
import style from './receipe.module.css';

export default function receipe({title,cuisinetype,images,ingredients}) {
    return (
        <div  className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li className={style.li}>{ingredient.text}</li>
                ))}
            </ol>
            <p> CuisineType : {cuisinetype}</p>
            <img className={style.image} src={images} alt="" />
        </div>
    )
}
