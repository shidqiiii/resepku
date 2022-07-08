import React from 'react';
import { Card } from 'react-bootstrap';
import InfoCard from './InfoCard';
import IngredientCard from './IngredientCard';

const ContentCard = (props) => {
    return (
        <div>
            <Card className='text-center card-content my-5 justify-content-center'>
                <Card.Title className='fw-bold fs-3'>{props.recipeDetail.title}</Card.Title>
                <Card.Text className='fs-5'>{props.recipeDetail.author.datePublished} oleh {props.recipeDetail.author.user}</Card.Text>

                <InfoCard recipeDetail={props.recipeDetail} />

                <IngredientCard recipeDetail={props.recipeDetail} />
            </Card>
        </div>
    );
}

export default ContentCard;
