import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
    state={
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="city-img"/>
                    <span className="close-btn" onClick={()=>removeTour(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h2 className="h4 text-uppercase bold">{city}</h2>
                    <h3 className="h5 text-capitalize">{name}</h3>
                    <p className="text-capitalize">info <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></p>
                    {this.state.showInfo ? <p>{info}</p> : ""}
                </div>
            </article>
        )
    }
}
