import React from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';
import './SignUpForm.less';
import {
    emailOptionalField,
    emailRequiredFiled,
    requiredField,
    setPasswordField,
} from 'utils/antdValidationRules';

interface ISignUpFormValues {
    email: string;
    password: string;
}

const SignUpForm: React.FC = () => {
    const onFinish = (values: ISignUpFormValues) => {
        // eslint-disable-next-line
        console.log(JSON.stringify(values));
    };

    return (
        <div className={'SignUpForm'}>
            <Form<ISignUpFormValues>
                className={'signup-form'}
                onFinish={onFinish}
            >
                <Form.Item
                    name={'email'}
                    rules={[
                        ...emailRequiredFiled(true),
                        ...emailOptionalField,
                    ]}
                >
                    <Input className={'input'} placeholder={'Электронная почта'} />
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={setPasswordField}
                >
                    <Input className={'input'} type={'password'} placeholder={'Придумайте пароль'} />
                </Form.Item>
                <Form.Item
                    name={'confirm-password'}
                    dependencies={['password']}
                    rules={[
                        requiredField,
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('Введенные пароли не совпадают'));
                            },
                        }),
                    ]}
                    status={''}
                >
                    <Input className={'input'} type={'password'} placeholder={'Повторите пароль'} />
                </Form.Item>
                <Form.Item className={'submit-button'}>
                    <Button htmlType={'submit'}>Создать</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUpForm;
