"use client";

import { ExternalLink } from "lucide-react";
import { Tabs } from "./ui/tabs";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Outsourcing",
      value: "Outsourcing",
      content: (
        <div className="w-full cursor-pointer overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white dark:text-black bg-gradient-to-br from-green-300 to-green-700">
          <Link href="https://delta-cleaning.netlify.app/" className="cursor-pointer flex items-center sm:gap-2">Data Cleaning <ExternalLink  /> </Link>

          <DummyContent />
        </div>
      ),
    },
    {
      title: "Investment Management",
      value: "Investment Management",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white dark:text-black  bg-gradient-to-br from-blue-700 to-blue-900">
          <Link href="https://www.franklintempleton.com/" className="cursor-pointer flex items-center sm:gap-2">Franklin Templeton <ExternalLink  /></Link>
          <DummyContent2 />
        </div>
      ),
    },
    {
        title: "Resto / Cafe",
        value: "Resto / Cafe",
        content: (
          <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white dark:text-black  bg-gradient-to-br from-orange-400 to-orange-600">
            <Link href="https://georgecafe.netlify.app/" className="cursor-pointer flex items-center sm:gap-2">George Cafe <ExternalLink  /></Link>
            <DummyContent4 />
          </div>
        ),
      },
    {
      title: "BPO",
      value: "BPO",
      content: (
        <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white dark:text-black bg-gradient-to-br from-red-900 to-red-700">
          <Link href="https://www.radiaant.com/" className="cursor-pointer flex items-center sm:gap-2">Radiaant <ExternalLink  /></Link>
          <DummyContent3 />
        </div>
      ),
    },

    {
      title: "Food Platform",
      value: "Food Platform",
      content: (
        <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white dark:text-black  bg-gradient-to-br from-purple-700 to-violet-900">
          <Link href="" className="cursor-pointer flex items-center sm:gap-2">Streeats.in <ExternalLink  /></Link>
          <DummyContent5 />
        </div>
      ),
    },
    {
        title: "NGO",
        value: "NGO",
        content: (
          <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white dark:text-black  bg-gradient-to-br from-[#FFF000]  to-yellow-400">
            <Link href="" className="cursor-pointer flex items-center sm:gap-2">Invisible Threads <ExternalLink  /></Link>
            <DummyContent6 />
          </div>
        ),
      },
      {
        title: "Insurance",
        value: "Insurance",
        content: (
          <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white dark:text-black  bg-gradient-to-br from-red-200  to-red-400">
            <Link href="" className="cursor-pointer flex items-center sm:gap-2">Bima Mandi <ExternalLink  /></Link>
            <DummyContent7 />
          </div>
        ),
      },
    //   {
    //     title: "Admin Panel",
    //     value: "Admin Panel",
    //     content: (
    //       <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white dark:text-black  bg-gradient-to-br from-red-200  to-red-400">
    //         <Link href="" className="cursor-pointer flex items-center sm:gap-2">Bima Mandi</Link>
    //         <DummyContent7 />
    //       </div>
    //     ),
    //   },
      
  ];



  return (
    <div className="h-[20rem] cursor-pointer md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src="/cleaningUI.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent2 = () => {
    return (
      <img
        src="/FTui.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const DummyContent3 = () => {
    return (
      <img
        src="/radiaant.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };


  const DummyContent4 = () => {
    return (
      <img
        src="/georgecafeui.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const DummyContent5 = () => {
    return (
      <img
        src="/streeatsui.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const DummyContent6 = () => {
    return (
      <img
        src="InvisibleThreads.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const DummyContent7 = () => {
    return (
      <img
        src="hiramandi.png"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };