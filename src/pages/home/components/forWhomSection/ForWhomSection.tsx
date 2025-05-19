import flower2 from 'assets/flowers/flower2.webp';
import './index.scss';

const ForWhomSection = () => {
  return (
    <section className='ForWhom_for-whom'>
      <div className='container'>
        <header>
          <h2>Для кого цей курс?</h2>
          <hr />
          <p>🌿 Початківців, які тільки відкривають для себе світ кімнатних рослин і хочуть одразу робити все правильно</p>
          <p>🌿 Любителів, у яких вже є рослини, але не завжди зрозуміло, чому вони в'януть, жовтіють чи не ростуть — і хочеться нарешті у цьому розібратися</p>
          <p>🌿 Зайнятих людей, які не мають часу на нескінченне вивчення догляду, але хочуть мати вдома здорові, красиві рослини з мінімальними зусиллями</p>
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
