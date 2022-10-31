import { AxiosError } from 'axios';
import Notification from 'ui-kit/Notification';
import {
    Forbidden,
    NotFound,
} from 'constants/responseCodes';

interface IApiErrorHandler {
    (errorType: ErrorType, httpCode: number): boolean;
}

export enum ErrorType {
    PermissionDenied = 'PermissionDenied',
    FieldModificationIsNotAllowed = 'FieldModificationIsNotAllowed',
    SessionExpired = 'SessionExpired',
    MaxFailedAttemptsExceeded = 'MaxFailedAttemptsExceeded',
    BadLink = 'BadLink',
}

const generalMessages = {
    [Forbidden]: 'Доступ запрещён.',
    [NotFound]: 'Ресурс не найден.',
    default: 'При обработке Вашего запроса произошла ошибка.',
};

export const tryHandleApiError = (
    httpCode: number,
    message?: string
): boolean => {
    switch (httpCode) {
        case Forbidden:
        case NotFound:
            Notification.error({ message: generalMessages[httpCode] });
            break;

        default:
            Notification.error({
                message: message || generalMessages.default,
            });
            break;
    }

    return true;
};

export const tryHandleNewApiError = (
    httpCode: number,
    data: { message?: string },
    message = generalMessages.default
): boolean => {
    /* eslint-disable no-console */
    console.log(httpCode, data, message);
    //ToDo обработать ошибки API
    return false;
};

export const handleApiError = (
    error: AxiosError<ErrorType>,
    errorHandler?: IApiErrorHandler,
    message?: string,
    isNew = false
): void => {
    if (!error.isAxiosError || !error.response) {
        throw error;
    }

    const { status, data } = error.response;
    if (errorHandler && errorHandler(data, status)) {
        return;
    }

    if (
        isNew &&
        tryHandleNewApiError(status, data as { message?: string }, message)
    ) {
        return;
    }

    if (!tryHandleApiError(status, message)) {
        throw error;
    }
};
