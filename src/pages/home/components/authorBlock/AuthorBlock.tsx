import { Typography } from 'components';
import testFoto from 'assets/testFoto.jpeg';
import './index.scss';

export const AuthorBlock = () => {
  return (
    <div className='content-block'>
      <div className='content-main author-block'>
        <div className='author-desc'>
          <Typography color='light' variant='h2'>
            Привіт
          </Typography>
          <Typography color='light' variant='h2'>
            я, <span>Євгенія</span>
          </Typography>
          <div>
            <Typography color='light' variant='body'>
              Я займаюсь рослинами вже більше 10-ти років.
            </Typography>
          </div>
        </div>
        <div
          className='author-img'
          style={{ backgroundImage: `url(${testFoto})` }}
        >
          image
        </div>
      </div>
    </div>
  );
};
