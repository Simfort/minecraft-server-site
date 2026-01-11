import Header from "./_components/Header";
import About from "./_components/About";
import SectionServers from "./_components/SectionServers";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url(/warden.jpg)] bg-size-[200px_200px]  max-w-full grid  grid-cols-8 ">
      <Header />
      <div className=" h-24 -translate-y-10 bg-[lab(0.1542_15.7545_-51.5504)] col-span-full relative  to-transparent z-20 blur-2xl " />{" "}
      <section
        id="about"
        className="col-start-2 relative max-lg:col-start-1 max-lg:col-span-full   min-h-screen col-span-6">
        {" "}
        <div className="h-[200px] w-[200px] max-lg:hidden rounded-full absolute left-0 right-0 bottom-0 top-0 bg-amber-50 blur-2xl"></div>
        <About />{" "}
        <div className="h-[200px] w-[200px]  rounded-full absolute right-0 bottom-0 top-0 bg-[#073de2] blur-2xl"></div>
      </section>
      <section
        id="servers"
        className="bg-[url(/bgstoneifr.jpg)] mt-[60px] col-span-full min-h-screen">
        <SectionServers />
      </section>
      <Footer />
    </div>
  );
}
