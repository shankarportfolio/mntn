import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroHeading from "../headings/HeroHeading";
import Tagline from "../headings/Tagline";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

const BannerSection = () =>{

    const [speed, setSpeed] = useState(-150);  // default desktop value
    useEffect(() => {
        const updateSpeed = () => {
        if (window.innerWidth <= 500) {
            setSpeed(-20);  // mobile speed
        } else if(window.innerWidth <= 1025) {
            setSpeed(-30); // tab speed
        } else{
            setSpeed(-50); // desktop speed
        }
        };

        updateSpeed();  // call initially
        window.addEventListener("resize", updateSpeed);  // listen for resizing

        return () => window.removeEventListener("resize", updateSpeed);
    }, []);

    return(
        <section className="w-full bg-slate-500 h-screen flex items-start md:items-center justify-center">
            <Parallax speed={speed}>
                <div className="hero-content w-[var(--herowidth)] mt-[16%] md:mt-[0] m-auto z-9 relative text-left">
                    <Tagline>A Hiking guide</Tagline>
                    <HeroHeading />
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="text-white font-bold inline-block text-base font-nav hover:text-[var(--navhover)] hover:translate-y-[var(--navhovermove)] transition-all duration-[500ms] ease-in-out p-[0] no-underline outline-none ">scroll down <FontAwesomeIcon icon={faArrowDown} className="ml-[15px]" /></a>
                </div>
            </Parallax>
        </section>
    )
}

export default BannerSection;