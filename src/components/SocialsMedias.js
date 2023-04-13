// import icons
import {
    ImFacebook,
    ImTwitter,
    ImPinterest,
    ImInstagram,
    ImYoutube,
  } from 'react-icons/im';
  
  const SocialsMedias = () => {
    return (
      <div
        className='xl:flex'
      >
        <ul className='flex gap-x-4'>
          <li>
            <a href='http://wwww.facebook.com' target='_blank'>
              <ImFacebook className='sxl:text-[25px]' />
            </a>
          </li>
          <li>
            <a href='http://www.twitter.com' target='_blank'>
              <ImTwitter className='sxl:text-[25px]'/>
            </a>
          </li>
          <li>
            <a href='http://www.pinterest.com' target='_blank'>
              <ImPinterest className='sxl:text-[25px]'/>
            </a>
          </li>
          <li>
            <a href='http://www.instagram.com' target='_blank'>
              <ImInstagram className='sxl:text-[25px]'/>
            </a>
          </li>
          <li>
            <a href='http://www.youtube.com' target='_blank'>
              <ImYoutube className='sxl:text-[25px]'/>
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default SocialsMedias;
  