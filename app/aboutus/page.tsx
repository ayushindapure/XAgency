import { TextEffect } from '@/components/motion-primitives/text-effect'
import Link from 'next/link'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
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
const members = [
    {
        name: 'Ayush Indapure',
        role: 'Frontend Developer',
        avatar: '/ayush.JPG',
        link: 'https://www.linkedin.com/in/ayushindapure/',
    },
    {
        name: 'Parth Vaghela',
        role: 'Full Stack Developer',
        avatar: '/parthavatar.jpeg',
        link: 'https://www.linkedin.com/in/parth-vaghela-0b1a1b1a3/',
    },
    {
        name: 'Joseph Saja',
        role: 'Backend Developer',
        avatar: 'https://avatars.githubusercontent.com/u/77894439?v=4',
        link: 'https://www.linkedin.com/in/josephsaji/',
    },
    {
        name: 'Gaurav Myana',
        role: 'Full Stack Developer',
        avatar: 'https://avatars.githubusercontent.com/gauravmyana',
        link: 'https://www.linkedin.com/in/gauravmyana/',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
    <AnimatedGroup variants={transitionVariants}>
            
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-neutral-900">Team</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <TextEffect className="text-3xl font-bold sm:text-4xl ">Our dream team</TextEffect>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <TextEffect>Call us a group of 4 uni students — but we’ve got the skills and shipped work to prove we’re ready for anything.</TextEffect>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-96 cursor-pointer w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 cursor-pointer pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            LinkedIn
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
    <h1 className="font-semibold text-black dark:text-white text-5xl md:text-6xl">
      <span className="text-blue-500 ">X Agency:</span> Transforming ideas<br/> into reality
    </h1>
    <div className="max-w-4xl">
      <p className="mt-5 text-neutral-400 text-lg">
        It all started with four deakin uni students who consistently stood out in hackathons—crafting smart solutions, shipping real products, and making a mark. <br/><br/> After a participating in hackathons and countless late-night collabs, we thought: why not turn this into something real? That’s how X was born. Every one of us is hands-on—whether it’s frontend, backend, full-stack, or support—equally skilled, equally driven, and all in for building websites that actually make a difference.
      </p>
    </div>
  </div>
        </AnimatedGroup>
        </section>
    )
}
