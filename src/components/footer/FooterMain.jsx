import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const FooterMain = () =>{
    return(
        <section className="w-full pb-[120px] md:pb-[280px]">
            <div className="container w-[var(--container-width)] max-w-[var(--containermax)] mx-auto flex items-start justify-center flex-wrap">
                <FooterLeft />
                <FooterRight />
            </div>
        </section>
    )
}

export default FooterMain;