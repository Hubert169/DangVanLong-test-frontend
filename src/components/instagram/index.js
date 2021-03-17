import { Styled } from "./styled";
import it1 from '../../assets/image/it1.png';
import it2 from '../../assets/image/it2.png';
import it3 from '../../assets/image/it3.png';
import it4 from '../../assets/image/it4.png';
import it5 from '../../assets/image/it5.png';

function instagram({item=5}) {
    const listImage = [
        { src: it1 },
        { src: it2 },
        { src: it3 },
        { src: it4 },
        { src: it5 },
    ]
    const sizeItem = 100/item;
    return (
        <Styled>
            <p className='introduce-ins'>tag your photos with #HAPPYPOINTS and #HAMSA TECHNOLOGIES</p>
            {listImage.length > 0 && <ul className='list-ins'>
                {listImage.map((item, index) => (
                    <li style={{width:`${sizeItem}%`}} key={index}><a href='#'><img alt='#' src={item.src} /></a></li>
                ))}
            </ul>}
        </Styled>
    );
}

export default instagram;
