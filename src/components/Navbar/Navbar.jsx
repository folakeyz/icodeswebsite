import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import Applogo from '../../assets/logo1.png';
import SortIcon from '@material-ui/icons/Sort';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


 const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
    return (
        <div className= { scroll ?  styles.navbarActive  :  styles.navbar} >
            <div className={styles.navs}>
<div className={styles.grids}>
<div className={styles.crd}>
<span><PhoneAndroidIcon fontSize="inherit" /> (+234) 902 834 1973, +234 818 853 0452 </span>
</div>
<div className={styles.crd}>
<span><EmailIcon fontSize="inherit" /> contact@icodes.com.ng</span>
</div>
<div className={styles.crd}>
<span><FacebookIcon fontSize="inherit" />  <TwitterIcon fontSize="inherit" /></span>
</div>
</div>
</div>
             <div className={styles.logo}>
               <img src={Applogo} alt="Luxury Residences logo" />
             </div>
             <div className={styles.bar} onClick={handleClick}>
             { click ?  <CloseIcon fontSize="large" />  :  <SortIcon fontSize="large" />}
             </div>
             <div className={click ? styles.navMenuactive : styles.navMenu}>
             <ul>
            <li>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                   ABOUT US
                </Link>
            </li>
            <li>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                 SERVICES
                </Link>
            </li>
            <li>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                 PRODUCTS
                </Link>
            </li> 
            <li>
                <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                 PORTFOLIO
                </Link>
            </li> 
            <li>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                   CONTACT
                </Link>
            </li>
            </ul>
            </div>
        </div>
    )
}
export default Navbar;