import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="home--img-container">
            <div className="text-opacity text-capitalize text-center">
                <h1 className="text-custom display-2 mx-auto">Welcome to City Tours</h1>
                <Link to="/tours">
                    <button type="button" className="btn btn-lg btn-custom mt-5">Discover</button>
                </Link>
            </div>
        </div>
    )
}
