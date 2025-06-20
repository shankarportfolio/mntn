import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccountNav = ()=>{
    return(
        <div className="w-1/4 text-right">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="flex items-center justify-end text-white text-base font-bold inline-block font-[var(--navfontfamily)] hover:text-[var(--navhover)] transition-all duration-[500ms] ease-in-out no-underline outline-none">
                <FontAwesomeIcon icon={faCircleUser} className="mr-[10px]" /> Account
            </a>
        </div>
    )
}

export default AccountNav;