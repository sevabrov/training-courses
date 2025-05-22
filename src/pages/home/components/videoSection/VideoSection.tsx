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
            <p>Цей курс — твій персональний ключ до розуміння будь-якої рослини.</p>
            <hr />
            <button className='btn btn-primary' onClick={() => { window.location.href = 'https://secure.wayforpay.com/button/b610029802bd4'; }}>купити курс</button>
          </footer>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
