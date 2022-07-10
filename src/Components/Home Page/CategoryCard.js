import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { categoriesContext } from '../../Context/categoriesContext';

export default function CategoriesCard(props) {
    const allCategories = useContext(categoriesContext);

    return (
        <div className="categories-component">
            {/* {console.log(allCategories)} */}
            <Card.Title className='fw-bolder fs-4 my-4'>Berdasarkan Kategori</Card.Title>
            <div className="mb-5 categories-card d-flex">
                {allCategories.map((item) => (
                    <Card className="text-center mb-2"
                        key={item.key}
                        onClick={() => props.navigateToRecipeDetail(item.key, "category")}>
                        <Card.Img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                            <Card.Title>{item.category}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                ))}
            </div>
        </div>
    )
}
