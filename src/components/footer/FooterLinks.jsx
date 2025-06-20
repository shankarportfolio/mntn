import { Link } from "react-router-dom";

const FooterLinks = ({LinkHref, children}) =>{
    return(
        <Link to={LinkHref} className="inline-block text-white text-left text-base leading-[32px] mb-[8px] hover:text-[var(--navhover)]">{children}</Link>
    )
}

export default FooterLinks;