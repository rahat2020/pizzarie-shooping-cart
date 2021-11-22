import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Foods.module.css';
import foodItems from '../../Data/FoodItems';
import Items from '../Items/Items';
import Cart from '../Cart/Cart';


export default function Foods() {
    const [foodItem, setFoodItem] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        setFoodItem(foodItems)
    }, [])

    const handleAddItem = (foodItem) => {
        console.log('food added', foodItem)
        const newCart = [...cart, foodItem]
        setCart(newCart)
    }
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="colLeft mt-3 align-items-end justify-content-end">
                        <ul className="list-group align-items-end justify-content-end" id={style.items}>
                            <Link to="/">   <li className="list-group-item">Pizza</li> </Link>
                            <Link to="/">   <li className="list-group-item">Startes</li> </Link>
                            <Link to="/">   <li className="list-group-item">Pasta</li> </Link>
                            <Link to="/">   <li className="list-group-item">Bevaregs</li> </Link>
                            <Link to="/">   <li className="list-group-item">Dolci</li> </Link>
                            <Link to="/">   <li className="list-group-item">Dolci</li> </Link>
                        </ul>

                    </div>
                </div>
                <div className="col-md-6">
                    {
                        foodItem.map((item) => (
                            <Items item={item} handleAddItem={handleAddItem} />
                        ))
                    }

                </div>
                <div className="col-md-3">
                    <div className="mt-3">
                        <Cart cart={cart}/>
                      
                    </div>
                </div>
            </div>

        </section>
    )
}
