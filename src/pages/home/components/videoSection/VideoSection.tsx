import flower1 from 'assets/flowers/flower1.webp';
import './index.scss';
import YouTubeEmbed from './Video';

const VideoSection = () => {
  return (
    <section className='VideoSection_video-section' id='curse'>
      <div className='container'>
        <header>
          <h2>Що це за курс?</h2>
          <hr />
          <p>
            Переглянь відео (2хв. 11с.) і дізнайся усі деталі які тебе
            чекатимуть на курсі!
          </p>
        </header>
        <div className='VideoSection_video'>
          
        <YouTubeEmbed videoId="SadldNQD2PY" />
        </div>
        <footer className='call-to-action'>
          <p>Навчись доглядати за своїми рослинами</p>
          <hr />
          <button className='btn btn-primary'>купити курс</button>
        </footer>
        <picture className='VideoSection_decor-image'>
          <img
            alt=''
            data-nimg='1'
            decoding='async'
            height='1584'
            loading='lazy'
            src={flower1}
            srcSet={flower1}
            style={{
              color: 'transparent',
            }}
            width='1174'
          />
        </picture>
      </div>
    </section>
  );
};

export default VideoSection;
