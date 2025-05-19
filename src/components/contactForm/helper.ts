import { FormContentDataItem, FormProps } from './type';
import { isValidPhoneNumber } from 'react-phone-number-input';

export const initialValues: FormProps = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
};

export const formContentData: FormContentDataItem[] = [
  { fieldName: 'firstName', fieldType: 'text' },
  { fieldName: 'lastName', fieldType: 'text' },
  { fieldName: 'email', fieldType: 'email' },
];

export const errorValidation = (values: FormProps) => {
  const errors = {} as FormProps;
  if (!values.email) {
    errors.email = 'Email є обовʼязковим';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.firstName) {
    errors.firstName = 'Імʼя є обовʼязковим';
  }
  if (!values.lastName) {
    errors.lastName = 'Прізвище є обовʼязковим';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Телефон є обовʼязковим';
  } else if (!isValidPhoneNumber(values.phoneNumber)) {
    errors.phoneNumber = 'Невірний номер телефону';
  }
  return errors;
};
