import testImg from 'assets/testImg.jpg';
import './index.scss';
import { Typography } from 'components';

export const CourseForBlock = () => {
  const coursesData = [
    {
      img: testImg,
      title: ' МАЮТЬ ДІАГНОЗ 1',
      desc: 'аутоімунний тиреоїдит (як у авторки курсу Олі Острікової)',
    },
    {
      img: testImg,
      title: ' МАЮТЬ ДІАГНОЗ 2',
      desc: 'аутоімунний тиреоїдит (як у авторки курсу Олі Острікової)',
    },
    {
      img: testImg,
      title: ' МАЮТЬ ДІАГНОЗ 3',
      desc: 'аутоімунний тиреоїдит (як у авторки курсу Олі Острікової)',
    },
    {
      img: testImg,
      title: ' МАЮТЬ ДІАГНОЗ 4',
      desc: 'аутоімунний тиреоїдит (як у авторки курсу Олі Острікової)',
    },
  ];
  return (
    <div className='content-block'>
      <div className='content-main course-block'>
        {coursesData.map((course, index) => (
          <div className='course-item' key={`${course.title}-${index}`}>
            <img src={course.img} alt='course' />
            <Typography variant='subtitle' bold>
              {course.title}
            </Typography>
            <Typography variant='body'>{course.desc}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
