import React from 'react';
import style from './Items.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faPlus } from '@fortawesome/free-solid-svg-icons'
export default function Items(props) {
    const { name, price, description } = props.item
    return (
        <section>
            <div className="card mt-3" id={style.foodCard}>
                <div className="card-body">
                    <div className="d-flex w-100 justify-content-even align-items-center">
                        <div className="d-block">

                            <h5 className="" id={style.title}>{name}</h5>
                            <span className="" id={style.price}><FontAwesomeIcon icon={faRupeeSign} />{price}</span>
                        </div>
                        <button className="ms-auto" id={style.btnAdd} onClick={() =>props.handleAddItem(props.item)}>
                            <FontAwesomeIcon icon={faPlus} id={style.btnIcon} />ADD
                        </button>
                    </div>
                    <p className={style.cardText}>{description}</p>
                </div>
            </div>
        </section>
    )
}
