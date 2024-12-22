import { useRef } from 'react';
import './index.scss';

type FaqItemProps = {
  index: number;
  question: string;
  answer: string;
  isActive: boolean;
  onToggle: (index: number) => void;
};

const FaqItem = ({
  index,
  question,
  answer,
  isActive,
  onToggle,
}: FaqItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className='faq-item'>
      <button className='faq-question' onClick={() => onToggle(index)}>
        {question}
        <span className={`arrow ${isActive ? 'open' : ''}`}>▼</span>
      </button>
      <div
        className='faq-answer'
        style={{
          height: isActive ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div ref={contentRef} className='faq-content'>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
