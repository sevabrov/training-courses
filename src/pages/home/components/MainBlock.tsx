import { Typography } from 'components';
import LiqPayWidget from 'components/liqPayWidget/LiqPayWidget';

export const MainBlock = () => {
  return (
    <div className='content-block'>
      <div className='content-main'>
        <div style={{ textAlign: 'center' }}>
          <Typography color='light'>
            Онлайн-курс від зіркового тренера з йоги Ольги Острікової
          </Typography>
          <Typography color='primary' variant='h1'>
            HARMONY YOGA:
          </Typography>
          <Typography color='primary' variant='h2'>
            з любов'ю до жінки
          </Typography>
          <Typography color='light'>
            Комплекс тренувань для <span>покращення</span> та{' '}
            <span>стабілізації жіночого гормонального фону</span>
          </Typography>
        </div>
        <LiqPayWidget />
        <Typography color='light'>
          <span>лише 347 грн</span> 1290 грн
        </Typography>
      </div>
    </div>
  );
};
