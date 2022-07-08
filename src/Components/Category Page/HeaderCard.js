import React from 'react'
import { Card } from 'react-bootstrap'

export default function HeaderCard(props) {
    return (
        <Card className="bg-dark text-white text-center card-header-recipe-per-category">
            <Card.Img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80" alt="Card image" />
            <Card.ImgOverlay className='d-flex justify-content-center align-items-center flex-column'>
                <Card.Title className='fw-bold fs-1'>{props.getCategory().category}</Card.Title>
                <Card.Text>
                    Jadikan harimu lebih berenergi dengan menu {props.getCategory().category} yang tepat. Pilihan resep {props.getCategory().category} ini praktis dibuat meski waktumu terbatas. Yuk, kita coba!
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}
