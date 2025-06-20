import ContentNumber from "../headings/ContentNumber";
import ContentPara from "../headings/ContentPara";
import ReadMoreLink from "../headings/ReadMoreLink";
import SectionHeading from "../headings/SectionHeading";
import Tagline from "../headings/Tagline";
import ContentImage from "./ContentImage";

const ContentWrapperRight = ({TagLine, HeadingTitle, ImageAlt, ImagePath, CustomClass = "", BoxId, children})=>{
    return(
        <div className="w-full flex flex-wrap md:grid md:grid-cols-2 md:gap-x-[81px] mb-[120px] md:mb-[280px] relative z-[11]">
            <div className="w-full mb-[64px] md:mb-[0]">
                <ContentImage ImgSrc={ImagePath} ImgAlt={ImageAlt} CustomClass={CustomClass} />
            </div>
            <div className="w-full max-w-[550px] relative flex items-center justify-center">
                <div className="w-full text-left">
                    <ContentNumber>{BoxId}</ContentNumber>
                    <Tagline>{TagLine}</Tagline>
                    <SectionHeading>{HeadingTitle}</SectionHeading>
                    <ContentPara>{children}</ContentPara>
                    <ReadMoreLink />
                </div>
            </div>
        </div>
    )
}

export default ContentWrapperRight;