import { PHONE_ITU_FORMAT } from 'constants/phone';

export const normalizePhoneNumber = (phone: string) => phone.replace(/[^\d]/g, '');

export const formatPhoneNumber = (phone: string, format: string = PHONE_ITU_FORMAT) =>
    phone.replace(/^\+{0,1}\d([\d*]{3})([\d*]{3})([\d*]{2})([\d*]{2})$/, format);
