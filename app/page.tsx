import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BookingContact from "@/components/sections/BookingContact";
import DayNarrative from "@/components/sections/DayNarrative";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import MeetFamily from "@/components/sections/MeetFamily";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="relative flex min-h-screen flex-col overflow-hidden pb-24 sm:pb-0"
      >
        <Hero />
        <Story />
        <Experience />
        <DayNarrative />
        <Gallery />
        <MeetFamily />
        <BookingContact />
      </main>
      <Footer />
    </>
  );
}
