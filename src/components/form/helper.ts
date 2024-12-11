import { FormContentDataItem, FormProps } from './type';

export const initialValues: FormProps = {
  firstName: '',
  lastName: '',
  email: '',
};

export const formContentData: FormContentDataItem[] = [
  { fieldName: 'firstName', fieldType: 'text' },
  { fieldName: 'lastName', fieldType: 'text' },
  { fieldName: 'email', fieldType: 'email' },
];

export const errorValidation = (values: FormProps) => {
  const errors = {} as FormProps;
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  return errors;
};
