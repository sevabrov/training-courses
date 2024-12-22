import flower3 from 'assets/flowers/flower3.webp';

const ContactForm = () => {
  return (
    <section className='LeaveContact_leave-contact___r0tJ' id='contact'>
      <div className='container'>
        <header>
          <h2>Подарунок для тебе</h2>
          <p>
            Отримай безкоштовну відео інструкцію як правильно вибирати рослини у
            магазині, щоб вони не гинули у перші дні. Вписуй дані і забирай свій
            ПОДАРУНОК!
          </p>
        </header>
        <form className='LeaveContact_form-container__1iype'>
          <div>
            <input className='' name='name' placeholder="Ім'я" type='text' />
            <input
              className=''
              name='email'
              placeholder='Електронна адреса'
              type='email'
            />
            <input
              className=''
              name='phone'
              placeholder='Код країни і номер тел'
              type='tel'
            />
            <input className='btn' type='submit' value='Подарунок' />
          </div>
        </form>
        <picture className='LeaveContact_section-decor__Icnyb'>
          <img
            alt=''
            data-nimg='1'
            decoding='async'
            height='882'
            loading='lazy'
            src={flower3}
            srcSet={flower3}
            style={{
              color: 'transparent',
            }}
            width='646'
          />
        </picture>
      </div>
    </section>
  );
};

export default ContactForm;
