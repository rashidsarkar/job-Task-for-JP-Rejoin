import CollegeCards from "../../../Components/CollegeCard/CollegeCards";
import SectionHeading from "../../../Components/TextEffect/SectionHeading/SectionHeading";
import SectionHeading2 from "../../../Components/TextEffect/SectionHeading/SectionHeading2";
import ImageGallery from "../ImageGallery/ImageGallery";
import Research from "../Research/Researchs/Researchs";

function Home() {
  return (
    <div>
      <SectionHeading>Our Colleges</SectionHeading>
      <CollegeCards />
      <ImageGallery />
      <Research />
    </div>
  );
}

export default Home;
