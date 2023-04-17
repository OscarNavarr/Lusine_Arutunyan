import React, {useRef} from 'react'

// import motion
import { motion, useInView } from 'framer-motion';

import PricingComponent from '../components/pricing/PricingComponent';


const Pricing = () => {
    
    //MY SERVICES TEXT ANIMATION
    const titleRef = useRef(null)
    const isTitleInView = useInView(titleRef, { once: true },{margin: "-10%"})

    //CARD ONE ANIMATION
    const cardOneRef = useRef(null)
    const isCardOneInView = useInView(cardOneRef,{ once: true }, {margin: "-15%"})
    
    //CARD TWO ANIMATION
    const cardTwoRef = useRef(null)
    const isCardTwoInView = useInView(cardTwoRef,{ once: true }, {margin: "-15%"})
    
    //CARD THREE ANIMATION
    const cardThreeRef = useRef(null)
    const isCardThreeInView = useInView(cardThreeRef,{ once: true }, {margin: "-15%"})
    
    //CARD FOUR ANIMATION
    const cardFourRef = useRef(null)
    const isCardFourInView = useInView(cardFourRef,{ once: true }, {margin: "-15%"})
    
    //CARD FIVE ANIMATION
    const cardFiveRef = useRef(null)
    const isCardFiveInView = useInView(cardFiveRef,{ once: true }, {margin: "-15%"})
    
    //CARD SIX ANIMATION
    const cardSixRef = useRef(null)
    const isCardSixInView = useInView(cardSixRef,{ once: true }, {margin: "-15%"})

    return (
        <section
        className='mt-[7rem]'
        id='pricing'
        >
            <div className='container mx-auto h-full relative'>
                <motion.h1 
                    ref={titleRef}
                    initial={{y: "70px", opacity: 0}}
                    animate={{y: isTitleInView ? "0px" : "70px", opacity: isTitleInView ? 1 : 0}}
                    transition={{duration: 1}}
                    className='h1 text-center lg:text-center  lg:text-[40px] special:text-[3.5rem] sxl:text-[60px]'
                >
                    My services
                </motion.h1>
               <div className='flex justify-center'>
                    <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-11 text-center lg:text-left lg:pt-16'>
                        
                        {/*CARD ONE */}
                        <motion.div
                            ref={cardOneRef}
                            initial={{y: "40px", opacity: 0}}
                            animate={{y: isCardOneInView ? "0px" : "40px", opacity: isCardOneInView ? 1 : 0}}
                            transition={{duration: 1}}
                        >
                            <PricingComponent
                                title='Love story/family'
                                value='40€'
                                duration='1h'
                                n_fotos='40-45'
                                time='10 days'
                                src='https://res.cloudinary.com/duchgijkt/image/upload/v1671746211/photos/family_dvvseg.jpg'
                            />
                        </motion.div>

                        {/*CARD TWO */}
                        <motion.div
                            ref={cardTwoRef}
                            initial={{y: "40px", opacity: 0}}
                            animate={{y: isCardTwoInView ? "0px" : "40px", opacity: isCardTwoInView ? 1 : 0}}
                            transition={{duration: 1, delay: 0.3}}
                        >

                            <PricingComponent
                                title='Individual'
                                value='40€'
                                duration='1h'
                                n_fotos='40-45'
                                time='3 days'
                                src='https://res.cloudinary.com/duchgijkt/image/upload/v1671748896/photos/individual_qz5skz.jpg'
                            />
                        </motion.div>

                        {/*CARD THREE */}
                        <motion.div
                            ref={cardThreeRef}
                            initial={{y: "40px", opacity: 0}}
                            animate={{y: isCardThreeInView ? "0px" : "40px", opacity: isCardThreeInView ? 1 : 0}}
                            transition={{duration: 1, delay: 0.4}}
                        >
                            <PricingComponent
                                title='Photo for Pregnant'
                                value='40€'
                                duration='1h'
                                n_fotos='40-45'
                                time='3 days'
                                src='https://res.cloudinary.com/duchgijkt/image/upload/v1671749211/photos/pregnant_lsbeit.jpg'
                            />
                        </motion.div>
                        
                        {/*CARD FOUR */}
                        <motion.div
                            ref={cardFourRef}
                            initial={{y: "40px", opacity: 0}}
                            animate={{y: isCardFourInView ? "0px" : "40px", opacity: isCardFourInView ? 1 : 0}}
                            transition={{duration: 1}}
                        >
                            <PricingComponent 
                                title='Weddings'
                                value='40€'
                                duration='1h'
                                n_fotos='40-45'
                                time='3 days'
                                src='https://res.cloudinary.com/duchgijkt/image/upload/v1671749734/photos/Weddings_kk4ctx.jpg'
                            />
                        </motion.div>

                        {/*CARD FIVE */}
                        <motion.div
                            ref={cardFiveRef}
                            initial={{y: "40px", opacity: 0}}
                            animate={{y: isCardFiveInView ? "0px" : "40px", opacity: isCardFiveInView ? 1 : 0}}
                            transition={{duration: 1, delay: 0.3}}
                        >
                            <PricingComponent 
                                title='Baby Birthday'
                                value='40€'
                                duration='1h'
                                n_fotos='40-45'
                                time='3 days'
                                src='https://res.cloudinary.com/duchgijkt/image/upload/v1671752363/photos/birdays_v80m9n.jpg'
                            />
                        </motion.div>

                        {/*CARD SIX */}
                        <motion.div
                            ref={cardSixRef}
                            initial={{y: "40px", opacity: 0}}
                            animate={{y: isCardSixInView ? "0px" : "40px", opacity: isCardSixInView ? 1 : 0}}
                            transition={{duration: 1, delay: 0.3}}
                        >
                            <PricingComponent 
                                title='Birthday'
                                value='40€'
                                duration='1h'
                                n_fotos='40-45'
                                time='3 days'
                                src='https://res.cloudinary.com/duchgijkt/image/upload/v1671752537/photos/fashion_njt0i2.jpg'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing