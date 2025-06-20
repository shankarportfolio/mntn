const Tagline = ({children}) =>{
    return (
        <div className="tagline flex items-center justify-start z-99 relative mb-[16px] md:mb-[32px]">
            <div className="linetag w-[40px] md:w-[72px] h-[2px] bg-[var(--navhover)] mr-[16px] md:mr-[24px]"></div>
            <h5 className="font-bold text-xs md:text-sm text-[var(--navhover)] font-nav uppercase tracking-[6px]">{children}</h5>
        </div>
    )
}

export default Tagline;