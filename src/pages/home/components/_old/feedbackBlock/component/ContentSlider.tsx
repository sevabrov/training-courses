import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss'; // Custom styles (optional)

const ContentSlider = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div className='slide'>
          <h3>Анна, учасниця курсу</h3>
          <p>
            "Курс перевершив мої очікування! Тепер я не тільки доглядаю за
            рослинами, а й заспокоююся в цьому процесі."
          </p>
        </div>
        <div className='slide'>
          <h3>Олександр, учасник курсу</h3>
          <p>
            "Женя пояснює все дуже доступно. Мої рослини нарешті щасливі, як і
            я!"
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default ContentSlider;
