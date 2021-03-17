import { Styled } from "./styled";


function Footer() {
    return (
        <Styled>
            <div className='footer-content'>
                <div className='footer-left'>
                    <div className='box-signup'>
                        <h4 className='title-small'>GET 15% OFF WHEN YOU SUBSCRIBE!</h4>
                        <div className='box-ib'><input type='text' /> <button type='submit'>GO</button></div>
                    </div>
                    <ul className='list-social'>
                        <li><a href='#'><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href='#'><i className="fab fa-twitter"></i></a></li>
                        <li><a href='#'><i className="fab fa-pinterest-p"></i></a></li>
                        <li><a href='#'><i className="fab fa-instagram"></i></a></li>
                        <li><a href='#'><i className="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <h4 className='title-small'>CUSTOMER CARE</h4>
                    <ul className='list-item'>
                        <li><a href='#'>Ordering & Payment</a></li>
                        <li><a href='#'>Shipping & Tracking</a></li>
                        <li><a href='#'>Returns</a></li>
                        <li><a href='#'>International</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <a href='#'>Company Info</a>|
                <a href='#'>Privacy Policy (Updated 2017)</a>|
                <a href='#'>Terms of Use </a>|
                <a href='#'>California Transparency in Supply Chains Act Statement</a>|
                <a href='#'>Site Map</a>
            </div>
        </Styled>
    );
}

export default Footer;
