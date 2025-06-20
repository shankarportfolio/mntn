import FooterBlogCol from "./FooterBlogCol";
import FooterMoreLinks from "./FooterMoreLinks";


const FooterRight = () =>{
    return(
        <div className="w-full md:w-1/2 flex items-start justify-start md:justify-end flex-wrap">
            <FooterBlogCol />
            <FooterMoreLinks />
        </div>
    )
}

export default FooterRight;