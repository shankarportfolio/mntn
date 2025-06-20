const ContentPara = ({children, CustomParaClass = ""})=>{
    return(
        <p className={`text-white text-base text-left font-normal font-nav leading-[32px] mb-[32px] ${CustomParaClass}`}>{children}</p>
    )
}

export default ContentPara;