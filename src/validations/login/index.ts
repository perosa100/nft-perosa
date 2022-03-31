import * as yup from 'yup'

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('O email é obrigatório.'),
  password: yup
    .string()
    .min(6, 'A senha deve possuir no mínimo 6 caracteres.')
    .required('A senha é obrigatória.')
})
