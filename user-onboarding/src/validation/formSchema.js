import * as yup from 'yup';

const formSchema = yup.object().shape({

    first_name: yup
        .string()
        .trim()
        .required('Please enter your first name')
        .min(3),
        
    last_name: yup
        .string()
        .trim()
        .required('Please enter your last name'),

    email: yup
        .string()
        .email('Valid Email address required')
        .required('Please enter an email address.'),

    password: yup
        .string()
        .required('Please enter your password')
        .min(6, 'password must be at least six characters long.'),

    tos: yup
    .boolean()
    .oneOf([true], 'Terms and conditions required.')

})

  export default formSchema;