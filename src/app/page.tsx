import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";
import FeaturedJobs from "@/components/FeaturedJobs";
import TopCompanies from "@/components/TopCompanies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Stats />
      <FeaturedJobs />
      <TopCompanies />
      <Footer />
    </>
  );
}