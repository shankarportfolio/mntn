import SiteLogo from '../../assets/images/Logo.svg';
import ContentPara from '../headings/ContentPara';

const FooterLeft = ()=>{

    var date = new Date();
    var fy = date.getFullYear();

    return(
        <div className="w-full md:w-1/2 text-left mb-[40px] md:mb-[0]">
            <img src={SiteLogo} width="w-[102px] inline-block" height="" alt="site logo"/>
            <ContentPara CustomParaClass="mt-[24px] max-w-[290px]">Get out there & discover your next slope, mountain & destination!</ContentPara>
            <ContentPara CustomParaClass="opacity-[0.5]">Copyright {fy} MNTN, Inc. Terms & Privacy</ContentPara>
        </div>
    )
}

export default FooterLeft;