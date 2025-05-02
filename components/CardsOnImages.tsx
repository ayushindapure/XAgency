"use client"
import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles




const CardsOnImages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Set default animation duration
      once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div>
        {/* Masonry Cards */}
{/* <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div className="grid sm:grid-cols-12 gap-6">
    <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">

      <a className="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://imgs.search.brave.com/L5n3GafxBXMlOXBTgFzqcL8Fbyefc9rlYEmdO_zHhtw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFndmVudWUuY29t/L3Jlc2l6ZS9kNS9k/Mi9maXQtOTAwLTYw/MDs4MTc4NS1ldmVu/dC1zcGFjZS1yb29t/LWVuaGFuY2VkLXYx/LTM2NjQ4MzAuanBn" alt="Masonry Cards Image" />
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-black dark:text-white rounded-lg  p-4 md:text-xl bg-white dark:bg-black">
            Cafes / Restaurants
          </div>
        </div>
      </a>

    </div>


    <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">

      <a className="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/interiordesigner.jpg" alt="Masonry Cards Image" />
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-black dark:text-white rounded-lg  p-4 md:text-xl bg-white dark:bg-black">
            Professionals
          </div>
        </div>
      </a>

    </div>


    <div className="col-span-12 md:col-span-4">

      <a className="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/services.jpg" alt="Masonry Cards Image" />
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-black dark:text-white rounded-lg  p-4 md:text-xl bg-white dark:bg-black">
            Services
          </div>
        </div>
      </a>

    </div>
    

    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      
      <a className="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Masonry Cards Image" />
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-black dark:text-white rounded-lg  p-4 md:text-xl bg-white dark:bg-black">
            Data at Preline
          </div>
        </div>
      </a>

    </div>
    

    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      
      <a className="group relative block rounded-xl overflow-hidden focus:outline-hidden" href="#">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Masonry Cards Image" />
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <div className="text-sm font-semibold text-black dark:text-white rounded-lg  p-4 md:text-xl bg-white dark:bg-black">
            Businesses
          </div>
        </div>
      </a>

    </div>
    
  </div>
</div> */}


{/* left align */}


<div >
  <div className="max-w-6xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
    <h1 data-aos="fade-right" className="font-semibold text-neutral-400 text-5xl md:text-7xl">
      <span className="text-blue-500 ">"Are they the once </span><br/> Who can <img className="inline-block h-16 w-24 rounded-full" src="/think.jpg" alt="Avatar"></img> help me  <br/> build <span className='text-neutral-900 dark:text-white'>website?</span> "
    </h1>
  </div>
</div>



{/* right align */}
<div >
  <div className="max-w-6xl text-right px-4 xl:px-0 pt-10 lg:pt-16 pb-24">
    <h1 data-aos="fade-left" className="font-semibold text-neutral-400 text-5xl md:text-7xl">
      <span className="text-green-400 ">"Yes, see yourself ! </span><br/> Take a look <img className="inline-block h-16 w-24 rounded-full" src="/look.jpg" alt="Avatar"></img> at Services <br/><span className='text-neutral-900 dark:text-white'>we provide👇</span> "
    </h1>
  </div>
</div>



    </div>
  )
}

export default CardsOnImages