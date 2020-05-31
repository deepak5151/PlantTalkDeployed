import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default class CurrentBookings extends Component {
    state = {
        BookingsData: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/bookings/')
            .then(response => {
                this.setState({
                    BookingsData: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    convertDate = (val) => {
        val = val.substring(0, 10);
        var dd = val.substring(8, 10);
        var mm = val.substring(5, 7);
        var yy = val.substring(0, 4);
        var finaldate = dd + '/' + mm + '/' + yy;
        return finaldate;
    }
    render() {
        if (this.state.BookingsData.length === 0) {
            return (
                <div className="loadcenter text-center">
                    <h1>Loading...</h1>
                </div>
            )
        }
        return (
            <Table className="text-center" striped bordered hover variant="light">
                <thead >
                    <tr>
                        <th>Person Name</th>
                        <th>Car Booked</th>
                        <th>Vehicle Number</th>
                        <th>Booked On</th>
                        <th>Returning Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.BookingsData.map((item) => (
                        <tr key={item.carnumber}>
                            <td>{item.fullName}</td>
                            <td>{item.carname}</td>
                            <td>{item.vehiclenumber}</td>
                            <td>{this.convertDate(item.Booked)}</td>
                            <td>{this.convertDate(item.ReturningDate)}</td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        )
    }
}
