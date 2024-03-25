import Hero from "./Hero";
import Animated  from '/assets/animated.svg'


const Home = () => {
    return (
        <div className=" min-h-[calc(100vh-116px)] flex flex-col justify-center relative">
         <Hero
         ></Hero>
         <img className=" absolute bottom-0 rotate-180 " src={Animated} alt="" />
        </div>
    );
};

export default Home;