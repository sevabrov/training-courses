import watering from 'assets/watering.avif';
import graviy from 'assets/graviy.jpg';
import plants from 'assets/plants.jpg';
import './index.scss';
import { Typography } from 'components';

export const CourseForBlock = () => {
  const coursesData = [
    {
      img: plants,
      title: 'Вибір правильного місця для рослин',
      desc: '',
    },
    {
      img: graviy,
      title: 'Дренаж',
      desc: '',
    },
    {
      img: watering,
      title: ' Полив',
      desc: '',
    },
  ];
  return (
    <div className='content-block'>
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
