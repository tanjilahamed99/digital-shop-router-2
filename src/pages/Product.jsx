import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, title, images, rating, stock } = product
    return (
        <div>
            <div className='shadow-lg shadow-gray-300 p-5'>
                <img className='h-[250px] w-[300px] mx-auto p-5' src={images[0]} alt="" />
                <h2 className='font-bold text-xl '>{title}</h2>
                <p className='my-2'>Rating: {rating}</p>
                <p className='font-semibold'>Stock: <small className='font-bold text-lg'>{stock}</small></p>
                <Link to={`/product/${id}`}> <button className='py-3 px-4 rounded-lg bg-purple-600 mt-2 text-white'>view details</button></Link>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
};

export default Product;