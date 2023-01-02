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


const Gallery = ( props) =>{
        const [data, setData] = useState({img: '', i: 0 })
       
        const viewImage = (img, i) => {
            setData({img, i});
            props.modalOpen(true);
           
        }

        const imgAction = (action) =>{
            let i = data.i;
            if(action === 'next-img'){
                setData({img: props.images[i + 1], i: i + 1})
            }
            if(action === 'previous-img'){
                setData({img: props.images[i - 1], i: i - 1})
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
                right:'0rem',
                left:'0rem',
                zIndex: '200',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <button onClick={() => imgAction('quite')}
                        style={{position:'absolute', 
                                top: '2rem', 
                                right: '1.5rem',
                                color:'white',
                                fontSize:'2rem',
                                zIndex: 201
                }}>X</button>
                <button onClick={() => imgAction('previous-img')}
                       className='bg-white rounded-full h-[3rem] w-[3rem]  text-[2rem] z-[201] absolute bottom-[15%] left-[30%]'
                >{'<'}</button>
                
                <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} alt="modal images"/>
                
                <button onClick={() => imgAction('next-img')}
                        className='bg-white rounded-full h-[3rem] w-[3rem]  text-[2rem] z-[201] absolute bottom-[15%] right-[30%]'
                >{'>'}</button>
            </div>
        }
        <div>

            <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'>
                    {props.images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor:'pointer'}}
                            alt="Gallery images"
                            className='hover:scale-105 transition-all duration-500'
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