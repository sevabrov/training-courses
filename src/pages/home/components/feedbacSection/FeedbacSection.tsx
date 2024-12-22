import author3 from 'assets/flowers/author3.webp';
import flower4 from 'assets/flowers/flower4.webp';
import feedback from 'assets/flowers/feedback.webp';

const FeedbacSection = () => {
  return (
    <section className='CurseSection_curse-section___qPjP'>
      <div className='container'>
        <picture className='CurseSection_section-decor__ID_GC'>
          <img
            alt=''
            data-nimg='1'
            decoding='async'
            height='1388'
            loading='lazy'
            src={flower4}
            srcSet={flower4}
            style={{
              color: 'transparent',
            }}
            width='1048'
          />
        </picture>
        <header>
          <h2>Відгуки учнів</h2>
          <hr />
        </header>
        <div className='CurseSection_content__zYc8b'>
          <picture className=''>
            <img
              alt=''
              data-nimg='1'
              decoding='async'
              height='1080'
              loading='lazy'
              src={feedback}
              srcSet={feedback}
              style={{
                color: 'transparent',
              }}
              width='1824'
            />
          </picture>
          <picture className=''>
            <img
              alt=''
              data-nimg='1'
              decoding='async'
              height='1080'
              loading='lazy'
              src={feedback}
              srcSet={feedback}
              style={{
                color: 'transparent',
              }}
              width='1824'
            />
          </picture>
        </div>
        <div className='CurseSection_content__zYc8b'>
          <picture className=''>
            <img
              alt=''
              data-nimg='1'
              decoding='async'
              height='722'
              loading='lazy'
              src={author3}
              srcSet={author3}
              style={{
                color: 'transparent',
              }}
              width='1216'
            />
          </picture>
          <div className='CurseSection_copy__ICFfA'>
            <p>
              Не втрать свою можливість вже і зараз дізнатись усі секрети з
              вирощення та догляду за кімнатними рослинами. Твоя затишна
              оранжерея чекає на тебе!
              <br />
              <br />
              Впиши промокод FIKUS
            </p>
            <div className='CurseSection_action__Po4oB'>
              <div>
                <hr />
                <button className='btn btn-primary'>купити курс</button>
              </div>
              <span>
                <span className='CurseSection_new-price__jgLvO'>
                  <span>і придбай за </span>
                  15$
                </span>
                <span className='CurseSection_old-price__KKEqR'>
                  звичайна ціна: 30$
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbacSection;
