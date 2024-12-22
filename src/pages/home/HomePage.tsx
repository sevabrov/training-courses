import {
  ContactForm,
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
      <ContactForm />
      <FeedbacSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
