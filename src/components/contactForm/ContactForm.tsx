import flower3 from 'assets/flowers/flower3.webp';
import WayForPayWidget from 'components/wayForPayWidget/WayForPayWidget';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-number-input';
import { Fragment, useState } from 'react';
import { FormContentDataItem, FormProps } from './type';
import { errorValidation, formContentData, initialValues } from './helper';
import 'react-phone-number-input/style.css';
import './index.scss';

const ContactForm = () => {
  const [data, setData] = useState<FormProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(data, 'FormBasic');

  return (
    <section className='LeaveContact_leave-contact' id='contact'>
      <div className='container'>
        <header>
          <h2>Купуй курс вже зараз</h2>
          <p>
            та отримай годинну персональну консультацію, щоб розвʼязати саме свої запитання.
          </p>
        </header>
        {data === null ? (
          <Formik
            initialValues={initialValues}
            validate={(values: FormProps) => errorValidation(values)}
            onSubmit={(values, { setSubmitting }) => {
              setData(values);
              setIsLoading(true);
              setTimeout(() => {
                setSubmitting(false);
                setIsLoading(false);
              }, 2000);
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className='LeaveContact_form-container'>
                <div>
                  {formContentData.map((item: FormContentDataItem) => (
                    <Fragment key={item.fieldName}>
                      <Field type={item.fieldType} name={item.fieldName} />
                      <ErrorMessage
                        className='LeaveContact_form-error'
                        name={item.fieldName}
                        component='div'
                      />
                    </Fragment>
                  ))}
                  <div className='LeaveContact_section-button'>
                    <PhoneInput
                      id='phoneNumber'
                      name='phoneNumber'
                      value={initialValues.phoneNumber}
                      onChange={(value) => setFieldValue('phoneNumber', value)}
                      defaultCountry='UA'
                      international
                    />
                    <ErrorMessage
                      className='LeaveContact_form-error'
                      name={'phoneNumber'}
                      component='div'
                    />
                    <button
                      className='btn'
                      type='submit'
                      disabled={isSubmitting}
                    >
                      Перейти до оплати
                    </button>
                  </div>
                </div>
                <picture className='LeaveContact_section-decor'>
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
              </Form>
            )}
          </Formik>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <WayForPayWidget
            productName='Курси Zeleno House'
            productPrice={1}
            clientFirstName={data.firstName}
            clientLastName={data.lastName}
            clientEmail={data.email}
            clientPhone={data.phoneNumber}
          />
        )}
      </div>
    </section>
  );
};

export default ContactForm;
