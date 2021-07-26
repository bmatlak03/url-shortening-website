import { useRef, useState } from 'react';
import classes from './Link.module.css'
// import Button from '../Button/Button'
const Link = ({url, newUrl}) => {
    const linkRef = useRef(null)
    const [btnText, setBtnText] = useState('Copy')
    const btnBackgroundColor = btnText === 'Copied!' ? {backgroundColor: 'hsl(257, 27%, 26%)'} : null
    const handleCopy = () => {
        const linkValue = linkRef.current.innerText
        setBtnText("Copied!")
        setTimeout(() => setBtnText("Copy"),2000)
        var textField = document.createElement('textarea')
        textField.innerText = linkValue
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return ( 
        <div className={classes.Link}>
            <p className={classes.OldUrl}>{url}</p>
            <div className={classes.Box}>
            <a className={classes.NewUrl}href={newUrl} target="_blank" rel="noreferrer" ref={linkRef}>{newUrl}</a>
            <button style={btnBackgroundColor} className={classes.Copy} onClick={handleCopy}>{btnText}</button>
            </div>
            
        </div>
     );
}
 
export default Link;