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
    errors.email = 'email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.firstName) {
    errors.firstName = 'firstName is Required';
  }
  if (!values.lastName) {
    errors.lastName = 'lastName is Required';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (!isValidPhoneNumber(values.phoneNumber)) {
    errors.phoneNumber = 'Enter a valid phone number';
  }
  return errors;
};
