import React from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';
import './LoginForm.less';

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
                layout={'horizontal'}
                onFinish={onFinish}
            >
                <Form.Item valuePropName={'login'}>
                    <Input placeholder={'Логин'} />
                </Form.Item>
                <Form.Item valuePropName={'password'}>
                    <Input type={'password'} placeholder={'Пароль'} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'}>Войти</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LogInForm;
