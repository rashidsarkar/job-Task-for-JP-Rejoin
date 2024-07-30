import CollegeCards from "../../../Components/CollegeCard/CollegeCards";
import SectionHeading from "../../../Components/TextEffect/SectionHeading/SectionHeading";
import SectionHeading2 from "../../../Components/TextEffect/SectionHeading/SectionHeading2";
import ImageGallery from "../ImageGallery/ImageGallery";
import Research from "../Research/Researchs/Researchs";
import Reviews from "../Reviews/Reviews/Reviews";

function Home() {
  return (
    <div>
      <SectionHeading>Our Colleges</SectionHeading>
      <CollegeCards />
      <ImageGallery />
      <Research />
      <Reviews />
    </div>
  );
}

export default Home;
