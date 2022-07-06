import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loading() {
    return (
        <div className='d-flex my-5 justify-content-center'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
