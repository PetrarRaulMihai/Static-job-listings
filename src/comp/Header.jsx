import { useEffect, useState} from 'react'
function Header () {

    const headerImgSmall = './Images/bg-header-mobile.svg';    
    const headerImgLarge = './Images/bg-header-desktop.svg';


    const [headerImg, setHeaderImg] = useState('');

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setHeaderImg(headerImgLarge);
          } else {
            setHeaderImg(headerImgSmall);
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <header className="bg-slate-700 mb-36">
            <img className='h-24 w-full object-fill' src={headerImg} alt='Header background img'></img>
            <div className="text-lime-700 text-3xl"></div>
        </header>
    ) 
}

export default Header;