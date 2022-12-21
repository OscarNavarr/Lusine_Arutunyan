/**
 * 
 * HACER QUE LA VISTA DETALLADA DE LA FOTO SE MUESTRE POR ENSIMA DE TODO 
 * HACER QUE EL SCROOL NO SE MUESTRE EN LA VISTA DETALLA
 * FALTA HACER ESTE PAGINA RESPONSIVA 
 * 
 * TAREA PARA HOY
 * SUBIR LAS FOTOS A CLOUDINARY
 * MOSTRAR LAS FOTOS DE CLOUDINARY EN ESTA PAGINA
 * HACER FUNCIONAL EL SELECT BOX PARA QUE MUESTRE LAS IMAGENES SEGÚN SE SELECCIONE SU TIPO
 */

import React, {useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"



const images = [
    "https://picsum.photos/2100/3100",
    "https://picsum.photos/2200/3200",
    "https://picsum.photos/2350/3300",
    "https://picsum.photos/2420/3400",
    "https://picsum.photos/2500/3600",
    "https://picsum.photos/2700/3700",
    "https://picsum.photos/2800/3800",
]

const Gallery = () =>{
        const [data, setData] = useState({img: '', i: 0 })
        
        const viewImage = (img, i) => {
            setData({img, i})
        }

        const imgAction = (action) =>{
            let i = data.i;
            if(action === 'next-img'){
                setData({img: images[i + 1], i: i + 1})
            }
            if(action === 'previous-img'){
                setData({img: images[i - 1], i: i - 1})
            }
            if(action === 'quite'){
                setData({img: '', i: 0});
                console.log('estoy haciendo click');
            }

        }
    return(
    <>
        { data.img && 
            <div style={{
                width: '100%',
                height: '100vh',
                background: 'black',
                position: 'fixed',
                left:'0rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow:'hidden !important',
            }}>
                <button onClick={() => imgAction('quite')}
                        style={{position:'absolute', 
                                top: '2rem', 
                                right: '3rem',
                                color:'white',
                                fontSize:'2rem'
                }}>X</button>
                <button onClick={() => imgAction('previous-img')}
                        style={{color:'white',
                                fontSize:'3.5rem',
                                marginRight:'2rem',
                    }}
                >{'<'}</button>
                
                <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} alt="modal images"/>
                
                <button onClick={() => imgAction('next-img')}
                        style={{color:'white',
                                fontSize:'3.5rem',
                                marginLeft:'2rem',
                    }}
                >{'>'}</button>
            </div>
        }
        <div>
            <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor:'pointer'}}
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