import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';

const ProductCard = (props) => {

    return (
        <Col md="3">
            <Card className="shadow-lg rounded m-2">
                <div className="d-flex justify-content-center">
                    <CardImg top src={props.productDetails.imagePath} />
                </div>

                <CardBody>
                    <CardTitle tag="h5">{props.productDetails.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.productDetails.brand}</CardSubtitle>

                    <Button color="warning"> Know More</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductCard;