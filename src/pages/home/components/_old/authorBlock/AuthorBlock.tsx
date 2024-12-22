import { Typography } from 'components';
import testFoto from 'assets/testFoto.jpg';
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
            я, <span>Женя</span>
          </Typography>
          <div>
            <Typography color='light' variant='body'>
              і більше 10 років я професійно займаюсь кімнатними рослинами та
              досліджую, як ці рослини живуть у природі. Змогла подолати всі
              труднощі та створити гармонійне життя завдяки рослино-терапії.
            </Typography>
          </div>
        </div>
        <div
          className='author-img'
          style={{ backgroundImage: `url(${testFoto})` }}
        ></div>
      </div>
    </div>
  );
};
