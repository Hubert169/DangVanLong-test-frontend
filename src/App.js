import { Styled } from "../src/styles/index";
import slide from '../src/assets/image/slider.png';
import bannerLeft from '../src/assets/image/bannerLeft.png';
import bannerRight from '../src/assets/image/bannerRight.png';
import ListCate from './components/category';
import Instagram from './components/instagram';
import Footer from './components/footer';


function App() {
    return (
        <Styled>
            <div className='container-section'>
                <img alt='#' src={slide} />
                <div className='cate-left'>
                    <ListCate />
                </div>
                <div className='post-title'>
                    <h2 className='title-large'>HAPPY POINTS</h2>
                </div>
            </div>

            <div className='container-section'>
                <div className='col-md-6'>
                    <img alt='#' src={bannerLeft} />
                    <div className='post-title'>
                        <h3 className='title-medium'>HAPPYPOINTS</h3>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img alt='#' src={bannerRight} />
                    <div className='post-title'>
                        <h3 className='title-medium color-white'>HAMSA</h3>
                        <p className='sub-title'>TECHNOLOGIES</p>
                    </div>
                </div>
            </div>
            <div className='container-section'>
                <Instagram />
            </div>
            
            <div className='container-section'>
                <Footer />
            </div>
        </Styled>
    );
}

export default App;
