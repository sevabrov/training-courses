import { useState } from 'react';
import FaqItem from './FaqItem';
import './index.scss';

type Faq = {
  question: string;
  answer: string;
};

type FaqToggleProps = {
  faqs: Faq[];
};

const FaqToggle = ({ faqs }: FaqToggleProps) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='faq-container'>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
          isActive={activeIndex === index}
          onToggle={toggleFaq}
        />
      ))}
    </div>
  );
};

export default FaqToggle;
