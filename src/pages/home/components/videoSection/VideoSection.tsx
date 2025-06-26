
import { PEYMENT_LINK } from '../../../../constants';
import './index.scss';
import YouTubeEmbed from './Video';

const VideoSection = () => {
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
            <p>Придбавши курс сьогодні, ти отримаєш у подарунок <strong>60 хвилин</strong> особистої консультації — для твоїх конкретних питань і потреб.</p>
            <button className='btn btn-primary' onClick={() => { window.location.href = PEYMENT_LINK; }}>купити курс</button>
          </footer>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
