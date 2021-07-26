import IllustrationIMG from '../../images/illustration-working.svg'
import classes from './Illustration.module.css'
const Illustration = () => {
    return ( 
        <div className={classes.Illustration}>
            <img src={IllustrationIMG} alt="Illustration working" />
        </div>
     );
}
 
export default Illustration;