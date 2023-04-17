
import React, {useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const Gallery = ( props) =>{
        const [data, setData] = useState({img: '', i: 0 })
       
        const viewImage = (img, i) => {
            setData({img, i});
            props.modalOpen(true);  
        }

        const imgAction = (action) =>{
            let i = data.i;
            if(action === 'next-img'){
                setData({img: props.urls[i + 1], i: i + 1});
                if (i+1 === props.urls.length){ props.modalOpen(false)}
            }
            if(action === 'previous-img'){
                setData({img: props.urls[i - 1], i: i - 1})
                if (i-1 < 0 ){ props.modalOpen(false)}
            }
            if(action === 'quite'){
                setData({img: '', i: 0});
                props.modalOpen(false);
            }

        }
    return(
    <>
        { data.img && 
            <div style={{
                width: '100%',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.6)',
                position: 'fixed',
                top:'0rem',
                right:'0rem',
                left:'0rem',
                zIndex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow:'hidden',
            }}
            >
                <button onClick={() => imgAction('quite')}
                        className='
                            absolute
                            top-[2rem]
                            right-[1.5rem]
                            text-white
                            text-[2rem]
                            z-[201]           
                            
                '>X</button>
                <button onClick={() => imgAction('previous-img')}
                       className='
                       bg-[rgba(255,255,255,0.7)] 
                        rounded-full 
                        h-[3rem] 
                        w-[3rem]  
                        text-[2rem] 
                        z-[201] 
                        absolute 
                        bottom-[15%] md:bottom-[5%] lg:bottom-[50%]
                        left-[30%] lg:left-[25%]     
                '>{'<'}</button>
                
                <img 
                    src={data.img} 
                    className='w-auto max-w-[90%] max-h-[90%]'
                    alt="modal images"/>
                
                <button onClick={() => imgAction('next-img')}
                        className='
                            bg-[rgba(255,255,255,0.7)] 
                            rounded-full
                            h-[3rem] 
                            w-[3rem]  
                            text-[2rem] 
                            z-[201] 
                            absolute 
                            bottom-[15%] md:bottom-[5%] lg:bottom-[50%] 
                            right-[30%] lg:right-[25%]
                '>{'>'}</button>
            </div>
        }
        <div className='px-4 md:px-0'>

            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter='20px' className=''>
                    {props.urls.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{display: "block", cursor:'pointer'}}
                            className={`${data.img && 'blur-lg'} hover:scale-105 transition-all duration-500 w-[100%]`}
                            alt="Gallery images"
                            onClick={() => viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>

        </div>
    </>
    
    )
}
export default Gallery