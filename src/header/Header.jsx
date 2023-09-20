import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between py-5 px-16 shadow-lg shadow-slate-600'>
            <h2 className='font-bold text-2xl'>Alibaba</h2>
            <div className='flex gap-10'>
                <Link to={'/'}>Home</Link>
                <Link to={'/product'}>Product</Link>
                <Link to={'/dashboard'}>DashBoard</Link>
            </div>
        </div>
    );
};

export default Header;