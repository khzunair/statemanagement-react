
import facebookImage from "../../assets/facebook_20x20.png";
import instagramImage from "../../assets/instagram_20x20.png";
import twitterImage from "../../assets/twittericon_20x20.png";
import whatsappImage from "../../assets/whatsappicon_20x20.png";
import youtubeImage from "../../assets/youtube_20x20.png";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', textAlign: 'center', padding: '20px 0', marginTop: '20px' }}>
      <a href="mailto:your-email@example.com" style={{ textDecoration: 'none', color: '#333', marginRight: '10px' }}>zunairkhawajaa@gmail.com</a>
      <a href="whatsapp-link" target="_blank" style={{ textDecoration: 'none', marginRight: '10px' }}>
        <img src={whatsappImage} alt="WhatsApp" style={{ width: '20px', height: '20px' }} />
      </a>
      <a href="facebook-link" target="_blank" style={{ textDecoration: 'none', marginRight: '10px' }}>
        <img src={facebookImage} alt="Facebook" style={{ width: '20px', height: '20px' }} />
      </a>
      <a href="instagram-link" target="_blank" style={{ textDecoration: 'none', marginRight: '10px' }}>
        <img src={instagramImage} alt="Instagram" style={{ width: '20px', height: '20px' }} />
      </a>
      <a href="youtube-link" target="_blank" style={{ textDecoration: 'none', marginRight: '10px' }}>
        <img src={youtubeImage} alt="YouTube" style={{ width: '20px', height: '20px' }} />
      </a>
      <a href="twitter-link" target="_blank" style={{ textDecoration: 'none', marginRight: '10px' }}>
        <img src={twitterImage} alt="Twitter" style={{ width: '20px', height: '20px' }} />
      </a>
    </footer>
  );
};

export default Footer;
