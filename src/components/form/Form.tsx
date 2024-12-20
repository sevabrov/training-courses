import WayForPayWidget from 'components/wayForPayWidget/WayForPayWidget';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import { FormContentDataItem, FormProps } from './type';
import { errorValidation, formContentData, initialValues } from './helper';
import 'react-phone-number-input/style.css';

const FormBasic = () => {
  const [data, setData] = useState<FormProps | null>(null);

  console.log(data, 'FormBasic');

  if (data === null) {
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validate={(values: FormProps) => errorValidation(values)}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setData(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              {formContentData.map((item: FormContentDataItem) => (
                <div key={item.fieldName}>
                  <Field type={item.fieldType} name={item.fieldName} />
                  <ErrorMessage name={item.fieldName} component='div' />
                </div>
              ))}
              <PhoneInput
                id='phoneNumber'
                name='phoneNumber'
                value={initialValues.phoneNumber}
                onChange={(value) => setFieldValue('phoneNumber', value)}
                defaultCountry='UA'
                international
              />
              <ErrorMessage name={'phoneNumber'} component='div' />
              <button type='submit' disabled={isSubmitting}>
                Перейти до оплати
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }

  return (
    <WayForPayWidget
      productName='Курси Zeleno House'
      productPrice={1}
      clientFirstName={data.firstName}
      clientLastName={data.lastName}
      clientEmail={data.email}
      clientPhone='+380123456789'
    />
  );
};

export default FormBasic;
