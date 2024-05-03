import './Footer.css'
import logipsum from '../assets/icons/footerIcon.png'
import facebookSvg from '../assets/icons/facebook-svgrepo-com.svg'
import twitter from '../assets/icons/twitter-154-svgrepo-com.svg'
import instagram from '../assets/icons/instagram-svgrepo-com.svg'
import github from '../assets/icons/github-142-svgrepo-com.svg'
import basketBall from '../assets/icons/basketball-svgrepo-com.svg'

function Footer(){
    return(
        <footer>
            <img src={logipsum} alt='logo' id='footer-logo'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <ul id='footer-links'>
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blogs</li>
            </ul>
            <div id='footer-social-media-icons'>
                <img src={facebookSvg} alt = "facebook icon" />
                <img src={instagram} alt = "instagram icon" />
                <img src={twitter} alt = "twitter icon" />
                <img src={github} alt = "github icon" />
                <img src={basketBall} alt = "basketBall icon" />
            </div>
        </footer>
    );
};

export default Footer;