import CollegeCards from "../../../Components/CollegeCard/CollegeCards";
import SectionHeading from "../../../Components/TextEffect/SectionHeading/SectionHeading";
import SectionHeading2 from "../../../Components/TextEffect/SectionHeading/SectionHeading2";
import ImageGallery from "../ImageGallery/ImageGallery";

function Home() {
  return (
    <div>
      <SectionHeading>Our Colleges</SectionHeading>
      <CollegeCards />
      <ImageGallery />
    </div>
  );
}

export default Home;
