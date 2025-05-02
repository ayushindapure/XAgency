import { TextLoopCustomVariantsTransition } from '@/components/TextLoopCustomVariantsTransition'
import { TextParallaxContentExample } from '@/components/TextParallaxContentExample'
import HeroSectionTextHover from '@/components/animata/hero/hero-section-text-hover'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import React from 'react'
import ContentSection from '../ContentSection'
const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(20px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 3,
            },
        },
    },
}
const page = () => {
  return (
    <div>
        <section className='pt-10 sm:pt-20 flex justify-center items-center '>
        <AnimatedGroup variants={transitionVariants}>
            <HeroSectionTextHover />
            {/* <figure>
        <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
        <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
          A woman sitting at a table.
        </figcaption>
      </figure> */}
            
            <div className='px-5 sm:px-1'>
                <TextParallaxContentExample />
            </div>
        </AnimatedGroup>
        </section>
    </div>
  )
}

export default page