import classes from './Informations.module.css';
import Card from '../../components/Card/Card';
import BrandIMG from '../../images/icon-brand-recognition.svg';
import DetailedIMG from '../../images/icon-detailed-records.svg';
import FullyCustomizableIMG from '../../images/icon-fully-customizable.svg';
import Button from '../../components/Button/Button';
import SearchBox from '../../components/SearchBox/SearchBox';
import axios from 'axios';
import Link from '../../components/Link/Link';
import { useState } from 'react';
const Informations = () => {
    const API_URL = 'https://api.shrtco.de/v2/shorten'
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [links,setLinks] = useState([])
    const buttonStyles = {
        height: '50px',
        windth: '100px'
    }
    const handleInputChange = (e) => setInputValue(e.target.value)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (inputValue) {
            setIsLoading(true)
            axios.post(`${API_URL}?url=${inputValue}`)
            .then(res=> {
                const linksCopy = [...links]
                linksCopy.push(res.data)
                setLinks(linksCopy)
                setIsLoading(false)
                setIsError(false)
            })
            .catch(err=>{
                console.log(err)
                setIsLoading(false)
                setIsError(true)
            })
        } else setIsError(true)
    }
    return ( 
        <section className={classes.Informations}>
            <SearchBox
             inputValue={inputValue} 
             inputChange={handleInputChange}
             formSubmit={handleFormSubmit}
             isLoading={isLoading}
             error={isError}
            />
            {links.map((data) => (
                <Link key={data.result.code} newUrl={data.result.full_short_link} url={data.result.original_link}/>
            ))}
            <div className={classes.AdvancedStats}>
                <p className={classes.Title}>
                    Advanved Statistics
                </p>
                <p className={classes.Description}>
                    Track how your links are performing across the web without our advanced statistics dashboard.
                </p>
            </div>
            <div className={classes.Cards}>
                <Card title="Brand Recognition" image={BrandIMG}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.
                </Card>
                <div className={classes.Line}></div>
                <Card title="Detailed Records" image={DetailedIMG}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions
                </Card>
                <div className={classes.Line}></div>
                <Card title="Fully Customizable" image={FullyCustomizableIMG}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement
                </Card>
            </div>
            <div className={classes.Boost}>
                <p className={classes.Title}>Boost your links   today
                </p>
                <Button styles={buttonStyles}>Get Started</Button>
            </div>
        </section>
     );
}
 
export default Informations;