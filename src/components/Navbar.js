import './Navbar.css'
import geekfoodsIcon from "../assets/images/geekfoodsIcon.svg"
import Button from "./Button.js"
import menu from '../assets/icons/menu-svgrepo-com.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar(){

    const style = ({isActive}) => {
        return {
            color : isActive ? "blue" : "black"
        }
    }


    return(
        <>
            <nav id='navbar'>
                <div className='menu-icon'>
                    <img src={menu}/>
                </div>
                <div>
                    <img src = {geekfoodsIcon}></img>
                    <p>GeekFoods</p>
                </div>
                <div>
                    <ul id="nav-links">
                        <li><NavLink to='/' className="link-tags" style={style}>Home</NavLink></li>
                        <li><NavLink to='/quotes'  className="link-tags" style={style}>Quote</NavLink></li>
                        <li><NavLink to='/restraunts'  className="link-tags" style={({isActive})=>{
                            return{
                                color : isActive ? "blue" : "black"
                            }
                        }}>Resturants</NavLink></li>
                        <li><NavLink to='/foods'  className="link-tags" style={style}>Food</NavLink></li>
                        <li><NavLink to='/contact'  className="link-tags" style={style}>Contacts</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Button borderRadius = "5px" padding = " 0.625rem" backgroundColor = "blue" color = "#ffffff">Get Started</Button>
                </div>
            </nav>
        </>
    )
};

export default Navbar;