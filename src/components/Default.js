import React from 'react';
import {Link} from 'react-router-dom';

export default function Default() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-10 mx-auto text-center">
                    <p className="display-1 text-custom">400 error page</p>
                    <Link to="/">
                        <button className="btn btn-primary">Back to home page </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
