import {
  ForWhomSection,
  MainSection,
  ProgramSection,
  VideoSection,
  FeedbacSection,
  FooterSection,
} from './components';

const HomePage = () => {
  return (
    <div>
      <MainSection />
      <VideoSection />
      <ForWhomSection />
      <ProgramSection />
      <FeedbacSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
