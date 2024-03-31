import { Header, Banner, Recommendations, Category, Creators, Footer, NewsLetter } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Recommendations />
      <Category />
      <section className=" px-5 md:px-20 py-5 my-20 flex flex-col lg:flex-row flex-nowrap items-center justify-between gap-10 relative ">
        <div className=" bg-transparent w-full lg:w-2/5 h-auto">
          <Image
            alt="knowledge"
            src='/learning.svg'
            width={420}
            height={300}
            className="w-4/5 h-full"
          />
        </div>
        <div className=" w-full lg:w-1/2">
          <h1 className=" text-black text-4xl md:text-6xl text-right">The beautiful thing about learning is that no one can take it away from you.</h1>
        </div>
        <div className="h-1 bg-black w-4/5 lg:w-1/4 absolute bottom-0 right-5 md:right-20"></div>
      </section>
      <Creators />
      <NewsLetter/>
      <Footer />
    </main>
  );
}
