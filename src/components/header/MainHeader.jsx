import Logo from '../header/Logo'
import AccountNav from './AccountNav';
import NavBar from './NavBar';

const MainHeader = ()=>{
    return (
        <header className="w-full bg-transparent absolute top-0 right-0">
            <div className="container w-[var(--container-width)] max-w-[var(--containermax)] mx-auto flex items-center justify-between md:justify-center pt-[40px]">
                <Logo />
                <NavBar />
                <AccountNav />
            </div>
        </header>
    )
}

export default MainHeader;