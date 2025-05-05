import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import LogoCloud from './logo-cloud'
import { AnimatedShinyTextDemo } from './AnimatedShinyTextDemo'
import CardsOnImages from './CardsOnImages'
import Projects from './Projects'
import { SpinningTextBasic } from './SpiningTextBasics'
import MarqueeDemo from './MarqueeDemo'
import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo'
import FAQ from './FAQ'
import FAQsThree from './FAQsThree'
import { Calendar } from 'lucide-react'
import { FireIcon } from '@heroicons/react/24/outline'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            {/* <HeroHeader /> */}
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                    <AnimatedGroup variants={transitionVariants}>
                        <AnimatedShinyTextDemo/>
                        {/* <AnimatedTooltipPreview/> */}
                        
                        </AnimatedGroup>
                        {/* <HoverBorderGradientDemo/> */}
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto  px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">

                            <TextEffect
  preset="fade-in-blur"
  speedSegment={0.3}
  as="h1"
  className="mt-8 pr-2 text-balance font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug sm:leading-tight md:leading-tight lg:leading-[4.5rem]"
>
  {"Still Waiting for That "}
  <span className="text-blue-500">Perfect</span><br />
  {"Website? We’ll Build It "} 
</TextEffect>






                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-md sm:text-lg">
                                    We’re a design & development agency that delivers results and boosts businesses. Every creation starts with an idea, and we’re here to bring yours to life.
                                </TextEffect> 

                            <AnimatedGroup variants={transitionVariants}>
                                <SpinningTextBasic/>
                            </AnimatedGroup>
                                
                                
                   
                   {/* <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg"></TextEffect>
                            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                            Modern Solutions for Customer Engagement
                            </h1>
                    </TextEffect> */}

{/* <h1 className="relative z-10 py-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-700  text-center font-sans font-bold">
                            Modern Solutions for Customer Engagement
                            </h1> */}

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)]  p-0.5">
                                        {/* <Button
                                            asChild
                                            size="lg"
                                            className="bg-black dark:bg-white rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap text-white dark:text-black">Start Building</span>
                                            </Link>
                                        </Button> */}
                                        <div className='flex items-center bg-black text-white dark:text-black dark:bg-white border-2 border-white px-5 py-3 rounded-xl '>
                                        <Calendar size={20} className="mr-2 " />
                                        <a
  href="https://cal.com/mellabs/30min"
  target="_blank"
  rel="noopener noreferrer"
  >
    
    Schedule Free Call
</a>
                                        </div>


                                    </div>
                                    {/* <Button
                                        size="lg"
                                        variant="ghost"
                                        className="bg-black text-black dark:text-black dark:bg-white border-2 border-white px-5 py-3 rounded-xl ">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button> */}
<Link
  href="/ourwork"
  rel="noopener noreferrer"
  className=" text-black dark:text-white  border-2 border-black dark:border-white px-5 py-3 rounded-xl ">
  Our Work 
</Link>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl  ">
                                    {/* <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/streeatsdemo.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/streeatsdemo.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    /> */}
                                    {/* <SafariDemo/> */}
                                    <div className="relative -mr-56 overflow-hidden px-2 sm:mr-0 ">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className=" bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl  p-4 ">
                                    <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="https://res.cloudinary.com/ducxztw9n/image/upload/behance-cases/carfin-car-search-ai-assistant-ux-ui-design/01.webp"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2  aspect-15/8 relative rounded-2xl  dark:hidden"
                                        src="https://res.cloudinary.com/ducxztw9n/image/upload/behance-cases/carfin-car-search-ai-assistant-ux-ui-design/01.webp"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />

                                </div>
                            </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>

                

                <LogoCloud/>

                <CardsOnImages/>



                <Projects/>
                <div className='px-5 sm:px-20'>
                <span className="inline-block py-1 px-2 rounded border-2 border-blue-500 text-blue-500 text-xs font-medium tracking-widest">WHY TRUST US ?</span>
<h2 className="sm:text-5xl   text-2xl title-font font-medium mt-4 mb-4">
  Because these amazing brands did—and saw real results.
</h2>

        </div>
                <MarqueeDemo/>
                <AnimatedTestimonialsDemo/>

                <FAQsThree/>
               
            </main>
        </>
    )
}
