import watering from 'assets/watering.avif';
import graviy from 'assets/graviy.jpg';
import plants from 'assets/plants.jpg';
import './index.scss';
import { Typography } from 'components';

export const CourseForBlock = () => {
  const coursesData = [
    {
      img: plants,
      title: 'Вибрати правильне місце для рослин',
      desc: '',
    },
    {
      img: graviy,
      title: 'Як підібрати Дренаж',
      desc: '',
    },
    {
      img: watering,
      title: 'На що треба звернути увагу під час Поливу',
      desc: '',
    },
  ];
  return (
    <div className='content-block'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <Typography variant='h2' color='light' bold>
          Короткий опис Гайду
        </Typography>
        <Typography variant='body' color='light' bold>
          В цьому гайді ви дізнаєтесь про те як:
        </Typography>
      </div>
      <div className='content-main course-block'>
        {coursesData.map((course, index) => (
          <div className='course-item' key={`${course.title}-${index}`}>
            <img src={course.img} alt='course' />
            <Typography variant='subtitle' color='light' bold>
              {course.title}
            </Typography>
            <Typography variant='body'>{course.desc}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
