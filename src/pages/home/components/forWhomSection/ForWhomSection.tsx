// import flower2 from 'assets/flowers/flower2.webp';
import flower2 from 'assets/flowers/flower2.png';
import './index.scss';

const ForWhomSection = () => {
  return (
    <section className='ForWhom_for-whom'>
      <div className='container'>
        <header>
          <h2>Для кого цей курс?</h2>
          <hr />
          <p>🌿 Початківців, які хочуть розібратися в догляді за рослинами</p>
          <p>🌿 Любителів, які вже мають кімнатні рослини, але хочуть зрозуміти їхні потреби глибше</p>
          <p>🌿 Зайнятих людей, які хочуть витрачати мінімум часу на догляд за рослинами</p>
        </header>
        <picture className='ForWhom_section-decor'>
          <img
            alt=''
            data-nimg='1'
            decoding='async'
            height='1666'
            src={flower2}
            srcSet={flower2}
            style={{
              color: 'transparent',
            }}
            width='1316'
          />
        </picture>
      </div>
    </section>
  );
};

export default ForWhomSection;
