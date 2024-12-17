import { Typography } from 'components';
import './index.scss';

export const CourseForBlock = () => {
  const coursesData = [
    {
      img: '',
      title: 'Для тих, хто хоче зменшити рівень стресу.',
      desc: '',
    },
    {
      img: '',
      title: 'Для тих, хто мріє навчитися доглядати за кімнатними рослинами.',
      desc: '',
    },
    {
      img: '',
      title: 'Для всіх, хто хоче створити вдома зелений куточок затишку.',
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
          Для кого цей курс?
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
