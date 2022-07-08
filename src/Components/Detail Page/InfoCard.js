import React from 'react'
import { Card } from 'react-bootstrap'

export default function InfoCard(props) {
    return (
        <div className='card-info my-3 d-flex justify-content-center shadow'>
            {[props.recipeDetail.servings, props.recipeDetail.times, props.recipeDetail.dificulty].map((index, id) => (
                <div className='box' key={id}>
                    <small>Tingkat Kesusahan</small>
                    <Card.Text>{index}</Card.Text>
                </div>
            ))}
        </div>
    )
}
