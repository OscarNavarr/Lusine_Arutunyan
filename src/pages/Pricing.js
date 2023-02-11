import React, { useContext } from 'react'

// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';
import PricingComponent from '../components/pricing/PricingComponent';
import Header from '../components/Header';


const Pricing = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className=''
        >
            <Header className='z-[30]' />
            <div className='container mx-auto h-full relative'>
               <h1 className='text-center text-3xl pt-24 lg:pt-36'>Pricing of my services</h1>
                <div className='flex flex-wrap lg:flex-row h-full items-center justify-around text-center lg:text-left lg:pt-16 pb-[8rem]'>
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
        </motion.section>
    )
}

export default Pricing