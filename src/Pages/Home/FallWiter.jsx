import FallWinter from '../../assets/img/FallWinter.avif'
import Footer from './Footer/Footer';
const FallWiter = () => {
    return (
        <div className='bg-[#FCF3EA]'>

            <div className='lg:p-48 text-center text-sm'>
                <p className='mb-4'>Fall Winter 2023</p>
                <p className='mb-12'>FOR HERTHE VOYOU BAG</p>
                <img src={FallWinter} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FallWiter;