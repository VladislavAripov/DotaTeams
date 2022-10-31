import { ReactNode } from 'react';
import classnames from 'classnames';

/* eslint-disable */
interface IOpenArgs {
    type: 'success' | 'warning' | 'error';
}

interface ISuccessArgs extends Omit<Omit<IOpenArgs, 'type'>, 'message'> {
    type?: 'success';
    message?: ReactNode;
}

interface IWarningArgs extends Omit<Omit<IOpenArgs, 'type'>, 'message'> {
    type?: 'warning';
    message: ReactNode;
}

interface IErrorArgs extends Omit<Omit<IOpenArgs, 'type'>, 'message'> {
    type?: 'error';
    message?: ReactNode;
}

interface ICloseArgs {
    key: string;
}

// @ts-ignore
const open = ({ type, className, ...tail }: IOpenArgs) => {
    className = classnames('Notification', `Notification_${type}`, className);
    //Провести сюда уведомления
    // @ts-ignore
    notification.open({
        className,
        closeIcon: <button className="Notification-CloseButton" />,
        ...tail,
    });
};

const success = (props: ISuccessArgs) =>
    open({
        type: 'success',
        message: 'Запрос выполнен успешно',
        ...props,
    });

const warning = (props: IWarningArgs) =>
    open({
        type: 'warning',
        ...props,
    });

const error = (props: IErrorArgs) =>
    open({
        type: 'error',
        message: 'При обработке вашего запроса произошла ошибка',
        ...props,
    });

//Провести сюда уведомления
const close = ({ key }: ICloseArgs) => key;

export default { open, success, warning, error, close } as const;
