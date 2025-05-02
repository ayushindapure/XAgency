"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { ArrowBigRight, ArrowUpRight, Cpu, Lock, Sparkle, Zap } from "lucide-react";
import { div } from "motion/react-client";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";

export const TextParallaxContentExample = () => {
  return (
    <div className="pt-10">
      <TextParallaxContent
        imgUrl="/radiaantDemo.jpg"
        subheading=""
        heading=""
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/FT.png"
        subheading=""
        heading=""
      >
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/hemeraglobal.png"
        subheading=""
        heading=""
      >
        <ExampleContent3 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/georgecafemockup.png"
        subheading=""
        heading=""
      >
        <ExampleContent5 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/streeatsmockup.png"
        subheading=""
        heading=""
      >
        <ExampleContent4 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/cleaning.png"
        subheading=""
        heading=""
      >
        <ExampleContent6 />
      </TextParallaxContent>
      
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <Link href="https://www.radiaant.com">
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className=""
        style={{
          opacity,
        }}
      />
    </motion.div>
    </Link>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (

  <div className="max-w-5xl  ">
    <Link href="https://www.Radiaant.com/" className="text-7xl bold flex items-center text-red-500">Radiaant <ArrowUpRight className="pl-2 text-neutral-500" size={75}/> </Link>
    
    <p className=" py-16 mb-4 text-xl text-neutral-500 md:text-2xl">
    We Designed, Developed, Deployed a full scale website with modern and UI rich website for a BPO and ISO certified company which provides services to many well known companies like
Tata, LnT, Bajaj, VI, Axis Bank and HDFC. Implemented a backend-powered chatbot and an admin panel.
      </p>
    <div className="pb-32 relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-red-500">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-red-500">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-red-500">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-red-500">
                            <Sparkle className="size-4" />

                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                </div>
  </div>
  
);

const ExampleContent2 = () => (
  <div className="max-w-5xl">
    
    <Link href="https://www.franklintempleton.com/" className="text-7xl bold flex items-center text-blue-500">Franklin Templeton <ArrowUpRight className="pl-2 text-neutral-200" size={75}/> </Link>
    
    <p className=" py-16 mb-4 text-xl text-neutral-500 md:text-2xl">
    Designed, Developed, Deployed a full scale website with modern and UI rich website for a BPO and ISO certified company which provides services to many well known companies like
Tata, LnT, Bajaj, VI, Axis Bank and HDFC. Implemented a backend-powered chatbot and an admin panel.
      </p>
    <div className="pb-20 relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-blue-500">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-500">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-500">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-500">
                            <Sparkle className="size-4" />

                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                    </div>
                </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="max-w-5xl">
    
  <Link href="https://www.franklintempleton.com/" className="text-7xl bold flex items-center text-lime-500"> Hemera Global <ArrowUpRight className="pl-2 text-neutral-200" size={75}/> </Link>
  
  <p className=" py-16 mb-4 text-xl text-neutral-500 md:text-2xl">
  Designed, Developed, Deployed a full scale website with modern and UI rich website for a BPO and ISO certified company which provides services to many well known companies like
Tata, LnT, Bajaj, VI, Axis Bank and HDFC. Implemented a backend-powered chatbot and an admin panel.
    </p>

  <div className="pb-20 relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                  <div className="space-y-3">
                      <div className="flex items-center gap-2 text-lime-500">
                          <Zap className="size-4" />
                          <h3 className="text-sm font-medium">Faaast</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-lime-500">
                          <Cpu className="size-4" />
                          <h3 className="text-sm font-medium">Powerful</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-lime-500">
                          <Lock className="size-4" />
                          <h3 className="text-sm font-medium">Security</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-lime-500">
                          <Sparkle className="size-4" />

                          <h3 className="text-sm font-medium">AI Powered</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                  </div>
              </div>
</div>
);

const ExampleContent4 = () => (
  <div className="max-w-5xl">
    <Link href="https://www.streeats.in/" className="text-7xl bold flex items-center text-orange-500"> Streeats <ArrowUpRight className="pl-2 text-neutral-200" size={75}/> </Link>
    
  
  <p className=" py-16 mb-4 text-xl text-neutral-500 md:text-2xl">
  Designed, Developed, Deployed a full scale website with modern and UI rich website for a BPO and ISO certified company which provides services to many well known companies like
Tata, LnT, Bajaj, VI, Axis Bank and HDFC. Implemented a backend-powered chatbot and an admin panel.
    </p>

  <div className="pb-20 relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                  <div className="space-y-3">
                      <div className="flex items-center gap-2 text-orange-500">
                          <Zap className="size-4" />
                          <h3 className="text-sm font-medium">Faaast</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-orange-500">
                          <Cpu className="size-4" />
                          <h3 className="text-sm font-medium">Powerful</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-orange-500">
                          <Lock className="size-4" />
                          <h3 className="text-sm font-medium">Security</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-orange-500">
                          <Sparkle className="size-4" />

                          <h3 className="text-sm font-medium">AI Powered</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                  </div>
              </div>
</div>
);

const ExampleContent5 = () => (
  <div className="max-w-5xl">
    <Link href="https://georgecafe.netlify.app/" className="text-7xl bold flex items-center text-yellow-600"> George Cafe <ArrowUpRight className="pl-2 text-neutral-200" size={75}/> </Link>
    
  
  <p className=" py-16 mb-4 text-xl text-neutral-500 md:text-2xl">
  Designed, Developed, Deployed a full scale website with modern and UI rich website for a BPO and ISO certified company which provides services to many well known companies like
Tata, LnT, Bajaj, VI, Axis Bank and HDFC. Implemented a backend-powered chatbot and an admin panel.
    </p>

  <div className="pb-20 relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                  <div className="space-y-3">
                      <div className="flex items-center gap-2 text-yellow-600">
                          <Zap className="size-4" />
                          <h3 className="text-sm font-medium">Faaast</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-yellow-600">
                          <Cpu className="size-4" />
                          <h3 className="text-sm font-medium">Powerful</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-yellow-600">
                          <Lock className="size-4" />
                          <h3 className="text-sm font-medium">Security</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-yellow-600">
                          <Sparkle className="size-4" />

                          <h3 className="text-sm font-medium">AI Powered</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                  </div>
              </div>
</div>
);


const ExampleContent6 = () => (
  <div className="max-w-5xl">
    <Link href="https://delta-cleaning.netlify.app/" className="text-7xl bold flex items-center text-green-600"> Delta Cleaning <ArrowUpRight className="pl-2 text-neutral-200" size={75}/> </Link>
    
  
  <p className=" py-16 mb-4 text-xl text-neutral-500 md:text-2xl">
  Designed, Developed, Deployed a full scale website with modern and UI rich website for a BPO and ISO certified company which provides services to many well known companies like
Tata, LnT, Bajaj, VI, Axis Bank and HDFC. Implemented a backend-powered chatbot and an admin panel.
    </p>

  <div className="pb-20 relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                  <div className="space-y-3">
                      <div className="flex items-center gap-2 text-green-600">
                          <Zap className="size-4" />
                          <h3 className="text-sm font-medium">Faaast</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-600">
                          <Cpu className="size-4" />
                          <h3 className="text-sm font-medium">Powerful</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-600">
                          <Lock className="size-4" />
                          <h3 className="text-sm font-medium">Security</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                  </div>
                  <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-600">
                          <Sparkle className="size-4" />

                          <h3 className="text-sm font-medium">AI Powered</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                  </div>
              </div>
</div>
);