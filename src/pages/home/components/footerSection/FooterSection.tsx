import iconInsta from 'assets/flowers/icon_insta.svg';

const FooterSection = () => {
  return (
    <footer className='Footer_footer__Q5T55'>
      <div className='container'>
        <span>
          © Copyright 2023{' '}
          <a href='https://empiria-studio.com'>Empiria Studio</a> - усі права
          захищено
        </span>
        <ul className=''>
          <li>
            <a href='/#author'>про мене</a>
          </li>
          <li>
            <a href='/#curse'>курс</a>
          </li>
          <li>
            <a href='/#contact'>подарунок для тебе</a>
          </li>
        </ul>
        <div className='Footer_social__2_oMI'>
          <a
            href='https://instagram.com/kirgisska'
            rel='noopener noreferrer'
            target='_blank'
          >
            <img
              alt='instagram link'
              data-nimg='1'
              decoding='async'
              height='32'
              loading='lazy'
              src={iconInsta}
              style={{
                color: 'transparent',
              }}
              width='32'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
