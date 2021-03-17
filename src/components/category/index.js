import { Styled } from "./styled";


function Category() {
    const listCate = [
        'NEW ARRIVALS',
        'BOOTS',
        'FLATS',
        'HEELS',
        'SANDALS',
        'SNEAKERS',
        'SALE',
        'IEW ALL',
        'CAMPAIGN',
        'STORY',
    ]
    return (
        <Styled>
            {listCate.length > 0 && <ul className='list-cate'>
                {listCate.map((item, index) => (
                    <li key={index}><a href='#'>{item}</a></li>
                ))}
            </ul>}
        </Styled>
    );
}

export default Category;
