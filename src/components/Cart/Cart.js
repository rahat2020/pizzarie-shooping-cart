import React from 'react';
import style from './Cart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Cart(props) {
    const cart = props.cart;
    const total = cart.reduce((initialPrice, allFoodItem) => initialPrice + allFoodItem.price, 0);
    return (
        <section>
            <div className="d-block justify-content-start align-items-center">
                <h5 className={style.CartTitle}>Cart</h5>
                <h6 className={style.length}>{cart.length} ITEM</h6>
            </div>
            <div className="d-flex justify-content-even align-items-start mt-3 mb-3">
                <div className="justify-content-start align-items-center">
                    <span className={style.title}>Subtotal</span> <br />
                    <small className={style.charge}> extra charges may apply</small>
                </div>
                <span className="ms-auto" id={style.rupee}><FontAwesomeIcon icon={faRupeeSign}/>{total}</span>
            </div>
            <div className="d-flex justify-content-start align-items-center">
                <button className={style.btnAdd}>checkout <ArrowRightAltIcon/></button>
            </div>

        </section>
    )
}
