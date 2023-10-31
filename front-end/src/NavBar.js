import picture from "./images/PathFinder.png"
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav>
               
                 
            </nav>
               <Link to="/"><img className="path-finder-logo" src={picture} alt="" /></Link>
            <div>
               <Link to="premium-features" className="premium-feature">Premium Features</Link>
               <Link to="/about-us" className='about-us'>About us</Link>
               <Link to="/contact" className='contact'>Contact</Link>
               <Link to="/log-in" className='log-in'>Login</Link>
            </div>
        </>
    )
}