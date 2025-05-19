import { useState } from 'react';
import './index.scss';
import YouTubeEmbed from './Video';
import ModalBasic from 'components/modal/Modal';

const VideoSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const getPayment = async () => {
    setModalIsOpen(true);
  };
  return (
    <>
      <section className='VideoSection_video-section' id='curse'>
        <div className='container'>
          <header>
            <h2>Що це за курс?</h2>
            <hr />
            <p>
              Переглянь це відео та дізнайся усі деталі, які тебе чекатимуть на курсі!
            </p>
          </header>
          <div className='VideoSection_video'>
            
          <YouTubeEmbed videoId="SadldNQD2PY" />
          </div>
          <footer className='call-to-action'>
            <p>Цей курс — твій персональний ключ до розуміння будь-якої рослини.</p>
            <hr />
            <button className='btn btn-primary' onClick={getPayment}>купити курс</button>
          </footer>
        </div>
      </section>
      <ModalBasic modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default VideoSection;
