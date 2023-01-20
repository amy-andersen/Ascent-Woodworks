import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import logo from './Images/74.png';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


const Home = (props) => {
    return (
        <div>
            <nav class="bg-zinc-600 w-full">
                <div class="mx-auto flex justify-between px-2">
                        <div class="ml-6 border-0 w-1/5 relative flex  items-center justify-between">
                            <a href="/">
                                <img class="h-14" src={logo} alt="Ascent Woodworks "/>
                            </a>
                        </div>
                        <div class="mr-6 w-1/5 relative flex h-16 items-center justify-between">
                            <a href="/contact" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">Contact</a>
                            <a href="/buy" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">Products</a>
                            <a href="/tipsandtricks" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">DIY</a>
                        </div>
                    </div>
            </nav>
            <div class="w-full h-screen bg-saw saturate-50 relative">
                <p class="shadow font-mono text-9xl py-64 text-stone-200 tracking-wide font-extrabold drop-shadow-lg shadow-black">ASCENT WOODWORKS</p>
            </div>
            <div class="flex flex-wrap justify-center">
                <div class=" flex w-9/12 justify-around my-16">
                    <div class=" w-fit text-left">
                        <h1 class="text-lg font-bold mb-2">GREAT DESIGN WITHOUT THE GUESSWORK</h1>
                        <h1 class="text-lg">My work is about helping people make their ideas come to life. Whether you need help designing a unique piece, or you know exactly what you want, you’ve come to the right place! I am ready to begin working with you to bring your vision to life. If you are interested in purchasing a piece from me, I'll work closely with you, using 3D modeling to make sure your design is exactly what you want before it's made. For unique furniture, custom-made for you and your space, contact me today and we’ll get started! </h1>
                    </div>
                    <div>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img
                                    class="w-full h-96"
                                    src="https://images.pexels.com/photos/6431833/pexels-photo-6431833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="dining table"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    class="object-fill w-full h-96"
                                    src="https://images.pexels.com/photos/8251487/pexels-photo-8251487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="chair"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    class="object-fill w-full h-96"
                                    src="https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg"
                                    alt="dresser"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class=" flex w-9/12 justify-around mb-16 border-b-2 pb-12">
                    <div>
                        <img class="w-full" src="https://images.pexels.com/photos/5710873/pexels-photo-5710873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dining table"/>
                    </div>
                    <div class=" w-fit text-left ml-3">
                        <h1 class="text-lg font-bold mb-2">MEET MARK</h1>
                        <h1 class="text-lg">This all started as a hobby for me, learning ifrom the internet and working out of my garage. 
                        I love creating things and seeing finished projects in people's homes! When I'm not in the shop I'm out enjoying the 
                        Colorado outdoors or traveling to incredibe places, and name all my furniture from the mountains that inspire my work. 
                        Look no further for honest, passionate, authentic furniture, made to last a lifetime.</h1>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="w-1/2 mb-14">
                    <h1 class="text-xl font-bold">TESTIMONIALS</h1>
                    <p class="text-lg text-left mt-7 italic">“I received my new dining table and I really thought I loved it just looking at images, but I have to say the pictures do not reveal how absolutely beautiful this table is in person! It was such a pleasure working with Mark, he was great about keeping me updated on the progress of the build. It does take a few months to complete the project, but so worth the wait!”</p>
                    <p class="text-lg text-left mt-7 italic">“We bought a home with an odd sized recess in our living room and could not find anything that fit quite right. We stumbled upon Ascent Woodworks and Mark created the most beatiful built-in media console for us. Not only is the piece incredible, it's extremelty practical - holes for all our cords, hidden cabinet for cable box - the works! Easily the most beautiful piece we have in our home... we'll be coming back for more!”</p>
                    <p class="text-lg text-left my-7 italic">“I’m not sure where to start. The customer service at Ascent Woodworks is phenomenal. We received our Pike’s table Tuesday evening. The craftsmanship, beauty, and service truly made the wait worth while. The stain is gorgeous and looks incredible in both the morning and evening light. We are looking forward to making so many memories around our beautiful table!”</p>
                </div>
            </div>
            <div class="bg-zinc-600 w-full h-100">
                <div class="mx-auto flex flex-wrap justify-center px-2">
                        <div class="w-1/6 flex mt-5 justify-between">
                            <a href="/">
                                <img  src={facebook} alt="Facebook"/>
                            </a>
                            <a href="/">
                                <img  src={instagram} alt="Instagram"/>
                            </a>
                            <a href="/">
                                <img  src={twitter} alt="Twitter"/>
                            </a>
                        </div>
                        <div class="h-0 w-full">
                        </div>
                        <div class=" py-5 w-1/5 flex justify-center">
                            <p>5000 Pine Dr. Denver, CO 80125</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home;