import './BurgerIcon.css'
const BurgerIcon = ({toggleMenu}) => {
    return <i onClick={toggleMenu} className="fas fa-bars Icon"></i>

}
 
export default BurgerIcon;