const NavBar = () =>{
    return (
        <div className="w-2/4 hidden md:flex items-center justify-center">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-white font-bold inline-block text-base font-nav hover:text-[var(--navhover)] hover:translate-y-[var(--navhovermove)] transition-all duration-[500ms] ease-in-out px-[24px] py-[8px] no-underline outline-none">Equipment</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-white font-bold inline-block text-base font-nav hover:text-[var(--navhover)] hover:translate-y-[var(--navhovermove)] transition-all duration-[500ms] ease-in-out px-[24px] py-[8px] no-underline outline-none">About us</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-white font-bold inline-block text-base font-nav hover:text-[var(--navhover)] hover:translate-y-[var(--navhovermove)] transition-all duration-[500ms] ease-in-out px-[24px] py-[8px] no-underline outline-none">Blog</a>
        </div>
    )
}

export default NavBar;