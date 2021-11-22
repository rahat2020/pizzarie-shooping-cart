import React from 'react';
import food from '../../img/food.jpg';
import style from './Features.module.css';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function Features() {
    return (
        <section className="mt-3 pt-3" id={style.features}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center mb-3 ">
                            <img src={food} id={style.foodImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-block justify-content-center">
                            <h4 id={style.foodTitle}>Francesco's Pizzeria</h4>
                            <div className="d-block justify-content-even align-items-center">
                                <p className={style.foodTime}>Pizzas, Italian</p>
                                <p className={style.foodTime}>Marol Sakinaka, Marol Sakinaka</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-start align-items-center w-100">
                            <div className={style.colLeft}>
                                <div className={style.star} id={style.rating}>
                                    <span><StarIcon className={style.starIcons} /> 5.0</span> <br />
                                    <span id={style.subtitle}>20+ Ratings</span>
                                </div>
                            </div>
                            <div className={style.colCenter}>
                                <div className={style.star} id={style.time}>
                                    <span>53 mins</span> <br />
                                    <span id={style.subtitle}>Delivery Time</span>
                                </div>
                            </div>

                            <div className={style.colRight}>
                                <div className={style.star} id={style.price}>
                                    <span>1000</span> <br />
                                    <span id={style.subtitle}>Cost for two</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="offer d-flex justify-content-center align-items-center">
                            <span className={style.title}>offer</span>
                            <div className="mt-1 p-4 align-items-center justify-content-center" id={style.BoxOffer}>
                                <span className={style.offerText}><LocalOfferIcon className={style.OfferIcon}/> 10% off | Use code PARTY</span> <br />
                                <span className={style.offerText}><LocalOfferIcon className={style.OfferIcon}/>20% off up to ₹125 | Use FEDERAL125 Above ₹500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}




