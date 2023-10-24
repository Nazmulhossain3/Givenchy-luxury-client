import { useEffect, useState } from 'react';
const Strass = () => {
 const [strassProducts,setStrassProduct] = useState([])

    useEffect(()=> {
        fetch('/StrassData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setStrassProduct(data)
        })



    },[])



    return (
        <div>

    <div className='text-sm text-center opacity-80 py-10'>
        <h2 className='mb-3'>STRASS</h2>
        <h2>Introducing the Shark Lock boot in satin with a strass finish: a stunning fusion</h2>
        <h2>of style and artistry. The iconic shark lock detail adds a touch of</h2>
        <h2>empowerment.</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto p-12 '>
             {
               strassProducts.map((product,index)=><div key={index}>
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



            
        </div>
    );
};

export default Strass;