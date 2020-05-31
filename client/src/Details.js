import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Details extends Component {
    render() {
        var detaill = this.props.location.state;
        return (
            <div>
                <div className="container col-md-4 my-4">
                    <Card>
                        <Card.Img src={"../CarImages/" + detaill.item.imgpath} alt="No Image Found" height="250px" />
                        <Card.Header className="text-center">
                            <Card.Title>{detaill.item.carname}</Card.Title>
                            <Card.Subtitle>Only for Rs.{detaill.item.rpd} per day</Card.Subtitle>
                        </Card.Header>
                        <ListGroup className="text-center" variant="flush">
                            <ListGroupItem><b>Model : </b>{detaill.item.model}</ListGroupItem>
                            <ListGroupItem><b>Seating Capacity : </b>{detaill.item.seatingcapacity}</ListGroupItem>
                            <ListGroupItem><b>Color : </b>{detaill.item.color}</ListGroupItem>
                            <ListGroupItem><b>Average : </b>{detaill.item.average}km per litre</ListGroupItem>
                            <ListGroupItem><b>Fuel Type : </b>{detaill.item.fuel}</ListGroupItem>
                            <ListGroupItem><b>Vehicle Number : </b>{detaill.item.vehiclenumber}</ListGroupItem>
                        </ListGroup>
                        {detaill.item.status ?
                            <Button variant="success" as={Link} to={`/enterdetails/${detaill.item.carnumber}`} block>Book Car</Button> :
                            <Button variant="danger" disabled block>Not Available</Button>
                        }
                        <Button variant="primary" as={Link} to="/dashboard" block>Go to Dashboard</Button>
                    </Card>
                </div>
                ))}
            </div>
        )
    }
}

export default Details;
