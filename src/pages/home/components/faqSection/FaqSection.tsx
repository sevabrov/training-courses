import { useState } from 'react';
import './index.scss';
import { programData } from './helper';
import ModalBasic from 'components/modal/Modal';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleItems = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className='Faq_section'>
        <div className='container Faq_top'>
          <header>
            <h2>Поширені питання</h2>
          </header>
        </div>
        <div className='container Faq_content'>
          <ul className='Faq_list-items'>
            {programData.map((item, idx) => (
              <li key={item.id} onClick={() => toggleItems(idx)}>
                <div
                  className={`Faq_label Faq_pointer ${
                    activeIndex === idx ? 'Faq_active' : ''
                  }`}
                >
                  <span className=''>{item.id}</span>
                  <p>{item.title}</p>
                  <i />
                </div>
                {activeIndex === idx && (
                  <p className='Faq_desc'>{item.desc}</p>
                )}
              </li>
            ))}
            <li onClick={() => toggleItems(4)}>
              <div
                className={`Faq_label Faq_pointer ${
                  activeIndex === 4 ? 'Faq_active' : ''
                }`}
              >
                <span className=''>{4}</span>
                <p>Якщо курс мені не сподобається чи зможу я повернути кошти?</p>
                <i />
              </div>
              {activeIndex === 4 && (
                <div className='Faq_desc'>
                  <p>Ви можете повернути кошти. Для цього протягом 24 годин з моменту оплати вам необхідно надіслати квитанцію та ваші дані (ім’я, прізвище, контактний номер телефону та e-mail) на 
                    <a href="mailto:evgenia.brovarnay@gmail.com?subject=Zeleno%20повернення%20коштів"> поштову скриньку</a></p>
                </div>
              )}
            </li>
            <li onClick={() => toggleItems(5)}>
              <div
                className={`Faq_label Faq_pointer ${
                  activeIndex === 5 ? 'Faq_active' : ''
                }`}
              >
                <span className=''>{5}</span>
                <p>Чому цей курс цікавий?</p>
                <i />
              </div>
              {activeIndex === 5 && (
                <div className='Faq_desc'>
                  <p>✔️ Покроковий підхід – не просто теорія, а конкретні алгоритми дій</p>
                  <p>✔️ Живі приклади – реальні кейси з догляду за рослинами</p>
                  <p>✔️ Мінімум часу – максимум користі – курс структурований так, щоб не перевантажувати</p>
                  <p>✔️ Багато практичних матеріалів у вигляді зрозумілих презентацій</p>
                  <p>✔️ Годинна консультація зі мною при покупці повного курсу – можливість отримати відповіді на свої питання`</p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </section>
      <ModalBasic modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default FaqSection;
