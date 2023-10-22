    import versityimg from '../../assets/img/varsity-01-data.avif'
    import versityimg2 from '../../assets/img/varsity-04-data.avif'
    const VersitySection = () => {
        return (
            <div className='bg-[#CDD1DE] mt-48'>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:p-48 gap-12'>
                  <div className='text-center'>
                    <p className='mb-6'>Varsity</p>
                    <p className='mb-12'>FOR HIM</p>
                   <img src={versityimg} alt="" />
                  </div>
                   
                   <div className='text-center'>
                   <p className='mb-6'>Varsity</p>
                    <p className='mb-12'>FOR HIM</p>
                   <img src={versityimg2} alt="" />
                   </div>
                </div>
                
            </div>
        );
    };
    
    export default VersitySection;