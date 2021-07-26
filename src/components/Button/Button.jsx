import classes from './Button.module.css'
const Button = ({children,styles, click,type}) => {
    return ( 
    <button 
        style={styles}
        className={classes.Button}
        onClick={click}
        type={type}
    >
          {children}
    </button>
    
    );
}
 
export default Button;