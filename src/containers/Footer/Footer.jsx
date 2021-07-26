import classes from './Footer.module.css'
import Logo from '../../components/Logo/Logo';
import ImgLogo from '../../images/logo-white.svg'
import FacebookLogo from '../../images/icon-facebook.svg'
import TwitterLogo from '../../images/icon-twitter.svg'
import PinterestLogo from '../../images/icon-pinterest.svg'
import InstagramLogo from '../../images/icon-instagram.svg'
const Footer = () => {
    let logoStyles
    if (window.innerHeight >= 768) {
         logoStyles = {
            width: '13%',
        }
    }
    
    return ( 
        <footer className={classes.Footer}>
            
            <Logo styles={logoStyles} logo={ImgLogo}/>
            <div className={classes.Category}>
                <p className={classes.Title}>Features</p>
                <ul className={classes.List}>
                    <li className={classes.Link}>Link Shortening</li>
                    <li className={classes.Link}>Branded Links</li>
                    <li className={classes.Link}>Analytics</li>
                </ul>
            </div>
            <div className={classes.Category}>
                <p className={classes.Title}>Resources</p>
                <ul className={classes.List}>
                    <li className={classes.Link}>Blog</li>
                    <li className={classes.Link}>Developers</li>
                    <li className={classes.Link}>Support</li>
                </ul>
            </div>
            <div className={classes.Category}>
                <p className={classes.Title}>Company</p>
                <ul className={classes.List}>
                    <li className={classes.Link}>About</li>
                    <li className={classes.Link}>Our Team</li>
                    <li className={classes.Link}>Careers</li>
                    <li className={classes.Link}>Contact</li>
                </ul>
            </div>

            <div className={classes.Socials}>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={classes.Icon}>
                    <img src={FacebookLogo} alt="facebook" />
                </a>
                <a href="https://twitter.com/?lang=pl" target="_blank" rel="noreferrer" className={classes.Icon}>
                    <img src={TwitterLogo} alt="twitter" />
                </a>
                <a href="https://pl.pinterest.com/" target="_blank" rel="noreferrer" className={classes.Icon}>
                    <img src={PinterestLogo} alt="pinterest" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={classes.Icon}>
                    <img src={InstagramLogo} alt="instagram" />
                </a>
            </div>
            
        </footer>
     );
}
 
export default Footer;