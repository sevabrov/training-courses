import { useState } from 'react';
import ModalBasic from 'components/modal/Modal';
import headerImage from 'assets/flowers/header-image.webp';
import author from 'assets/flowers/author.webp';
import iconInsta from 'assets/flowers/icon_insta.svg';
import './index.scss';

const MainSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getPayment = async () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <header className='HomeHeader_home-header' id='author'>
        <div className='container'>
          <div className='HomeHeader_content'>
            <div>
              <h1>
                Догляд за кімнатними рослинами:<br/>
                <span>від новачка до профі</span>
              </h1>
              <p>
              Це повноцінний посібник, де я зібрала найкориснішу 
              та найцікавішу інформацію, щоб твої рослини почували себе щасливими.
              </p>
            </div>
            <button className='btn btn-primary' onClick={getPayment}>
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
                - Кайфую від догляду за рослинами та практикую рослинотерапію.
              </p>
              <p>
                - Займаюсь вирощуванням кімнатних рослин більше 10 років.
              </p>
              <p>- Озеленюю комерційні та житлові приміщення, консультую онлайн.</p>
              <p>- Вирощую вдома рослини з кісточок та черенків з вулиці.</p>
              <p>- Все про догляд за рослинами у мене в Instagram</p>
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
      <ModalBasic modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default MainSection;
