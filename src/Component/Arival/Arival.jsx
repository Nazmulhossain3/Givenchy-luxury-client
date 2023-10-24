import stikyImg from '../../assets/img/Stikyimg.jpg'
import arrivalVideo from '../../assets/img/video.mp4'


import Classic from './Classic';
import Strass from './Strass';

const Arival = () => {

   



    return (
        <div>
             <div className='static'>
              <img className='h-10 w-10 flex mx-auto mt-6 ' src={stikyImg} alt="" />
                <div className='text-center mt-10 mb-12  text-sm'>
                    <h4>Shark Lock Boots</h4>
                    <p>DISCOVER</p>
                </div>
              </div>

              {/* here is arrival banner and info */}

              <div className='text-sm px-6 py-10 opacity-80'>
              <h2>Shark Lock Givenchy’s signature shoe, emblematic of Parisian elegance with an</h2>
              <h2>audacious twist, has undergone another fresh reimagining.</h2>

              </div>
        <video className='lg:px-28  mb-6' src={arrivalVideo}></video>

       <h2 className='text-center mt-4 text-sm'>Explore the collection</h2>

       <Classic></Classic>
       <Strass></Strass>


    

   

        </div>
    );
};

export default Arival;