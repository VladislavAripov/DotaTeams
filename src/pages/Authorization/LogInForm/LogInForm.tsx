import React from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';
import './LoginForm.less';
import {
    confirmPasswordField,
    emailRequiredFiled,
} from 'utils/antdValidationRules';

interface ILogInFormValues {
    login: string;
    password: string;
}

const LogInForm: React.FC = () => {
    const onFinish = (values: ILogInFormValues) => {
        // eslint-disable-next-line
        console.log(JSON.stringify(values));
    };

    return (
        <div className={'LoginForm'}>
            <Form<ILogInFormValues>
                className={'login-form'}
                onFinish={onFinish}
            >
                <Form.Item
                    name={'login'}
                    rules={emailRequiredFiled(true)}
                >
                    <Input className={'input'} placeholder={'Логин'} />
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={confirmPasswordField}
                >
                    <Input className={'input'} type={'password'} placeholder={'Пароль'} />
                </Form.Item>
                <Form.Item className={'submit-button'}>
                    <Button htmlType={'submit'}>Войти</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LogInForm;
