import React, { Component } from 'react'
import './font-awesome/css/font-awesome.min.css';

export default class ContactMe extends Component {
    render() {
        return (
            <div className="mydiv text-center">
                <h4>Created by</h4>
                <h1>Deepak Kapoor</h1>
                <h6>9646445151</h6><br />
                <ul className="contact">
                    <li>
                        <a href="mailto:nk93555@gmail.com" title="Email Me" target="__blank">
                            <i className="fa fa-envelope fa-2x"></i>&emsp;</a>
                        <a href="https://www.facebook.com/deepak.kapoor.1905" title="Facebook" target="__blank">
                            <i className="fa fa-facebook-square fa-2x"></i>&emsp;</a>
                        <a href="https://www.instagram.com/deepak._kapoor/" title="Instagram" target="__blank">
                            <i className="fa fa-instagram fa-2x"></i>&emsp;</a>
                        <a href="https://www.youtube.com/channel/UCw_0N6rXyzcH-gpYsPA1Q9Q?view_as=subscriber" title="Youtube" target="__blank">
                            <i className="fa fa-youtube fa-2x"></i></a>
                    </li>
                </ul>
            </div>
        )
    }
}
