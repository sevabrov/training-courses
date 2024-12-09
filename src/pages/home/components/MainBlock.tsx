import { Typography } from 'components';
import LiqPayWidget from 'components/liqPayWidget/LiqPayWidget';
import WayForPayWidget from 'components/wayForPayWidget/WayForPayWidget';

export const MainBlock = () => {
  return (
    <div className='content-block'>
      <div className='content-main'>
        <div style={{ textAlign: 'center' }}>
          <Typography color='light'>
            Онлайн-курс від Броварної Євгенії
          </Typography>
          <Typography color='primary' variant='h1'>
            ЧЕКЛИСТ
          </Typography>
          <Typography color='primary' variant='h2'>
            Базовий догляд за рослинами для новачків
          </Typography>
          <Typography color='light'>
            Покрокова інструкція по <span>правильному</span> догляду за
            домашніми рослинами
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          <LiqPayWidget />
          <WayForPayWidget />
          <Typography color='light'>
            <span>лише за 99 гринень</span>
            {/* 599 грн */}
          </Typography>
        </div>
      </div>
    </div>
  );
};
