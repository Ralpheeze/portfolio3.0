import './footer.css';
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer() {
  return (
    <div>
        <div className="footer container">
            <div className="footer-text">
                <div><p className="copyright">Copyright &copy; 2023 by Mr. Ekene Akubue | All Rights Reserved.</p></div>
            </div>

            <div className="footer-icon">
                <Link to='#home' smooth>
                    <a className='footer-a' href="#"><i class="bi bi-arrow-up footer-i" ></i></a>
                </Link>
            </div>
        </div>

        
    </div>
  )
}
