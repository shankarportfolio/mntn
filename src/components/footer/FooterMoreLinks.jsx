import FooterMenuHeading from "../headings/FooterMenuHeading";
import FooterLinks from "./FooterLinks";

const FooterMoreLinks = () =>{
    return(
        <div className="w-full md:w-1/2">
            <FooterMenuHeading>More on MNTN</FooterMenuHeading>
            <div className="flex flex-col items-start justify-start">
                <FooterLinks LinkHref="/">The Team</FooterLinks>
                <FooterLinks LinkHref="/">Jobs</FooterLinks>
                <FooterLinks LinkHref="/">Press</FooterLinks>
            </div>
        </div>
    )
}

export default FooterMoreLinks;