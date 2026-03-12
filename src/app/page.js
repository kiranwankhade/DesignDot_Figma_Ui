import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import HotTopics from "@/components/HotTopics";
import AboutFirm from "@/components/AboutFirm";
import Insights from "@/components/Insights";


export default function Home() {
  return (
     <>
     <Navbar/>
     <Slider/>
     <HotTopics/>
     <AboutFirm/>
     <Insights/>
     </>
  );
}
