import headerImage from 'assets/flowers/header-image.webp';
import author from 'assets/flowers/author.webp';
import iconInsta from 'assets/flowers/icon_insta.svg';
import './index.scss';

const MainSection = () => {
  return (
    <header className='HomeHeader_home-header' id='author'>
      <div className='container'>
        <div className='HomeHeader_content'>
          <div>
            <h1>Секрети кімнатних рослин</h1>
            <p>
              Детальна методика вирощування здорових і квітучих рослин, створена
              спеціально для тебе!
            </p>
          </div>
          <button className='btn btn-primary'>купити курс</button>
        </div>
        <div className='HomeHeader_image'>
          <picture>
            <img
              alt='hader image'
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
              alt='author image'
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
              <br />
              - Моя домашня колекція - більше 100 рослин різних унікальних
              видів.
              <br />
              - Вирощую з кісточок екзотичні рослини вдома.
              <br />
              - Практикую вирощування із насіння незвичайних для дому рослин.
              Евкаліпт, сосна, полуничне дерево, гліцинія.
              <br />
              - Корисні та пізнавальні відео у мене в соцмережах
              <br />
              <br />
              Instagram - 100K
              <br />
              TikTok - 1.1M
              <br />
              YouTube - 11K
              <br />
            </p>
            <div className='HomeHeader_bio-socials'>
              <span>Підпишись</span>
              <hr />
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
        </div>
      </div>
    </header>
  );
};

export default MainSection;
