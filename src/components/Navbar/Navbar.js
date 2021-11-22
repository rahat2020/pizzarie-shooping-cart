import React from 'react';
import style from './Navbar.module.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HelpIcon from '@mui/icons-material/Help';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" id={style.NavbarShadow}>
                <div className="container">
                    <Link to="/"className="navbar-brand">Pizzarie</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link id={style.navItem} to="/" className="nav-link" aria-current="page"><SearchIcon className={style.navIcon}/>Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link  id={style.navItem} to="/features"className="nav-link"><LocalOfferIcon className={style.navIcon}/>Offer</Link>
                            </li>
                            <li className="nav-item">
                                <Link id={style.navItem}  to="/features"className="nav-link"><HelpIcon className={style.navIcon}/>Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link id={style.navItem}  to="/features"className="nav-link"><PersonPinIcon className={style.navIcon}/> Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link  id={style.navItem} to="/features"className="nav-link"><ShoppingCartIcon className={style.navIcon}/>Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
