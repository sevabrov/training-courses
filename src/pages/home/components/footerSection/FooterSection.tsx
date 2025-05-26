import { Link } from 'react-router-dom';
import iconInsta from 'assets/flowers/icon_insta.svg';
import './index.scss';

const FooterSection = () => {
  return (
    <footer className='Footer_footer'>
      <div className='container'>
        <div className='Footer_info'>
          <span>© Copyright 2024. Всі права захищені.</span>
          <div>
            <span>
              Будь-яке копіювання матеріалів дозволяється тільки з погодження
              правовласників
            </span>
          </div>
          <div>
            <span>ФОП Броварний Всеволод Віталійович</span>
          </div>
          <div>
            <span>3293819410</span>
          </div>
          <div className='Footer_contacts'>
            <Link to='/privacy-policy' target='blank'>
              Політика конфіденційності
            </Link>
            <Link to='/oferta' target='blank'>
              Публічна оферта
            </Link>
          </div>
        </div>

        <div className='Footer_social'>
          <a
            href='https://instagram.com/zeleno_house'
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
