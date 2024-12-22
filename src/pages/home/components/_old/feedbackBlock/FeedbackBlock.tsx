import { Typography } from 'components';
import ContentSlider from './component/ContentSlider';

export const FeedbackBlock = () => {
  return (
    <div className='content-block'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <Typography variant='h2' color='light' bold>
          Відгуки учасників
        </Typography>
      </div>
      <div className='content-main'>
        <ContentSlider />
      </div>
    </div>
  );
};
