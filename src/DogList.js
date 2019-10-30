import React, { Component } from 'react';
import './DogList.css';
import dummy from './dummy.pdf';

class DogList extends Component {

    render() {

        return (
            <div className="DogList">
                <div className="row">
                    <div className="card col-lg-4">
                        <div className="card-title" id="services">שירותים נוספים</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">פתיחת קריאה</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">(FreePass)איפוס סיסמה בשירות עצמי</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">(OTP)התחברות מרחוק וחתימה דיגיטלית</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="passwords">סיסמאות</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">(AD)סיסמא אישית למערכות מכבי</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">("כוכב")AS400 סיסמת</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">(OTP)סיסמת קליקס</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="citrix">Citrix  סביבת</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">Office דואר אלקטרוני ויישומי </a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">סריקה והדפסה</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="as400">AS400 כוכב</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">יישומי כוכב מכבי: חברות וגבייה </a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">סריקה / הדפסה ממערכות כוכב</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">APPLINX / CRM</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="goodHead">"חברת "ראש טוב</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />

                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="doctors">רופאים עצמאיים</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">קליקס / פורטל רופא</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">זימון תורים לרופאים בקהילה</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">תקשורת</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="docLine">קו לרופא</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">ראש טוב</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">מרכז ארצי לדימות / אישורי תרופות</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">מכבי ללא הפסקה - תורים דחופים</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="pay">זכאות</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="teleRadio">טלרדיולוגיה</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">דימות / תמר</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">ניב"ה אולטראסאונד גניקולוגי / א.ק.ג</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">טלמדיסין / קרדילוגיה</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="sap">SAP</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">סאפ</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">פורטל סאפ ומקוונים אישית</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">מכ"ם</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="equipment">ציוד קצה</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">עמדת מחשב כולל מסך ומערכות הפעלה</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">מדפסות וסורקים</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">קורא כרטיסים</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>

                    <div className="card col-lg-4">
                        <div className="card-title" id="telephone">תקשורת וטלפוניה</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">תקשורת / אינטרנט</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">טלפוניה</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">סנכרון דואר ארגוני למכשיר נייד</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="stations">עמדות שירות</div>
                        <img src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">זימון וניהול תורים</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">עמדות תור לי  ♦︎  מכבי לי  ♦︎  פוטו</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">Video Conference </a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="suppliers">ספקים</div>
                        <img src="https://images.pexels.com/photos/42273/doctor-medical-medicine-health-42273.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">חיוב ישיר</a></li>
                                    <li><a className="more-info" href="/" target="_blank" rel="noopener noreferrer">מד"ח</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-456-7890" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default DogList;
