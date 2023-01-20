import React from "react";
import logo from './Images/74.png';
import moisture from './Images/moisture.jpg';
import sawBlade from './Images/saw_blade.jpg';
import sprayer from './Images/sprayer.jpg';
import miter from './Images/miterjoint.jpg';
import visualAid from './Images/visualaid.jpg';
import vinegar from './Images/vinegar.webp';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';

const Diy = (props) => {
    return (
        <div class="">
            <nav class="bg-zinc-600">
                <div class="mx-auto flex justify-between px-2">
                    <div class="ml-6 border-0 w-1/5 relative flex  items-center justify-between">
                        <a href="/">
                            <img class="h-14" src={logo} alt="Ascent Woodworks "/>
                        </a>
                    </div>
                    <div class="mr-6 w-1/5 relative flex h-16 items-center justify-between">
                        <a href="/" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">Home</a>
                        <a href="/contact" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">Contact</a>
                        <a href="/buy" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">Products</a>
                    </div>
                </div>
            </nav>
            <div class="flex flex-wrap justify-center">
                <div class="w-2/3 border-b-2 py-14">
                    <h1 class="text-4xl">LOOKING FOR TIPS TO BUILD YOUR OWN FURNITURE?</h1>
                    <h2 class="text-lg mt-4">I love to make furniture and I love to share ideas, too. As someone who was self-taught from good ole YouTube I am a full believer in open sourced woodworking! Something specific you're curious about? <a href="/contact" class="text-sky-500">contact me</a>.</h2>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={moisture} alt="water drops"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Know your wood’s moisture content</h2>
                        <p class="">When building with wood, you must know the correct moisture content of each piece of wood.
                        Too dry, and the finished product may swell or crack. Too moist, and the end product may shrink or warp. 
                        It’s no wonder experts say incorrect moisture causes 80% of all woodworking problems. Therefore, it’s critical
                        to know the moisture content of each piece of wood before it is used. For instance, if you’re planning an inlay job 
                        using two different species of wood, you’ll need to know the moisture content of each type so that your inlay glue joints 
                        stay intact. A failsafe way to avoid a ruined project is to use a moisture meter. I like to use the (free) Wagner mobile app
                        for all my moisture measurements; it calculates equilibrium moisture content (EMC), troubleshoots many common wood moisture
                        problems,and accesses helpful resources. </p>
                        <p>You can download the app <a href="https://www.wagnermeters.com/moisture-meters/wood-info/wood-moisture-mobile-app/" class="text-sky-500">here</a>.</p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={sawBlade} alt="saw blade"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Keep your blades sharp</h2>
                        <p class="">Dull tools such as chisels, blades, planes, scrapers and gouges don’t cut cleanly. 
                        They tear at the wood fibers resulting in a fuzzy, uneven, unprofessional look. Tools that have been
                        chipped or nicked require grinding. A bench grinder, wet grinder, or even a belt sander can be used.
                        Avoid letting your tool get too hot when using a bench grinder or belt sander to prevent it from losing temper. 
                        Dipping it in a pan of cool water every few seconds will help. After grinding, proceed to honing using
                        either a flat wet stone or oil stone. A wet stone is preferred when doing fine woodworking. The final
                        step is polishing using a fine wet stone, a stropping wheel or leather. Tools with sharper blades make woodworking easier, more efficient, and safer.
                        </p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={sprayer} alt="stain sprayer"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Cheap Stain Sprayer</h2>
                        <p class="">Here’s an easier way to stain or seal chairs, lattice or anything with numerous tight 
                        recesses. Pour the stain into a clean, empty spray bottle. Spray the stain onto the project and wipe up
                        the excess with a brush or rag. The sprayer will squirt stain into all those tight, hard-to-reach 
                        cracks and joints.</p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={miter} alt="miter joint clamp"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Never-Fail Miter Joint Clamp</h2>
                        <p class="">Clamping up four mitered corners is tricky. You can buy specialty clamps for this, but I make my own. 
                        Here’s how to do it: Start with a long 1×4, as it’s easier (and safer) to clamp for making the angled cuts than a 
                        short piece. Mark out the blocks, and then drill a 1-in. diameter hole in the center of each one. The hole prevents the 
                        blocks from getting glued to your project. Cut 45-degree angles tangent to the hole, and then cut the 
                        blocks free from the long board.</p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={visualAid} alt="pencil marking sanding surface"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Visual Aid for Sanding Even Surfaces</h2>
                        <p class="">With an orbital sander and good sandpaper you can smooth wood evenly and easily with first-class results. 
                        When flush-sanding solid edge-banding, draw a squiggly line across the joint before sanding. The edge-banding will be
                        slightly proud of the plywood veneer, so the pencil marks provide a visual aid to make sure that you’re sanding flat, 
                        and that you don’t sand through the plywood’s veneer. As you go, you can also test for a smooth, level transition by 
                        gently scraping your fingernails against the transition. If it’s smooth, your fingers will not catch on the seam 
                        between the two pieces</p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={vinegar} alt="adding vinegar to glue"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Make Your Glue Go Longer</h2>
                        <p class="">I recently wrote to the Borden company, asking what to do when their Elmer’s wood glue gets too thick to 
                        use. They wrote me back and suggested mixing in a drop or two of vinegar. It sounded like an old wives’ tale, but I
                        tried it and found it really works. </p>
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

export default Diy;