import React from 'react'

// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
import PricingComponent from '../components/pricing/PricingComponent';


const Pricing = () => {
    return (
        <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        >
            <div className='container mx-auto h-full relative'>
               <h1 className='h1 text-center lg:text-center lg:text-[40px] special:text-[3.5rem] sxl:text-[60px]'>Our services</h1>
               <div className='flex justify-center'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-11 text-center lg:text-left lg:pt-16 pb-[8rem]'>
                        {/*CARD ONE */}
                        <PricingComponent
                            title='Love story/family'
                            value='40€'
                            duration='1h'
                            n_fotos='40-45'
                            time='10 days'
                            src='https://res.cloudinary.com/duchgijkt/image/upload/v1671746211/photos/family_dvvseg.jpg'
                        />
                        {/*CARD TWO */}
                        <PricingComponent
                            title='Individual'
                            value='40€'
                            duration='1h'
                            n_fotos='40-45'
                            time='3 days'
                            src='https://res.cloudinary.com/duchgijkt/image/upload/v1671748896/photos/individual_qz5skz.jpg'
                        />
                        {/*CARD THREE */}
                        <PricingComponent
                            title='Photo for Pregnant'
                            value='40€'
                            duration='1h'
                            n_fotos='40-45'
                            time='3 days'
                            src='https://res.cloudinary.com/duchgijkt/image/upload/v1671749211/photos/pregnant_lsbeit.jpg'
                        />
                        {/*CARD FOUR */}
                        <PricingComponent 
                            title='Weddings'
                            value='40€'
                            duration='1h'
                            n_fotos='40-45'
                            time='3 days'
                            src='https://res.cloudinary.com/duchgijkt/image/upload/v1671749734/photos/Weddings_kk4ctx.jpg'
                        />
                        {/*CARD FIVE */}
                        <PricingComponent 
                            title='Birthday'
                            value='40€'
                            duration='1h'
                            n_fotos='40-45'
                            time='3 days'
                            src='https://res.cloudinary.com/duchgijkt/image/upload/v1671752363/photos/birdays_v80m9n.jpg'
                        />
                        {/*CARD SIX */}
                        <PricingComponent 
                            title='Birthday'
                            value='40€'
                            duration='1h'
                            n_fotos='40-45'
                            time='3 days'
                            src='https://res.cloudinary.com/duchgijkt/image/upload/v1671752537/photos/fashion_njt0i2.jpg'
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Pricing