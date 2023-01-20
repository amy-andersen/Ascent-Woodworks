import React from "react";
import logo from './Images/74.png';
import blanc from './Images/blanc.jpg';
import capitan from './Images/capitan.jpg';
import denali from './Images/denali.jpg';
import everest from './Images/everest.jpg';
import fitz from './Images/fitz.jpg';
import k2 from './Images/k2.jpg';
import olympus from './Images/olympus.jpg';
import whitney from './Images/whitney.jpg';
import fuji from './Images/fuji.jpg';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';

const Products = (props) => {
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
                        <a href="/tipsandtricks" class="text-gray-300 hover:bg-black hover:text-white px-3 py-2 text-lg font-medium">DIY</a>
                    </div>
                </div>
            </nav>
            <div class="flex flex-wrap justify-center">
                <div class="w-2/3 border-b-2 py-14">
                    <h1 class="text-4xl">WANT TO PURCHASE ONE OF MY PIECES?</h1>
                    <h2 class="text-lg mt-4">All of the pieces I currently have available are listed below. If you’re looking for something custom, <a href="/contact" class="text-sky-500">contact me</a>.</h2>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={blanc} alt="blanc console"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Mt Blanc Console</h2>
                        <p class="">The Mt Blanc console table plays with planes and negative space to create a striking, sculptural piece that's full of surprises. The slab legs are echoed in shorter, floating panels that intersect the central strut. Slightly elevated end caps create a tabletop with layered levels. The lightly distressed oak with natural knots, splits and textures clads the table in rustic beauty with plenty of character. </p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={fuji} alt="fuji adirondack"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Fuji Adirondack</h2>
                        <p class="">At ease with angles, Fuji updates the classic Adirondack chair with modern lines and bold shapes. Made of beautiful teak, the chair assumes its relaxed recline with a streamlined double-slat seat and back, plank-style rear legs, broad armrests and flange-accented front legs. Paired withed an ottoman for the ultimate outdoor lounge.</p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={whitney} alt="whitney bookshelf"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Whitney Bookshelf</h2>
                        <p class="">Whitney's converging angles make a dynamic play of oak's beautiful cathedral grain. An integral element to the bookcase's animated design, the wood grain reverses direction on the three fixed shelves and cabinet doors with bold, integrated pulls. Outfitted with an adjustable interior shelf, the cabinet provides storage for books, board games or office supplies.</p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={capitan} alt="capitan table"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">El Capitan Dining Table</h2>
                        <p class="">The 1960s-inspired El Capitan extension dining table recalls the timelessness of mid-century design with a tailored profile and streamlined shape. Crafted of walnut, the table epitomizes the clean lines of modern design with a streamlined beveled top. Integrated with the table's slim apron, conical legs taper down at a subtle angle. Ready to respond for extra dinner guests, the table includes two self-storing leaves that expand seating to 10. </p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={denali} alt="denali console"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Denali Media Console</h2>
                        <p class="">Simple geometry and a natural stain put the focus on the wood's unique grain, knots and markings. Reverse chamfer edges and an open shelf lighten the clean waterfall silhouette, floating a pair of flat-fronted cabinets. </p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={olympus} alt="olympus desk"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Olympus Desk</h2>
                        <p class="">Olympus puts black walnut to work in a clean-lined desk that references classic mid-century details.
This architectural piece suspends a drawer sized for letter or legal files, a center drawer, and two stacked storage drawers. Simple round steel pulls have a matte black finish. </p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={everest} alt="Everest Armoire"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Everest Armoire</h2>
                        <p class="">Refined yet bold, Everest takes bedroom furniture beyond simple storage. Scaled to create a stately presence in the bedroom, the piece was crafted of beautiful mahogany with a natural finish. The full-service armoire swings open to two adjustable shelves and a removable hanging bar. Hooks and ledges tidy up ties, jewelry and other small items for ready access. Two large bottom drawers are perfect for stowing blankets and extra bedding. </p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={fitz} alt="Fitz Roy"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">Fitz Roy Dresser</h2>
                        <p class="">The Fitz Roy 9-drawer horizontal dresser presents the timelessness of mid-century design with tailored profiles and streamlined shapes. Crafted of solid walnut, it showcases gallery fronts and linear undercut drawer pulls supported by tapered turned legs.</p>
                    </div>
                </div>
                <div class="w-2/3 border-b-2 py-14 flex justify-center">
                    <div class="w-1/3 mr-3">
                        <img class="w-full" src={k2} alt="K2 Dining Table"></img>
                    </div>
                    <div class="w-1/2 text-justify text-med ml-3">
                        <h2 class="font-bold">K2 Dining Table</h2>
                        <p class="">Coastal and casual, the K2 dining table is perfectly proportioned for kitchens and smaller dining rooms. Every inch sings the praises of natural oak, with an ivory cerused finish to put the wood grain into soft contrast. Craftsmanship shines in the bistro table's banded rim, sunburst-patterned top and chamfered contours underneath. The top's bullnose edge echoes the angles of the tapered pedestal base for a modern, sculptural silhouette. </p>
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

export default Products;