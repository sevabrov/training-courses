import iconInsta from 'assets/flowers/icon_insta.svg';
import './index.scss';

const FooterSection = () => {
  return (
    <footer className='Footer_footer'>
      <div className='container'>
        <span>
          © Copyright 2023{' '}
          <a href='https://empiria-studio.com'>Empiria Studio</a> - усі права
          захищено
        </span>
        <div className='Footer_social'>
          <a
            href='https://instagram.com/kirgisska'
            rel='noopener noreferrer'
            target='_blank'
          >
            <img
              alt='instagram link'
              data-nimg='1'
              decoding='async'
              height='32'
              loading='lazy'
              src={iconInsta}
              style={{
                color: 'transparent',
              }}
              width='32'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
