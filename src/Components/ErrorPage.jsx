import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';


const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center my-20'>
                <img className='h-60 mb-5' src="/public/error-404.png" alt="" />
                <p className='text-3xl font-bold'>Oops, City not found!</p>
                <p className='text-gray-600'>The city you are looking for is not available.</p>
                <Link to='/' className="btn btn-primary mt-5">Oo Back!!</Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;