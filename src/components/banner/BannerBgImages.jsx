import BannerTopImg from '../../assets/images/banner/top-bg-img.png';
import BannerMiddleImg from '../../assets/images/banner/middle-bg-img.png';
import BannerBottomImg from '../../assets/images/banner/bottom-bg-img.png';
import Gradient from './Gradient';
import { Parallax } from 'react-scroll-parallax';

const BannerBgImages = () =>{
    return(
        <>
            <Parallax speed={-1} className='w-full absolute top-0 right-0'>
                <img src={BannerTopImg} alt='top-bg-img' className='w-full' />
            </Parallax>
            <Parallax speed={-4} className='w-full absolute top-[40%] right-0'>
                <img src={BannerMiddleImg} alt='top-bg-img' className='w-full' />
            </Parallax>
            <Parallax speed={0} className='w-full absolute top-[60%] right-0 z-[10]'>
                <img src={BannerBottomImg} alt='top-bg-img' className='w-full' />
            </Parallax>
            <Gradient />
        </>
    )
}

export default BannerBgImages;