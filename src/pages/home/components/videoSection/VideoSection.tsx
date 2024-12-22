import flower1 from 'assets/flowers/flower1.webp';

const VideoSection = () => {
  return (
    <section className='VideoSection_video-section__y8bpU' id='curse'>
      <div className='container'>
        <header>
          <h2>Що це за курс?</h2>
          <hr />
          <p>
            Переглянь відео (2хв. 11с.) і дізнайся усі деталі які тебе
            чекатимуть на курсі!
          </p>
        </header>
        <div className='VideoSection_video__EaZ0C'>
          <p>Тут треба подумати що вставити!!!</p>
        </div>
        <footer className='call-to-action'>
          <p>Створи джунглі у себе вдома</p>
          <hr />
          <button className='btn btn-primary'>купити курс</button>
        </footer>
        <picture className='VideoSection_decor-image__6IwF_'>
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
