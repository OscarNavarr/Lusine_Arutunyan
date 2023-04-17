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
                                src='https://firebasestorage.googleapis.com/v0/b/lusine-arutunyan.appspot.com/o/pricing%2Ffamily_dvvseg.jpg?alt=media&token=8e434c5f-1861-4d38-9528-4dceb3f86a88'
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
                                src='https://firebasestorage.googleapis.com/v0/b/lusine-arutunyan.appspot.com/o/pricing%2Fphoto_2023-04-17%2023.02.27.jpeg?alt=media&token=d5ad044e-45dc-41ae-b7f4-7a7904970423'
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
                                src='https://firebasestorage.googleapis.com/v0/b/lusine-arutunyan.appspot.com/o/pricing%2Fimg1.jpeg?alt=media&token=de453b4d-f186-4d5c-8173-2ff48e734a99'
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
                                src='https://firebasestorage.googleapis.com/v0/b/lusine-arutunyan.appspot.com/o/pricing%2FWeddings_kk4ctx.jpg?alt=media&token=29d03703-93ac-4299-a818-01502f7b817a'
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
                                src='https://firebasestorage.googleapis.com/v0/b/lusine-arutunyan.appspot.com/o/pricing%2Fbirdays_v80m9n.jpg?alt=media&token=484725fe-1c15-4d30-800f-4ac1da39331c'
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
                                title='Fashion'
                                value='40€'
                                duration='1h'
                                n_fotos='40-45'
                                time='3 days'
                                src='https://firebasestorage.googleapis.com/v0/b/lusine-arutunyan.appspot.com/o/pricing%2Fphoto_2023-04-17%2023.01.30.jpeg?alt=media&token=59f60d43-03f1-4ef4-bf89-af2f4122aee6'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing