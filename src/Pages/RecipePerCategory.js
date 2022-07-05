import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { RecipePerCategoriesContext } from '../Context/Context';

const RecipePerCategory = () => {
    const { recipePerCategoriesSelected, recipePerCategories } = useContext(RecipePerCategoriesContext);

    return (
        <Container className="mt-5">
            {/* {console.log(recipePerCategories)} */}
            <h1>{recipePerCategoriesSelected}</h1>
            {recipePerCategories.map(item => (
                <Card key={item.key}>
                    <Card.Title>{item.title}</Card.Title>
                </Card>
            ))}
        </Container>
    );
}

export default RecipePerCategory;
