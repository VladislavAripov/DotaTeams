import React from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';
import './SignUpForm.scss';

interface ISignUpFormValues {
    login: string;
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
                layout={'horizontal'}
                onFinish={onFinish}
            >
                <Form.Item valuePropName={'login'}>
                    <Input placeholder={'Логин'} />
                </Form.Item>
                <Form.Item valuePropName={'password'}>
                    <Input type={'password'} placeholder={'Пароль'} />
                </Form.Item>
                <Form.Item valuePropName={'password'}>
                    <Input type={'password'} placeholder={'Пароль'} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'} className={'login-button'}>Создать</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUpForm;
