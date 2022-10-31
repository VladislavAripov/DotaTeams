import moment from 'moment-timezone';

moment.tz.setDefault('Europe/Moscow');
moment.locale('ru');

moment.fn.toJSON = function() {
    return this.utcOffset(0, true).toISOString();
};
