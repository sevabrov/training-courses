import LiqPayWidget from 'components/LiqPayWidget';
import './index.scss';

const HomePage = () => {
  return (
    <div className='content-wrapper'>
      <div className='content-block'>
        <div>Первый Главный блок с инфой про курс и кнопкой "Получи курс"</div>{' '}
        <LiqPayWidget />
      </div>
      <div className='content-block'>Блок с описанием курса</div>
      <div className='content-block'>Блок про автора</div>
      <div className='content-block'>Превью курса</div>
      <div className='content-block'>Блок До-После</div>
      <div className='content-block'>Отзывы</div>
      <div className='content-block'>Частые вопросы</div>
      <div className='content-block'>
        Футер сайта с информацией типа "All rights protected" бла бла бла
      </div>
    </div>
  );
};

export default HomePage;
