import {
  MainBlock,
  CourseForBlock,
  AuthorBlock,
  PreviewCourseBlock,
  BeforeAfterBlock,
  ReviewBlock,
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
      <BeforeAfterBlock />
      <ReviewBlock />
      <FaqBlock />
      <FooterBlock />
    </div>
  );
};

export default HomePage;
