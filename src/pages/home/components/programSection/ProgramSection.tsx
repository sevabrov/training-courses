import { useState } from 'react';
import './index.scss';
import { programData } from './helper';
import ModalBasic from 'components/modal/Modal';
import VideoPlayer from './VideoPlayer';

const ProgramSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getPayment = async () => {
    setModalIsOpen(true);
  };

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
                Отримай чітку систему догляду, яка працює завжди.
              </p>
              <hr />
              <button className='btn btn-primary' onClick={getPayment}>купити курс</button>
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
      <ModalBasic modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default ProgramSection;
