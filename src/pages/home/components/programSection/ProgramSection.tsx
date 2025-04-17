import { useState } from 'react';
import author2 from 'assets/flowers/author2.webp';
import './index.scss';
import { programData } from './helper';

const ProgramSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleItems = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className='WhatContain_for-whom'>
      <div className='container WhatContain_top'>
        <header>
          <h2>Програма курсу</h2>
          <hr />
          <h3>«Догляд за рослинами: від новачка до профі»</h3>
        </header>
      </div>
      <div className='container WhatContain_content'>
        <div className='WhatContain_image'>
          <picture className=''>
            <img
              alt=''
              data-nimg='1'
              decoding='async'
              height='1075'
              loading='lazy'
              src={author2}
              srcSet={author2}
              style={{
                color: 'transparent',
              }}
              width='1106'
            />
          </picture>
          <footer className='call-to-action'>
            <p>
              Навчись правильно доглядати за кімнатними рослинами, щоб більше не
              гинули
            </p>
            <hr />
            <button className='btn btn-primary'>купити курс</button>
          </footer>
        </div>
        <ul className='WhatContain_list-items'>
          {programData.map((item, idx) => (
            <li key={item.id} onClick={() => toggleItems(idx)}>
              <div
                className={`WhatContain_label WhatContain_pointer ${
                  activeIndex === idx ? 'WhatContain_active' : ''
                }`}
              >
                <span className=''>{item.id}</span>
                <p>{item.title}</p>
                <i />
              </div>
              {activeIndex === idx && (
                <p className='WhatContain_desc'>{item.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProgramSection;
