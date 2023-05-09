import * as yup from 'yup';

const schema = yup.object({
    firstName: yup
        .string()
        .min(3, 'O primeiro nome precisa ter no mínimo 3 caracteres.')
        .max(20, 'O primeiro nome precisa ter no máximo 20 caracteres.'),
    lastName: yup
        .string()
        .min(3, 'O sobrenome precisa ter no mínimo 3 caracteres.')
        .max(20, 'O sobrenome precisa ter no máximo 20 caracteres.'),
    email: yup
        .string()
        .email('Insira um endereço de email valido.')
        .required('O email é obrigatório.'),
    tel: yup
        .string()
        .min(19, 'Insira o número de telefone.')
        .max(19, 'Insira o número de telefone.'),
    password: yup
        .string()
        .min(3, 'A senha precisa ter no mínimo 3 caracteres.')
        .max(20, 'A senha precisa ter no máximo 20 caracteres.'),
    confirmPassword: yup
        .string()
        .min(3, 'A confirmação da senha precisa ter no mínimo 3 caracteres.')
        .max(20, 'A confirmação da senha precisa ter no máximo 20 caracteres.')
        .oneOf([yup.ref("password")], 'As duas senhas precisam ser iguais.'),
    date: yup
        .date()
        .nullable()
        .transform((curr, orig) => orig === '' ? null : curr)
        .required('O data de nascimento é obrigatória.'),
    city: yup
        .string()
        .min(3, 'O nome da cidade precisa ter no mínimo 3 caracteres.')
        .max(40, 'O nome da cidade precisa ter no máximo 40 caracteres.'),
    cep: yup
        .string()
        .min(9, 'Insira o CEP.')
        .max(9, 'Insira o CEP.'),
    country: yup
        .string()
        .min(3, 'O nome do país precisa ter no mínimo 3 caracteres.')
        .max(40, 'O nome do país precisa ter no máximo 40 caracteres.'),
    state: yup
        .string()
        .min(3, 'O nome do estado precisa ter no mínimo 3 caracteres.')
        .max(40, 'O nome do estado precisa ter no máximo 40 caracteres.'),
}).required();

export { schema };