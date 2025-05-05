import React from 'react'
import { FaMoneyBill } from 'react-icons/fa6'
import { SiStockx } from 'react-icons/si'
import { FileChartColumnIncreasingIcon, LaptopIcon, MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import { RiCompassLine, RiGuideLine } from 'react-icons/ri'
import FeaturesSection from './FeaturesSection'

const Projects = () => {
  return (
    // <div className="w-full bg-background py-16 px-4 text-leftsm:px-6 lg:px-8">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl font-semibold text-neutral-800 dark:text-white">Our Work</h2>
    //       <p className="mt-2 text-neutral-500 ">
    //         Explore a few case studies we’ve worked on
    //       </p>
    //     </div>

    //     {/* Card Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
    //       {/* Card - Repeatable */}
    //       {[
    //         {
    //           title: "eYoga",
    //           desc: "A revamped and dynamic approach to yoga analytics",
    //           img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=560&auto=format&fit=crop",
    //           tags: ["Discovery", "Brand Guidelines", "Yoga"],
    //         },
    //         {
    //             title: "Day Spa",
    //             desc: "Designing a new cocktail can",
    //             img: "https://images.unsplash.com/photo-1649999920973-ab6bfd0c0017?q=80&w=560&auto=format&fit=crop",
    //             tags: ["Brand Strategy", "Visual Identity"],
    //           },
    //         {
    //           title: "Day Spa",
    //           desc: "Designing a new cocktail can",
    //           img: "https://images.unsplash.com/photo-1649999920973-ab6bfd0c0017?q=80&w=560&auto=format&fit=crop",
    //           tags: ["Brand Strategy", "Visual Identity"],
    //         },
    //         {
    //           title: "Diamond Dynamics",
    //           desc: "From cutting-edge equipment to stylish apparel",
    //           img: "https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=560&auto=format&fit=crop",
    //           tags: ["Sports Gear", "Equipment", "Discovery"],
    //         },
    //       ].map(({ title, desc, img, tags }) => (
    //         <a
    //           key={title}
    //           className="group flex flex-col focus:outline-none"
    //           href="#"
    //         >
    //           <div className=" overflow-hidden rounded-2xl dark:">
    //             <img
    //               src={img}
    //               alt={`${title} Image`}
    //               className="group-hover:scale-105 transition-transform duration-500 object-cover rounded-2xl"
    //             />
    //           </div>
    //           <div className="pt-4">
    //             <h3 className="relative inline-block font-bold text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
    //               {title}
    //             </h3>
    //             <p className="mt-1 text-gray-600 dark:text-neutral-400">
    //               {desc}
    //             </p>
    //             <div className="mt-3 flex flex-wrap gap-2">
    //               {tags.map((tag) => (
    //                 <span
    //                   key={tag}
    //                   className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl  dark:border-neutral-700 dark:text-neutral-400"
    //                 >
    //                   {tag}
    //                 </span>
    //               ))}
    //             </div>
    //           </div>
    //         </a>
    //       ))}
    //       {/* End Card */}
    //     </div>
    //     {/* End Grid */}
    //   </div>
    // </div>
    <div>
        <section className="text-gray-600 body-font pb-20">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div data-aos="fade-up" className="sm:w-1/2 mb-10 px-4 text-left">
        <div className="rounded-xl  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/linkedin2.jpg" />
        </div>
        <Link href="https://www.radiaant.com/"><h2 className="title-font text-4xl text-left font-bold text-black underline dark:text-white mt-6 mb-3">Radiaant.com</h2></Link>
        <p className="leading-relaxed text-xl text-left">Completely redesigned, redeveloper and redeployed Radiaant,  ISO certified company eith over 1,300 partners and 30+ years of leadership expertise</p>
        {/*  */}
        <div className="mt-3 flex flex-wrap gap-2">
        <span className="py-1.5 px-3 flex items-center  bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Company <RiCompassLine  className='pl-2 size-6' />
        </span>
        <span className="py-1.5 px-3 flex items-center bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Brand Guidelines <RiGuideLine className='pl-2 size-6' />
        </span> 
        <span className="py-1.5 px-3 flex items-center bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          UI/UX <LaptopIcon className='pl-2 size-6' />
        </span>
      </div>
      </div>
      <div data-aos="fade-up" className="sm:w-1/2 mb-10 px-4 text-left">
        <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/cleaning.png" />
        </div>
        <Link href="https://delta-cleaning.netlify.app/"> <h2 className="title-font text-4xl underline font-bold text-black dark:text-white mt-6 mb-3">Delta Cleaning</h2></Link>
        <p className="leading-relaxed text-xl">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        
        <div className="mt-3 flex flex-wrap gap-2">
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Discovery
        </span>
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Brand Guidelines
        </span>
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Yoga
        </span>
      </div>
      </div>
      <div data-aos='fade-up' className="sm:w-1/2 mb-10 px-4 text-left">
        <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/pizzageorgecafemockup.png" />
        </div>
        <Link href="https://georgecafe.netlify.app/"> <h2 className="title-font underline text-4xl font-bold text-black dark:text-white mt-6 mb-3">George Cafe</h2></Link>
        <p className="leading-relaxed text-xl">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        
        <div className="mt-3 flex flex-wrap gap-2">
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Discovery
        </span>
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Brand Guidelines
        </span>
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Yoga
        </span>
      </div>
      </div>
      <div data-aos="fade-up" className="sm:w-1/2 mb-10 px-4 text-left">
        <div className="rounded-lg  overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://rondesignlab.com/img/services/general/next-steps/product-design.webp" />
        </div>
        <h2 className="title-font text-4xl font-bold text-black dark:text-white mt-6 mb-3">Admin Panel</h2>
        <p className="leading-relaxed text-xl">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        
        <div className="mt-3 flex flex-wrap gap-2">
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Discovery
        </span>
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Brand Guidelines
        </span>
        <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900  dark:border-neutral-700 dark:text-neutral-400">
          Yoga
        </span>
      </div>
      </div>
      
    </div>
  </div>


        {/* left align */}
        
<div  className="">
  <div className="max-w-6xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
    <h1 data-aos="fade-right" className="font-semibold text-neutral-400 text-5xl md:text-7xl">
      <span className="text-orange-500 ">"Are they </span> <img className="inline-block h-16 w-24 rounded-full" src="/think3.jpg" alt="Avatar"></img> <br/> <span className='text-neutral-900 dark:text-white'>Skilled Enough?</span> "
    </h1>
  </div>
</div>


{/* right align */}
<div className="">
  <div className="max-w-6xl text-right px-4 xl:px-0 pt-10 lg:pt-16 pb-24">
    <h1 data-aos="fade-left" className="font-semibold text-neutral-400 text-5xl md:text-7xl">
      <span className="text-purple-400 ">"We don't just Talk, </span><br/> Take a look <img className="inline-block h-16 w-24 rounded-full" src="/proud.jpeg" alt="Avatar"></img> at a case <br/><span className='text-neutral-900 dark:text-white'>we are proud of 🥳</span> "
    </h1>
  </div>
</div>





<div className='px-5 sm:px-20 '>
<Link href="https://www.franklintempleton.com">
  <img src="FT.png" className='rounded-xl bg-linear-to-b from-neutral-500 to to-black' />
</Link>
  {/* <div className='absolute bottom-10 left-28 text-white font-bold'> */}
    <Link href="https://www.franklintempleton.com" className='flex gap-2 items-center underline'>
      <img className='py-10 dark:invert' src="https://www.franklintempleton.com/assets/images/logos/FT_logo_pos_RGB@2x.png" alt="" />
      <MoveUpRight className='text-black dark:text-white' size={50}/>
    </Link>
      <p className='py-5 text-neutral-800 dark:text-white'>Franklin Resources, Inc. is an American multinational investment management holding company that, together with its subsidiaries, is referred to as Franklin Templeton; it is a global investment firm founded in New York City in 1947 as Franklin Distributors, Inc. Franklin Templeton as one of the world's largest independent, specialized global investment managers with a combined $1.4 trillion in assets under management (AUM) across one of the broadest ranges of high-quality investment teams in the industry. </p>
      <div className="flex flex-wrap -m-4">
  <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border-gray-300 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-500 text-white dark:text-black mb-4">
        <FaMoneyBill size={25} />
      </div>
      <h2 className="text-lg text-gray-900  title-font mb-2 dark:text-white font-bold">Franklin Templeton Website</h2>
      <p className="leading-relaxed text-base">
        We designed and developed a performance-driven site for Franklin Templeton, focusing on sleek UI and lightning-fast load times. Result? 30% increase in user engagement and stronger investor trust.
      </p>
    </div>
  </div>

  <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border-gray-300 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-500 text-white dark:text-black mb-4">
        <SiStockx size={25} />
      </div>
      <h2 className="text-lg text-gray-900  title-font mb-2 dark:text-white font-bold">Strategic UX & SEO</h2>
      <p className="leading-relaxed text-base">
        By implementing conversion-optimized UX and SEO strategies, we improved the site’s visibility and lead generation — helping Franklin Templeton reach the right audience faster and smarter.
      </p>
    </div>
  </div>

  <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border-gray-300 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-teal-500 text-white dark:text-black mb-4">
        <FileChartColumnIncreasingIcon />
      </div>
      <h2 className="text-lg text-gray-900  title-font mb-2 dark:text-white font-bold">Proven Results</h2>
      <p className="leading-relaxed text-base">
        Our collaboration delivered measurable business growth — from improved investor trust to a smoother digital experience. We don’t just build websites. We build outcomes.
      </p>
    </div>
  </div>
</div>

<FeaturesSection/>

<div className="">
  <div className="max-w-6xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
    
    <h1 data-aos="fade-right" className="font-semibold text-neutral-400 text-5xl md:text-7xl">
      <span className="text-yellow-500 ">"Okay! But who </span>  <br/> do you mean <span className='text-neutral-900 dark:text-white'><img className="inline-block h-16 w-24 rounded-full" src="/who.jpg" alt="Avatar"></img> <br/>by they?</span> "
      
    </h1>
  </div>
</div>



{/* right align */}
<div className="">
  <div className="max-w-6xl text-right px-4 xl:px-0 pt-10 lg:pt-16 pb-24">
    <h1 data-aos="fade-left" className="font-semibold text-neutral-400 text-5xl md:text-7xl">
      <span className="text-pink-500 ">"Just a bunch of uni kids? Sure! , </span><br/>  watch us build<span className='text-neutral-900 dark:text-white'> websites <img className="inline-block h-16 w-24 rounded-full" src="/small.jpg" alt="Avatar"></img> that <br/> is way too clean for uni kids. </span> "
    </h1>
  </div>
</div>

<div className='px-10'>
    <img data-aos="zoom-out" src="group.png" className='rounded-xl' alt="" />
</div>

  {/* </div> */}
</div>





</section>
    </div>
  )
}

export default Projects
