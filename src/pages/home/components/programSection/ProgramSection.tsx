import author2 from 'assets/flowers/author2.webp';
import './index.scss';

const ProgramSection = () => {
  return (
    <section className='WhatContain_for-whom'>
      <div className='container WhatContain_top'>
        <header>
          <h2>Програма курсу</h2>
          <hr />
          <p>
            Курс поділяється на теми та підтеми. Кожна з них розкрита у відео
            форматі тривалістю від 30 сек. до 5хв. Це дає змогу легко засвоювати
            матеріал без води та лишньої інформації. Все по суті. Легка та
            проста подача матеріалу простими словами.
          </p>
        </header>
      </div>
      <div className='container WhatContain_content'>
        <div className='WhatContain_image'>
          <picture className=''>
            <img
              alt=''
              data-nimg='1'
              decoding='async'
              height='1075'
              loading='lazy'
              src={author2}
              srcSet={author2}
              style={{
                color: 'transparent',
              }}
              width='1106'
            />
          </picture>
          <footer className='call-to-action'>
            <p>
              Навчись правильно доглядати за кімнатними рослинами, щоб більше не
              гинули
            </p>
            <hr />
            <button className='btn btn-primary'>купити курс</button>
          </footer>
        </div>
        <ul className='WhatContain_list-items'>
          <li>
            <div className='WhatContain_label WhatContain_pointer'>
              <span className=''>1</span>
              <p>Полив. Правила</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label WhatContain_pointer'>
              <span className=''>2</span>
              <p>Якою водою поливати рослини</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label WhatContain_active WhatContain_pointer'>
              <span className=''>7</span>
              <p>Перелив та пересушування ґрунту</p>
              <i />
            </div>
            <p className='WhatContain_desc'>
              Що робити, якщо перелили, або пересушили рослину?
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgramSection;
