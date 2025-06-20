import SiteLogo from '../../assets/images/Logo.svg';

const Logo = () =>{
    return (
        <div className="w-1/4">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="w-full block no-underline outline-none">
                <img src={SiteLogo} alt="Logo" width="108" height="24" className="h-auto"/>
            </a>
        </div>
    )
}

export default Logo;