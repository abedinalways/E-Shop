import Banner from '@/components/Banner';
import FeatureSection from '@/components/FeatureSection';

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Banner />
      <FeatureSection />
    </div>
  );
}
