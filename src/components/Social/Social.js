import logoFacebook from '../../assets/icon_facebook.svg';
import logoInstagram from '../../assets/icon_instagram.svg';
import logoTwitter from '../../assets/icon_twitter.svg';
import logoYoutube from '../../assets/icon_youtube.svg';
import './Social.css';

export function Social() {
    return (
        <div className='social'>
            <img src={logoFacebook} alt="Facebook" />
            <img src={logoInstagram} alt="Instagram" />
            <img src={logoTwitter} alt="Twitter" />
            <img src={logoYoutube} alt="Youtube" />
        </div>
    );
}