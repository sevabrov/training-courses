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
              <h1>Секрети кімнатних рослин</h1>
              <p>
                Детальна методика вирощування здорових і квітучих рослин,
                створена спеціально для тебе!
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
              <span>- Про автора</span>
              <h2>Леся, яка перетворить твій дім на джунглі</h2>
              <p>
                - Обожнюю рослини. Займаюсь вирощенням кімнатних рослин більше 3
                років.
              </p>
              <p>
                - Моя домашня колекція - більше 100 рослин різних унікальних
                видів.
              </p>
              <p>- Вирощую з кісточок екзотичні рослини вдома.</p>
              <p>
                - Практикую вирощування із насіння незвичайних для дому
                рослин.Евкаліпт, сосна, полуничне дерево, гліцинія.
              </p>
              <p>- Корисні та пізнавальні відео у мене в соцмережах</p>
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
