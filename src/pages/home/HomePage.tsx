import {
  ForWhomSection,
  MainSection,
  ProgramSection,
  VideoSection,
  FeedbacSection,
  FooterSection,
  ResultSection,
  FaqSection
} from './components';

const HomePage = () => {
  return (
    <div>
      <MainSection />
      <VideoSection />
      <ForWhomSection />
      <ProgramSection />
      <ResultSection />
      <FeedbacSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
