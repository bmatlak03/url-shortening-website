import classes from './Logo.module.css'
const Logo = ({logo, styles}) => {
    return (
    <div style={styles} className={classes.Logo} >
        <img src={logo} alt="logo" />
    </div>
    )
}
 
export default Logo;