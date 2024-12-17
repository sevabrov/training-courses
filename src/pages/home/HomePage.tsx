import {
  MainBlock,
  CourseForBlock,
  AuthorBlock,
  PreviewCourseBlock,
  FeedbackBlock,
  FaqBlock,
  FooterBlock,
} from './components';
import './index.scss';

const HomePage = () => {
  return (
    <div className='content-wrapper'>
      <MainBlock />
      <CourseForBlock />
      <AuthorBlock />
      <PreviewCourseBlock />
      <FeedbackBlock />
      <FaqBlock />
      <FooterBlock />
    </div>
  );
};

export default HomePage;
