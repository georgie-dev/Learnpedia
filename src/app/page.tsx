import { Header, Banner, Recommendations, Category, Creators, Footer } from "@/components";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Recommendations />
      <Category />
      <section className=" px-5 md:px-20 py-5 my-20 flex flex-col lg:flex-row flex-nowrap items-center justify-between gap-10 relative ">
        <div className=" bg-grey w-full lg:w-2/5 h-auto">
          <Image
            alt="knowledge"
            src='/knowledgee.png'
            width={420}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className=" w-full lg:w-1/2">
          <h1 className=" text-black text-4xl md:text-6xl text-right">The beautiful thing about learning is that no one can take it away from you.</h1>
        </div>
        <div className="h-1 bg-black w-4/5 lg:w-1/4 absolute bottom-0 right-5 md:right-20"></div>
      </section>
      <Creators />
      <section className="px-5 md:px-20 py-10 my-14 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between border-y bg-grey/40">
        <div className="w-full lg:w-1/2 ">
          <h1 className=" text-black font-semibold text-4xl">Stay informed</h1>
          <small className=" text-base text-[#717070]">Sign up for our newsletter</small>
        </div>
        <div className=" flex flex-col md:flex-row lg:justify-end w-full lg:w-1/2 gap-3 md:gap-10 md:items-center">
          <input
            type="email"
            className=" w-full md:w-1/2 bg-grey/80 py-2 placeholder:p-2 placeholder:text-sm placeholder:text-black/50"
            placeholder="Your Email Address"
          />
          <button
            type="submit"
            className=" w-fit text-xs md:text-base px-4 py-2 flex items-center gap-1 bg-button-blue text-white"
          >Subscribe <IoIosArrowRoundForward />
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
