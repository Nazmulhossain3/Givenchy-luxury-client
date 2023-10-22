import { useEffect, useState } from 'react';
import stikyImg from '../../assets/img/Stikyimg.jpg'

const Women = () => {

    const [womenProducts,setWomenProduct] = useState([])

    useEffect(()=> {
        fetch('/WomenData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setWomenProduct(data)
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

              {/* here all women product */}

              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto p-12 '>
              {
                womenProducts.map((product,index)=><div key={index}>
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

export default Women;