import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  car_details: yup.string().required(),
  user_id: yup.string().nullable(),
});
