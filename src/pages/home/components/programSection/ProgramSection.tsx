import { useState } from 'react';
import './index.scss';
import { programData } from './helper';
import VideoPlayer from './VideoPlayer';
import { PEYMENT_LINK } from '../../../../constants';

const ProgramSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleItems = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
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
            <VideoPlayer />
            <footer className='call-to-action'>
              <p>
                🎁 Лише при купівлі курсу зараз  — вебінар <strong>«З хобі у дохід: Як заробляти на озелененні»</strong> у подарунок
              </p>
              <button className='btn btn-primary' onClick={() => { window.location.href = PEYMENT_LINK; }}>купити курс</button>
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
    </>
  );
};

export default ProgramSection;
