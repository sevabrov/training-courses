import { Typography } from 'components';
import FaqToggle from './component/FaqToggle';

const faqData = [
  {
    question: 'Чи підходить цей курс для початківців?',
    answer: 'Так, курс розрахований навіть на тих, хто ніколи не мав рослин.',
  },
  {
    question: 'Чи потрібні спеціальні матеріали?',
    answer: 'Ні, знадобляться лише основні речі, які є у кожного вдома.',
  },
];

export const FaqBlock = () => {
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
          Часті запитання (FAQ)
        </Typography>
      </div>
      <div className='content-main'>
        <FaqToggle faqs={faqData} />
      </div>
    </div>
  );
};
