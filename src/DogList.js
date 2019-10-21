import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './DogList.css';
import dummy from './dummy.pdf';

class DogList extends Component {

    render() {
        return (
            <div className="DogList">
                <div className="row">
                    <div className="card col-lg-4">
                        <div className="card-title" id="as400">AS400</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין גם דמי טקסט, במקום הטקסט האמיתי הסופי - עד שיהיה טקסט אמיתי . <a className="more-info" href={dummy} target="_blank">למידע נוסף - לחץ על הקישור.</a></p>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="clicks">Clicks</div>
                        <img src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין גם דמי טקסט, במקום הטקסט האמיתי הסופי - עד שיהיה טקסט אמיתי . <a className="more-info" href={dummy} target="_blank">למידע נוסף - לחץ על הקישור.</a></p>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="doctors">רופאים עצמאיים</div>
                        <img src="https://images.pexels.com/photos/42273/doctor-medical-medicine-health-42273.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין גם דמי טקסט, במקום הטקסט האמיתי הסופי - עד שיהיה טקסט אמיתי . <a className="more-info" href={dummy} target="_blank">למידע נוסף - לחץ על הקישור.</a></p>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default DogList;
