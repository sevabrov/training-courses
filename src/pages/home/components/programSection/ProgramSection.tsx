import author2 from 'assets/flowers/author2.webp';

const ProgramSection = () => {
  return (
    <section className='WhatContain_for-whom__q_ijA'>
      <div className='container WhatContain_top__pvkB0'>
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
      <div className='container WhatContain_content__Eu_0G'>
        <div className='WhatContain_image__MypCW'>
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
        <ul className='WhatContain_list-items__VNw_z'>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>1</span>
              <p>Полив. Правила</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>2</span>
              <p>Якою водою поливати рослини</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>3</span>
              <p>Обприскування рослин</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>4</span>
              <p>Гарячий душ для рослин</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>5</span>
              <p>Полірування листя</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>6</span>
              <p>Температура та вологість повітря</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_active__u4Ku_ WhatContain_pointer___MEB_'>
              <span className=''>7</span>
              <p>Перелив та пересушування ґрунту</p>
              <i />
            </div>
            <p className='WhatContain_desc__YLaur'>
              Що робити, якщо перелили, або пересушили рослину?
            </p>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>8</span>
              <p>Ґрунт і пересадка</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>9</span>
              <p>Добрива</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>10</span>
              <p>Світло для кімнатних рослин</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>11</span>
              <p>Помилки у садівництві</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>12</span>
              <p>Шкідники та хвороби рослин</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>13</span>
              <p>Пори року і рослини</p>
              <i />
            </div>
          </li>
          <li>
            <div className='WhatContain_label__BA2Wf WhatContain_pointer___MEB_'>
              <span className=''>14</span>
              <p>Особливості догляду </p>
              <i />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgramSection;
