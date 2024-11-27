import { Typography } from 'components';
import testFoto from 'assets/testFoto.jpeg';
import './index.scss';

export const AuthorBlock = () => {
  return (
    <div className='content-block'>
      <div className='content-main author-block'>
        <div className='author-desc'>
          <Typography variant='h2'>Привіт</Typography>
          <Typography variant='h2'>
            я, <span>Оля Острікова</span>
          </Typography>
          <div>
            <Typography variant='body'>
              Я практикую йогу 15 років і вже понад 9 років викладаю.
            </Typography>
            <Typography variant='body'>
              Я практикую йогу 15 років і вже понад 9 років викладаю.
            </Typography>
            <Typography variant='body'>
              Я практикую йогу 15 років і вже понад 9 років викладаю.
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
