import React from 'react';
import style from './Cart.module.css';

export default function Cart(props) {
    const cart = props.cart;
    const total = cart.reduce((initialPrice, allFoodItem) => initialPrice + allFoodItem.price, 0);
    return (
        <section>
            <div className="d-block justify-content-start align-items-center">
                <h5 className={style.CartTitle}>Cart</h5>
                <h6>{cart.length} ITEM</h6>
            </div>
            <div className="d-flex justify-content-even align-center">
                <span>Subtotal <br /> <small className={style.charge}> extra charges may apply</small></span>
                <span>{total}</span>

            </div>
            <div className="w-100">
                <button className={style.btnAdd}>checkout</button>
            </div>

        </section>
    )
}
