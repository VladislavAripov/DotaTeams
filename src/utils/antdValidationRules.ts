import { Rule } from 'antd/lib/form';

export const requiredField: Rule = {
    required: true,
    message: 'Поле обязательно к заполнению',
};

export const maxLengthField: (max: number) => Rule = (max) => ({
    max,
    message: `Поле не может быть длинее ${max} символов`,
});

export const emailRequiredFiled: (onSubmitOnly: boolean) => Rule[] = (onSubmitOnly) => [
    requiredField,
    maxLengthField(40),
    {
        pattern: new RegExp('^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[A-Za-z]+$'),
        message: 'Электронный адрес должен быть типа a@a.a',
        validateTrigger: onSubmitOnly ? 'submit' : '',
    },
];

export const emailOptionalField: Rule[] = [
    maxLengthField(40),
    {
        pattern: new RegExp('^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[A-Za-z]+$'),
        message: 'Электронный адрес должен быть типа a@a.a',
        warningOnly: true,
    },
];

export const confirmPasswordField: Rule[] = [
    requiredField,
    {
        min: 8,
        message: 'Пароль не может быть короче 8 символов',
        validateTrigger: 'submit',
    },
];

export const setPasswordField: Rule[] = [
    ...confirmPasswordField,
    {
        pattern: RegExp('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{8,}'),
        message: 'Ненадежный пароль. Добавьте латинские буквы, цифры и специальные символы',
        warningOnly: true,
    },
];
