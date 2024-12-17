import './index.scss';
import { Typography } from 'components';

export const PreviewCourseBlock = () => {
  const previewData = [
    {
      // img: plants,
      title: 'День 1',
      desc: 'Чому і як рослини знижують стрес',
    },
    {
      // img: graviy,
      title: 'День 2',
      desc: 'Основи догляду: Світло та Вода',
    },
    {
      // img: watering,
      title: 'День 3',
      desc: 'Основи догляду: Повітря та Живлення',
    },
    {
      // img: watering,
      title: 'День 4',
      desc: 'Догляд за кімнатними рослинами як антістресова практика',
    },
    {
      // img: watering,
      title: 'День 5',
      desc: 'Створення зеленого оазису із кактусів та сукулентів',
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
          Програма курсу (5 днів)
        </Typography>
      </div>
      <div className='content-main preview-block'>
        {previewData.map((preview, index) => (
          <div className='preview-item' key={`${preview.title}-${index}`}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant='subtitle' color='light' bold>
                {preview.title}
              </Typography>
            </div>
            <Typography variant='body'>{preview.desc}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
