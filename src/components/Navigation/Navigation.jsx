import classes from './Navigation.module.css';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import MobileNav from './MobileNav/MobileNav';
import Button from '../Button/Button';
const Navigation = ({opened, click}) => {
    const navigationBox = opened ? <MobileNav/> : null
    const buttonStyles = {
        minWidth: '100px',
        padding: '5px 10px'
    }
    return (
        <>
        <div className={classes.MobileNavigation}>
            <BurgerIcon toggleMenu={click}/>
            {navigationBox}
        </div>
        <nav className={classes.DesktopNavigation}>
            <ul className={classes.Links}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <ul className={classes.Auth}>
                <li>Login</li>
                <li><Button styles={buttonStyles}>Sign Up</Button></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navigation;