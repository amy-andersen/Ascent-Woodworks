import React from "react";
import logo from './Images/74.png';
import kitchen from './Images/contact_background.jpg';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';


const Contact = (props) => {
    return (
        <div>
            <nav class="bg-zinc-600">
                <div class="mx-auto flex justify-between px-2">
                    <div class="ml-6 border-0 w-1/5 relative flex  items-center justify-between">
                        <a href="/">
                            <img class="h-14" src={logo} alt="Ascent Woodworks "/>
                        </a>
                    </div>
                    <div class="mr-6 w-1/5 relative flex h-16 items-center justify-between">
                        <a href="/" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">Home</a>
                        <a href="/buy" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">Products</a>
                        <a href="/tipsandtricks" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">DIY</a>
                    </div>
                </div>
            </nav>
            <div class="">
                <img class="" alt="kitchen" src={kitchen}></img>
            </div>
            <div class="flex flex-wrap justify-center">
                <div class="w-2/3 mt-10">
                    <h1 class="text-lg text-left mb-5">At Ascent Woodworks I am so humbled to have the opportunity to create furnishings for life. With every project I am given the privilege to develop, I take great pride in hand crafting unique, high-quality furnishings tailored to you, your needs, and your style. </h1>
                    <h1 class="text-lg text-left">Thank you for the opportunity to create these special pieces for you and your home!</h1>
                </div>
            </div>
            <div class="flex justify-center w-full">
                <div class="flex w-2/3 p-10 mb-2 justify-center">
                    <form class="w-3/4">
                        <div class="mb-7 flex flex-wrap justify-start">
                            <label>Name</label>
                            <input type="text" class="border border-gray-300 bg-gray-100 w-full" name="name"/>
                        </div>
                        <div class="mb-7 flex flex-wrap justify-start">
                            <label>Email</label>
                            <input type="text" class="border border-gray-300 bg-gray-100 w-full"  name="email"/>
                        </div>
                        <div class="mb-7 flex flex-wrap justify-start">
                            <label>Phone ###-###-####</label>
                            <input type="text" class="border border-gray-300 bg-gray-100 w-full"  name="phone"/>
                        </div>
                        <div class="mb-9 flex flex-wrap justify-start">
                            <label>Message</label>
                            <textarea class="border border-gray-300 bg-gray-100 h-28 w-full" name="message"></textarea>
                        </div>
                        <div class="flex justify-start">
                            <button class="border border-black hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="flex justify-center w-full mt-10">
                <div class="flex w-2/3 justify-around mb-16 border-y-2 py-10">
                    <div class="">
                        <h1 class="font-bold">EMAIL</h1>
                        <h2>Awoodworks@gmail.com</h2>
                    </div>
                    <div class="">
                        <h1 class="font-bold">ADDRESS</h1>
                        <h2>5000 Pine Dr</h2>
                        <h2>Denver, CO</h2>
                        <h2>80125</h2>
                    </div>
                    <div class="">
                        <h1 class="font-bold">PHONE</h1>
                        <h2>(303) 999-9999</h2>
                    </div>
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

export default Contact;