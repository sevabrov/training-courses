import author3 from 'assets/flowers/author3.webp';
import flower4 from 'assets/flowers/flower4.webp';
import img1 from 'assets/feedback/1.webp';
import img2 from 'assets/feedback/2.webp';
import img3 from 'assets/feedback/3.webp';
import img4 from 'assets/feedback/4.webp';
import img5 from 'assets/feedback/5.webp';
import img6 from 'assets/feedback/6.webp';
import './index.scss';
import ImageSlider from './components/ImageSlider';
import ModalBasic from 'components/modal/Modal';
import { useState } from 'react';

const images = [img1, img2, img3, img4, img5, img6,]

const FeedbacSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const getPayment = async () => {
    setModalIsOpen(true);
  };
  
  return (
    <>
      <section className='CurseSection_curse-section'>
        <div className='container'>
          <picture className='CurseSection_section-decor'>
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
            <h2>Відгуки</h2>
            <hr />
          </header>
          <div className='CurseSection_content'>
            <ImageSlider images={images} />
          </div>
          <div className='CurseSection_content' style={{maxWidth: '100%'}}>
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
            <div className='CurseSection_copy'>
              <p>
                Не чекай поки твої рослини завʼянуть, купуй курс вже зараз🪴
                <br />
              </p>
              <div className='CurseSection_action'>
                <div>
                  <hr />
                  <button className='btn btn-primary' onClick={getPayment}>купити курс</button>
                </div>
                <span>
                  <span className='CurseSection_new-price'>
                    <span>і придбай за </span>
                    50€
                  </span>
                  <span className='CurseSection_old-price'>
                    звичайна ціна: 200€
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalBasic modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default FeedbacSection;
