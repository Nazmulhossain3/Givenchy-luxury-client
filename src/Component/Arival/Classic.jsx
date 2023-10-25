import { useEffect, useState } from "react";
import classic from '../../assets/img/classic_001.avif'
import banner from '../../assets/img/banner.webp'

const Classic = () => {

    const [classicProducts,setClassicProduct] = useState([])

    useEffect(()=> {
        fetch('ClassicData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setClassicProduct(data)
        })



    },[])


    return (
        <div>
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

       <button className='text-sm border border-black flex mx-auto px-40 mb-12 py-3 '>VIEW MORE</button>

       <img className='flex mx-auto lg:mt-24 mb-16 lg:w-[700px]' src={banner} alt="" />
        </div>
    );
};

export default Classic;