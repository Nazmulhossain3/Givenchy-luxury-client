import stikyImg from '../../assets/img/Stikyimg.jpg'
import banner from '../../assets/img/banner.webp'
const Banner = () => {
    return (
        <div>
           
              <div className='static'>
              <img className='h-10 w-10 flex mx-auto mt-6 ' src={stikyImg} alt="" />
                <div className='text-center mt-10 mb-12  text-sm'>
                    <h4>Shark Lock Boots</h4>
                    <p>DISCOVER</p>
                </div>
              </div>

                <div className=''>
                    <img className='flex mx-auto p-6' src={banner} alt="" />
                </div>
        </div>
    );
};

export default Banner;