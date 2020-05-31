import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { CardColumns, Card, Button } from 'react-bootstrap'

class DisplayCars extends Component {

    state = {
        Data: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/details')
            .then(response => {
                this.setState({
                    Data: response.data
                })
            })
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.Data);
        if (this.state.Data.length === 0) {
            return (
                <div className="text-center loadcenter">
                    <h1>Loading....</h1>
                </div>
            )
        }
        return (
            <div className="container my-4">
                <CardColumns>
                    {
                        this.state.Data.map((item, i) => (
                            <Card className="pb-4" key={item.carnumber}>
                                <Card.Img className="mb-4" src={"../CarImages/" + item.imgpath} alt="No Image Found" height="250px" />
                                <Card.Title className="text-center">{item.carname}</Card.Title>
                                <Card.Subtitle className="text-center mb-2">Rs.{item.rpd}/day</Card.Subtitle>
                                <Button variant="primary" block as={Link} to={{
                                    pathname: `/details/${item.carnumber}`,
                                    state: { item }
                                }}
                                >Details</Button>
                                {
                                    item.status ?
                                        <Button variant="success" as={Link} to={`/enterdetails/${item.carnumber}`} block>Book Car</Button> :
                                        <Button variant="danger" disabled block>Not Available</Button>
                                }
                            </Card>

                        ))
                    }
                </CardColumns>
            </div >
        )
    }
}

export default withRouter(DisplayCars);
