import classes from './SearchBox.module.css';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
const SearchBox = ({inputValue, formSubmit, inputChange, isLoading,error}) => {
    let buttonStyles = {
        width: '80%', borderRadius: '5px',height:'40px'
    }
    if (window.innerWidth >= 768) {
        buttonStyles = {
            minWidth: '100px',
            height: 'auto',
            fontSize: 14,
            borderRadius: '5px',
        }
    }
    if (window.innerWidth >= 1366) {
        buttonStyles = {
            minWidth: '150px',
            height: '45px',
            borderRadius: '5px'
        }
    }
    const button = isLoading ? <Spinner /> : <Button styles={buttonStyles} type="submit" >Shorten It!</Button>
    return ( 
        <div className={classes.SearchBox}>
            <form onSubmit={formSubmit}>
                <input
                 onChange={inputChange}
                 className={classes.Input}
                 type="text" 
                 placeholder="Shorten a link here..." 
                 value={inputValue}
                 style={error ? {border: '2px solid red'} : null}
                 />
                {button}
            </form>
                 {error ? <p className={classes.Error}>Something went wrong!</p> : null}
        </div>
     );
}
 
export default SearchBox;