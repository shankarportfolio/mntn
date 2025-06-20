const ContentImage = ({ImgSrc, ImgAlt, CustomClass = ""}) =>{
    return(
        <img src={ImgSrc} alt={ImgAlt} width="" height="" className={`w-[100%] md:w-[auto] md:max-w-[100%] h-[320px] object-cover object-bottom md:h-auto ${CustomClass}`}/>
    )
}

export default ContentImage;