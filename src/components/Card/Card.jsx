import classes from './Card.module.css'
const Card = ({title,children,image}) => {
    return ( 
        <div className={classes.Card}>
            <div className={classes.Icon}>
                <img src={image} alt="Icon" />
            </div>
                <p className={classes.Title}>{title}</p>
                <p className={classes.Description}>{children}</p>
            
        </div>
     );
}
 
export default Card;