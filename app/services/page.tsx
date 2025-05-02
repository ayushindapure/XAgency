import Example from '@/components/Example'
import { TabsDemo } from '@/components/TabsDemo'
import Eight from '@/components/animata/bento-grid/eight'
import StaggeredLetter from '@/components/animata/text/staggered-letter'
import React from 'react'

const page = () => {
  return (
    <>
    
    <section className='flex gap-y-5 flex-col items-center justify-center px-10 py-6 sm:px-24 sm:py-20 sm:'>
        <Example/>
        <StaggeredLetter />
        <Eight/>
        <TabsDemo/>
    </section>

   

    </>
  )
}

export default page