import './Footer.css';
import { Social } from '../Social/Social.js'
 
export function Footer() {
    return (
        <footer>
            <p>FOLLOW STAR WARS:</p>
            <Social/>
            <p>TM © Lucasfilm Ltd. All Rights Reserved</p>
            <ul>
                <li><a >Terms of Use</a></li>
                <li><a >Privacy Policy</a></li>
                <li><a >Children's Data Privacy Policy</a></li>
                <li><a >Star Wars at shopDisney</a></li>
                <li><a >Do Not Sell My Personal Data</a></li>
            </ul>
        </footer>
    );
}
