import {
  ForWhomSection,
  MainSection,
  ProgramSection,
  VideoSection,
  FeedbacSection,
  FooterSection,
  ResultSection
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
      <FooterSection />
    </div>
  );
};

export default HomePage;
