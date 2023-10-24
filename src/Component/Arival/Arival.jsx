import stikyImg from '../../assets/img/Stikyimg.jpg'
import arrivalVideo from '../../assets/img/video.mp4'
import classic from '../../assets/img/classic_001.avif'
import { useEffect, useState } from 'react';
const Arival = () => {

    const [classicProducts,setClassicProduct] = useState([])

    useEffect(()=> {
        fetch('/ClassicData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setClassicProduct(data)
        })



    },[])



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

        {/* here is classic collection */}

        <img className='lg:w-[650px] flex mx-auto mt-32 mb-10' src={classic} alt="" />
       
        <div className='text-sm text-center opacity-80 py-10'>
        <h2 className='mb-3'>CLASSIC</h2>
        <h2>A House iconic since 2012, the Shark Lock Boot Classic offers timeless</h2>
        <h2>sophistication with its signature 4G padlock.</h2>
        </div>
       
       {/* here show classic product image */}

       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto p-12 '>
              {
                classicProducts.map((product,index)=><div key={index}>
                   <div className=''>
                   <img className='lg:h-96' src={product.img} alt="" />
                   <div className='text-sm mt-4 text-center'>
                    <p>{product.name}</p>
                    <p className='mt-3'>{product.price}</p>
                    <p className='mt-3 text-gray-400'>{product.trending}</p>
                   </div>
                   </div>


                </div>)
              }
              </div>

       
        </div>
    );
};

export default Arival;