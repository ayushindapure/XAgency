import { ArrowPathIcon, ChatBubbleBottomCenterIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { ContactIcon, Laptop, LayoutDashboard, ShirtIcon, ShoppingBag } from 'lucide-react'
import { BiMobile } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import { CiMobile1 } from 'react-icons/ci'
import { FaShopify } from 'react-icons/fa'
import { GiCrystalGrowth, GiGrowth, GiTreeGrowth } from 'react-icons/gi'
import { GoArrowRight } from 'react-icons/go'
import { GrDashboard } from 'react-icons/gr'
import { MdAdminPanelSettings, MdDashboard, MdDashboardCustomize } from 'react-icons/md'
import { PiBrandyBold, PiClockThin } from 'react-icons/pi'
import { TbBrandBing, TbBrandDingtalk, TbGrowth } from 'react-icons/tb'
import { TextEffect } from './motion-primitives/text-effect'
import { AnimatedGroup } from './motion-primitives/animated-group'
const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(15px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'blur-slide',
                bounce: 0.3,
                duration: 2,
            },
        },
    },
}
const features = [
    {
        name: 'Website Development',
        description:
          'Stunning, high-performance websites tailored for speed, UX, and mobile-first experiences — built to convert.',
        icon: Laptop,
      },
      {
        name: 'Website Redesiging',
        description:
          'Most websites today are slow, outdated, and not mobile-friendly. We redesign with modern design to match or exceed your competitors.',
        icon: ChatBubbleBottomCenterIcon,
      },
      {
        name: 'App Development',
        description:
          'Powerful, scalable mobile apps crafted for iOS & Android — blending functionality with seamless design.',
        icon: BiMobile,
      },
      {
        name: 'SEO Optimization',
        description:
          'Boost your visibility with cutting-edge SEO strategies — because ranking on Google isn’t optional anymore.',
        icon: GiTreeGrowth,
      },
      {
        name: 'Chatbot Integration',
        description:
          'Turn visitors into leads with smart, AI-driven chatbots — always-on customer support, 24/7.',
        icon: ChatBubbleBottomCenterIcon,
      },
      {
        name: 'Enquiry Management',
        description:
          'Streamline customer queries with smart forms, automation, and integrated tracking — no lead left behind.',
        icon: ContactIcon, // Material Design
      },
      {
        name: 'Admin Dashboard',
        description:
          'Custom dashboards that give you full control and real-time insights — from user management to analytics.',
        icon: LayoutDashboard, // Material Design
      },
      {
        name: 'E-Commerce',
        description:
          'Launch high-converting online stores with secure payments, inventory systems, and seamless UX.',
        icon: ShoppingBag, // FontAwesome
      },
      {
        name: 'Shopify',
        description:
          'We build fast, scalable, and beautiful Shopify stores that turn traffic into revenue.',
        icon: ShirtIcon, // Simple Icons
      },
      {
        name: 'Branding',
        description:
          'From logos to full brand identity — we help you stand out and stay memorable in any market.',
        icon: TbBrandBing, // FontAwesome
      },
      

      
]

export default function Example() {
  return (
    <div className="py-12 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        <TextEffect  preset='fade-in-blur' speedReveal={1.3} speedSegment={0.5} className="text-base/7 font-semibold ">Services We Offer</TextEffect>
          {/* <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl lg:text-balance"> */}
          <TextEffect className='mt-2 text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl lg:text-balance' preset='fade-in-blur' speedReveal={1.1} speedSegment={0.3}>
            Websites That Do More Than Just Look Good
      {/* Animate your ideas with motion-primitives. */}
    </TextEffect>
          {/* </p> */}
          <TextEffect preset='fade-in-blur' speedReveal={2} speedSegment={0.7} className="mt-6 text-lg/8 text-neutral-400">
            Your website isn’t just a digital brochure — it’s your best salesperson, working 24/7. We design and build websites that convert visitors into customers, boost credibility, and drive measurable ROI. Whether you're a startup or scaling business, we focus on performance, not just pixels.
          </TextEffect>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                 <AnimatedGroup variants={transitionVariants}>
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold ">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-black text-white dark:bg-neutral-100 dark:text-black">
                    <feature.icon aria-hidden="true" className="size-6 " />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-500">{feature.description}</dd>
              </div>
                </AnimatedGroup>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
