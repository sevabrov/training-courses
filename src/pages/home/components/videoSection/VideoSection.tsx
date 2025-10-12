
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
            <p>БОНУС 🎁 Придбавши курс до кінця жовтня, ти отримаєш у подарунок <strong>Вебінар «З хобі у дохід: Як заробляти на озелененні»</strong></p>
            <button className='btn btn-primary' onClick={() => { window.location.href = PEYMENT_LINK; }}>купити курс</button>
          </footer>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
