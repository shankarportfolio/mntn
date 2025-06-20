import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const ReadMoreLink = ({LinkHref})=>{
    return(
        <>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href={LinkHref} className="text-[var(--navhover)] font-bold inline-block text-base font-nav hover:text-[var(--navhover)] hover:translate-x-[var(--readhovermove)] transition-all duration-[500ms] ease-in-out p-[0] no-underline outline-none text-left">read more <FontAwesomeIcon icon={faArrowRightLong} className="ml-[15px]" /></a>
        </>
    )
}

export default ReadMoreLink;