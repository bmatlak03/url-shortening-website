import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import classes from './Starter.module.css'
import Illustration from "../../components/Illustration/Illustration";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import ImgLogo from '../../images/logo-dark.svg'
const Starter = () => {
    const [isOpened, setIsOpened] = useState(false)
    const buttonStyles = {
        height: '50px',
        marginTop: '40px',
        fontSize: '23px'
    }
    const toggleMenuHandler = () => setIsOpened(!isOpened)

    return ( 
        <section className={classes.Starter}>
        <header className={classes.Header}>
            <Logo logo={ImgLogo}/>
            <Navigation opened={isOpened} click={toggleMenuHandler}/>
        </header>
            <div className={classes.MainInfo}>
            <Illustration />
            <div className={classes.DescriptionBox}>
                <h1 className={classes.Title}>More than just shorter links</h1>
                <p className={classes.Description}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button styles={buttonStyles}>Get Started</Button>
            </div>
            </div>
           
        </section>
        
     );
}
 
export default Starter;