import ContentWrapperLeft from "./ContentWrapperLeft";
import Content_1_Image from '../../assets/images/content_1_image.png';
import Content_2_Image from '../../assets/images/content_2_image.png';
import Content_3_Image from '../../assets/images/content_3_image.png';
import ContentWrapperRight from "./ContentWrapperRight";

const MainContentSection = () =>{
    return(
        <section className="w-full pt-[200px] relative z-[11]">
            <div className="container w-[var(--container-width)] max-w-[var(--containermax)] mx-auto">
                <ContentWrapperLeft BoxId="01" TagLine="Get Started" HeadingTitle="What level of  hiker are you?" ImagePath={Content_1_Image} ImageAlt="content_1_image" CustomClass="ml-auto" >Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</ContentWrapperLeft>
                <ContentWrapperRight BoxId="02" TagLine="Hiking Essentials" HeadingTitle="Picking the right Hiking Gear!" ImagePath={Content_2_Image} ImageAlt="content_2_image" CustomClass="mr-auto">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.<br/>
                Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</ContentWrapperRight>
                <ContentWrapperLeft BoxId="03" TagLine="where you go is the key" HeadingTitle="Understand Your Map & Timing" ImagePath={Content_3_Image} ImageAlt="content_2_image" CustomClass="ml-auto" >To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</ContentWrapperLeft>
            </div>
        </section>
    )
}

export default MainContentSection;