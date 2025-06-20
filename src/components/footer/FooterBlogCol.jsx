import FooterMenuHeading from "../headings/FooterMenuHeading";
import FooterLinks from "./FooterLinks";

const FooterBlogCol = () =>{
    return(
        <div className="w-full md:w-1/2 mb-[40px] md:mb-[0]">
            <FooterMenuHeading>More on The Blog</FooterMenuHeading>
            <div className="flex flex-col items-start justify-start">
                <FooterLinks LinkHref="/">About MNTN</FooterLinks>
                <FooterLinks LinkHref="/">Contributors & Writers</FooterLinks>
                <FooterLinks LinkHref="/">Write For Us</FooterLinks>
                <FooterLinks LinkHref="/">Contact Us</FooterLinks>
                <FooterLinks LinkHref="/">Privacy Policy</FooterLinks>
            </div>
        </div>
    )
}

export default FooterBlogCol;