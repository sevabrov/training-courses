import { Typography } from 'components';
import './index.scss';
import { Link } from 'react-router-dom';

export const FooterBlock = () => {
  return (
    <div className='content-block'>
      <div className='content-main'>
        <div className='footer-block'>
          <div>
            <div style={{ margin: '20px 0' }}>
              <Typography>ФОП Броварний Всеволод Віталійович</Typography>
              <Typography>3293819410</Typography>
            </div>
            <div style={{ margin: '20px 0' }}>
              <Typography>
                Всі права захищені. Будь-яке копіювання матеріалів дозволяється
                тільки з погодження правовласників
              </Typography>
            </div>
          </div>
          <div>
            <div style={{ margin: '20px 0' }}>
              <div>
                <Link to='/privacy-policy' target='blank'>
                  Політика конфіденційності
                </Link>
              </div>
              <div>
                <Link to='/oferta' target='blank'>
                  Публічна оферта
                </Link>
              </div>
            </div>
            <div style={{ margin: '20px 0' }}>
              <Typography>+380634406952</Typography>
              <Typography>vsevolod.brovarnyi@gmail.com</Typography>
            </div>
          </div>
        </div>
        <div className='footer-block'>
          <Typography variant='caption'>
            IMPORTANT: Do not enter your name and email until you have read the
            Legal Disclaimer. We are not able to make any guarantees and we will
            not make any guarantees about your ability to generate results with
            our ideas, information, tools and resources, or strategies. You
            should know that all products and services by our company are for
            educational and informational purposes only. Nothing on this
            website, or any of our websites, or any of our content or curriculum
            is a implication, promise, or guarantee of results. Use caution
          </Typography>
          <Typography variant='caption'>
            ВАЖЛИВО: не вводьте свою контактну інформацію, доки не прочитаєте
            legal disclaimer. Ми не даємо жодних гарантій, що ви досягнете
            якихось результатів за допомогою наших інструментів, стратегій або
            інформації. Всі продукти і сервіси компанії призначені для освітніх
            цілей. Жодна інформація на цьому сайті або будь-яких інших сайтах
            компанії не гарантує і не обіцяє отримання результатів. Ви несете
            відповідальність за свої дії і результати. Реєструючись на даному
            сайті, ви знімаєте з нас відповідальність
          </Typography>
        </div>
      </div>
    </div>
  );
};
