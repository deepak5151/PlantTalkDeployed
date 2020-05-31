import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import { BrowserRouter, Route } from 'react-router-dom'
import DisplayCars from './DisplayCars'
import Details from './Details.js'
import ContactMe from './ContactMe'
import DisplayForm from './DisplayForm'
import CurrentBookings from './CurrentBookings'

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <NavigationBar />
                <Route path='/' exact component={DisplayCars} />
                <Route path='/dashboard' component={DisplayCars} />
                <Route path={"/details/:item"} render={(props) => <Details {...props} />} />
                <Route path='/contactme' component={ContactMe} />
                <Route path={"/enterdetails/:id"} component={DisplayForm} />
                <Route path='/bookings' component={CurrentBookings} />
            </BrowserRouter>
        )
    }
}

export default App; 