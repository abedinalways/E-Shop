import Banner from "@/app/components/Banner";
import FeatureSection from "@/app/components/FeatureSection";


export default function Home() {
  return (
    <div className="flex flex-col justify-center">
       <Banner />
        <FeatureSection/>
    </div>
  );
}
