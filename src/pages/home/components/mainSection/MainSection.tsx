import headerImage from 'assets/flowers/header-image.webp';
import author from 'assets/flowers/author.webp';
import iconInsta from 'assets/flowers/icon_insta.svg';
import './index.scss';
import { PEYMENT_LINK } from '../../../../constants';

const MainSection = () => {

  return (
    <>
      <header className='HomeHeader_home-header' id='author'>
        <div className='container'>
          <div className='HomeHeader_content'>
            <div>
              <h1>
                Zeleno House:<br/>
                <span>рослини як стиль життя і професія</span>
              </h1>
              <p>🌱 РАЗ І НАЗАВЖДИ розберешся у догляді за кімнатними рослинами, навіть, якщо не мав рослин</p>
              <p>🌱 Навчишся озеленювати простір для себе або на замовлення</p>
              <p>🌱 Зможеш стабільно заробляти на озелененні та роботі з рослинами</p>
            </div>
            <button className='btn btn-primary' onClick={() => { window.location.href = PEYMENT_LINK; }}>
              купити курс
            </button>
          </div>
          <div className='HomeHeader_image'>
            <picture>
              <img
                alt='hader'
                data-nimg='1'
                decoding='async'
                height='1584'
                src={headerImage}
                srcSet={headerImage}
                style={{
                  color: 'transparent',
                }}
                width='1602'
              />
            </picture>
          </div>
          <div className='banner-content'>
            БОНУС 🎁<br/> Придбавши курс до кінця вересня, ти отримаєш у подарунок Вебінар «Як заробляти на озелененні: Все про професію озеленювача».
          </div>
          <div className='HomeHeader_bio'>
            <picture>
              <img
                alt='author'
                data-nimg='1'
                decoding='async'
                height='602'
                loading='lazy'
                src={author}
                srcSet={author}
                style={{
                  color: 'transparent',
                }}
                width='622'
              />
            </picture>
            <div className='HomeHeader_bio-info'>
              <span>ПРО АВТОРА</span>
              <h2>Привіт, я Женя</h2>
              <p>
                🪴 Я квітникарка з 12 річним досвідом, але багато років працювала у маркетингу
              </p>
              <p>
                🪴 Займаюсь озелененням житлових та комерційних об'єктів вже понад рік в Іспанії (озеленила Gbar Alicante)
              </p>
              <p>🪴 Дипломований спеціаліст з рослинотерапії</p>
              <p>🪴 Автор унікального курсу про догляд за рослинами</p>
              <p>🪴 Організовую та проводжу рослинні майстер-класи в Аліканте</p>
              <p>🪴 Веду блог про рослини в Instagram</p>
              <div className='HomeHeader_bio-socials'>
                <span>Підпишись</span>
                <hr />
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
          </div>
        </div>
      </header>
    </>
  );
};

export default MainSection;
