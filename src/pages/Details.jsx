import { useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData()
    const {title, images, rating, stock } = product
    return (
        <div>
            <div className=' mt-10 w-[30%] shadow-md shadow-gray-400 mx-auto py-7 px-10 rounded-lg'>
                <img className='w-[250px] h-[200px] mx-auto' src={images[0]} alt="" />
                <h2 className='font-bold text-xl '>{title}</h2>
                <p className='my-2'>Rating: {rating}</p>
                    <p className='font-semibold'>Stock: <small className='font-bold text-lg'>{stock}</small></p>
                    <button className='py-3 px-4 rounded-lg bg-purple-600 mt-2 text-white w-full'>Add Cart</button>
            </div>
        </div>
    );
};

export default Details;