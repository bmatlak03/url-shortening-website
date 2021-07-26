import classes from './MobileNav.module.css'
import Button from '../../Button/Button';
const MobileNav = () => {
    return ( 
    <nav className={classes.NavBox}>
        <ul className={classes.Links}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
        </ul>
        <div className={classes.Line}></div>
        <ul className={classes.Auth}>
            <li>Login</li>
            <li><Button>Sing up</Button></li>
        </ul>
    </nav>
     );
}
 
export default MobileNav;