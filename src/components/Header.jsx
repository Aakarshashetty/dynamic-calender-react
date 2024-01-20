import logo from '../images/logo.png';
import externalLink from "../images/externalLink.png"
export const Header = ()=>{
    return(
        <header>
            <img src={logo} width={200} height={50} alt="logo"/>
            <div>
                <a href='/'>Menu</a>
                <a href='/'>Contact us</a>
                <div className='share'>
                <img src={externalLink} width={20} height={20} alt="logo"/>
                <a href='/'>Share Link</a>
                </div>
            </div>
        </header>
    )
}