import React, { Component } from 'react';
import './MainMenu.css';
import dummy from './dummy.pdf';

class DogList extends Component {

    render() {

        return (
            <div className="DogList">
                <div className="row">
                    <div id="services" className="card col-lg-4">
                        <div className="card-title">שירות עצמי<br />Self Service</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <p id="serviceP"><span style={{ color: "black" }}>◀︎</span>&nbsp;לחץ על הבחירה המבוקשת:</p>
                                <ul>
                                    <li><a className="self-info" href="/" target="_blank" rel="noopener noreferrer">פתיחת קריאה</a></li>
                                    <li><a className="self-info" href="/" target="_blank" rel="noopener noreferrer">(FreePass)איפוס סיסמה בשירות עצמי</a></li>
                                    <li><a className="self-info" href="/" target="_blank" rel="noopener noreferrer">(OTP)התחברות מרחוק וחתימה דיגיטלית</a></li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card col-lg-4">
                        <div className="card-title" id="passwords">סיסמאות</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>(AD)סיסמא אישית למערכות מכבי</li>
                                    <li>("כוכב")AS400 סיסמת</li>
                                    <li>(OTP)סיסמת קליקס</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3523" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="citrix">Citrix  סביבת</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>Office דואר אלקטרוני ויישומי </li>
                                    <li>סריקה והדפסה</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3535" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="as400">AS400 כוכב</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>יישומי כוכב מכבי: חברות וגבייה </li>
                                    <li>סריקה / הדפסה ממערכות כוכב</li>
                                    <li>APPLINX / CRM</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3529" className="dial btn btn-primary">חייג לתמיכה</a>
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
                            <a href="tel:1-800-220-110" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="doctors">רופאים עצמאיים</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>קליקס / פורטל רופא</li>
                                    <li>זימון תורים לרופאים בקהילה</li>
                                    <li>תקשורת</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3524" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="docLine">קו לרופא</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>ראש טוב</li>
                                    <li>מרכז ארצי לדימות / אישורי תרופות</li>
                                    <li>מכבי ללא הפסקה - תורים דחופים</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:1-800-800-180" className="dial btn btn-primary">חייג לתמיכה</a>
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
                            <a href="tel:03-514-3635" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="teleRadio">טלרדיולוגיה</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>דימות / תמר</li>
                                    <li>ניב"ה אולטראסאונד גניקולוגי / א.ק.ג</li>
                                    <li>טלמדיסין / קרדילוגיה</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3525" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="sap">SAP</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>סאפ</li>
                                    <li>פורטל סאפ ומקוונים אישית</li>
                                    <li>מכ"ם</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3536" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="equipment">ציוד קצה</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>עמדת מחשב כולל מסך ומערכות הפעלה</li>
                                    <li>מדפסות וסורקים</li>
                                    <li>קורא כרטיסים</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3530" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>

                    <div className="card col-lg-4">
                        <div className="card-title" id="telephone">תקשורת וטלפוניה</div>
                        <img src="https://images.pexels.com/photos/1181336/pexels-photo-1181336.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>תקשורת / אינטרנט</li>
                                    <li>טלפוניה</li>
                                    <li>סנכרון דואר ארגוני למכשיר נייד</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3527" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="stations">עמדות שירות</div>
                        <img src="https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>זימון וניהול תורים</li>
                                    <li>עמדות תור לי <span style={{ color: "blue" }}>●</span> מכבי לי <span style={{ color: "blue" }}>●</span> פוטו</li>
                                    <li>Video Conference </li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3531" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>
                    <div className="card col-lg-4">
                        <div className="card-title" id="suppliers">ספקים</div>
                        <img src="https://images.pexels.com/photos/42273/doctor-medical-medicine-health-42273.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-text">
                                <ul>
                                    <li>חיוב ישיר</li>
                                    <li>מד"ח</li>
                                    <li><a className="more-info" href={dummy} target="_blank" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</a></li>
                                </ul>
                            </div>
                            <a href="tel:03-746-3533" className="dial btn btn-primary">חייג לתמיכה</a>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default DogList;
