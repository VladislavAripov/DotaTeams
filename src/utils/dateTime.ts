import moment from 'moment-timezone';
import {
    MoscowTZ,
    DEFAULT_DATE_FORMAT,
    FRIENDLY_DATE_FORMAT,
    FRIENDLY_DATE_FORMAT_WITH_YEAR,
    DEFAULT_TIME_FORMAT,
    MONTH_NAME_ONLY_FORMAT,
    FULL_MONTH_WITH_YEAR_FORMAT,
    YEAR_ONLY_FORMAT,
    MONTH_NUMBER_FORMAT,
} from 'constants/dateTime';

// Из-за тестирования нельзя вызывать внутри этого модуля функцию `now()` напрямую, поэтому сделана обёртка
const getNow = () => defaultExport.now();

export enum DayOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

export type UnixTime = number & { _type: 'UnixTime' };

export type DateTime = string | Date | moment.Moment;

export const getMinDate = (): moment.Moment => moment('01-01-1900', DEFAULT_DATE_FORMAT);

export const addDays = (date: DateTime, days: number): DateTime =>
    moment.utc(date).add(days, 'd');

export const addYears = (date: DateTime, years: number): DateTime =>
    moment.utc(date).add(years, 'year');

export const getDayOfMonth = (date: DateTime): number =>
    moment.utc(date).date();

export const getDayOfWeek = (date: DateTime): DayOfWeek => {
    const dateString = date.toString();
    return moment.utc(dateString).day();
};

export const getOnlyDate = (date: DateTime): DateTime =>
    moment.utc(date).startOf('day');

export const now = () => moment.utc();

export const isBeforeToday = (date: DateTime) =>
    moment.utc(date).isBefore(getNow());

export const isSameOrBeforeToday = (date: DateTime) =>
    moment.utc(date).isSameOrBefore(getNow());

export const isAfterToday = (date: DateTime) =>
    moment.utc(date).isAfter(getNow());

export const isAfter = (date1: DateTime, date2: DateTime) =>
    moment.utc(date1).isAfter(date2);

export const isSameOrAfterToday = (date: DateTime) =>
    moment.utc(date).isSameOrAfter(getNow());

export const isSameDay = (date1: DateTime, date2: DateTime) =>
    moment.utc(date1).isSame(moment.utc(date2), 'day');

export const isToday = (date: DateTime) => isSameDay(getNow(), date);

export const isTomorrow = (date: DateTime) =>
    isSameDay(getNow(), moment.utc(date).subtract(1, 'day'));

export const isYesterday = (date: DateTime) =>
    isSameDay(getNow(), moment.utc(date).add(1, 'day'));

export const month = (date: DateTime) =>
    moment.utc(date, 'YYYY/MM/DD').format('M');

export const isDayBeforeYesterday = (date: DateTime) =>
    isSameDay(getNow(), moment.utc(date).add(2, 'day'));

export const isCurrentYear = (date: DateTime) =>
    moment.utc(getNow()).isSame(moment.utc(date), 'year');

export const isSameMonth = (date1: DateTime, date2: DateTime, toMsk = false) => {
    const zonedDate = toMsk ? moment.utc(date1).tz(MoscowTZ) : moment.utc(date1);
    return zonedDate.isSame(date2, 'month');
};

export const isSeveralMonthsDateRange = (date1: DateTime, date2: DateTime) => {
    date1 = moment.utc(date1);
    date2 = moment.utc(date2);

    if (date1.isAfter(date2)) {
        const temp = date1;
        date1 = date2;
        date2 = temp;
    }

    return (
        !date1.isSame(date2, 'month') &&
        date1.date() === 1 &&
        date2.date() === date2.daysInMonth()
    );
};

export const currentUnixTime = () => Date.now() as UnixTime;

export const firstDayOfMonth = (date: DateTime): DateTime =>
    moment.utc(date).set('date', 1);

export const formatDate = (dateTime: DateTime, format = DEFAULT_DATE_FORMAT) =>
    moment.utc(dateTime).tz(MoscowTZ).format(format);

export const getDateFullRu = (date: Date | string) =>
{
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const val = new Date(date);
    return val.toLocaleDateString('ru-RU', options as Intl.DateTimeFormatOptions);
};

export const getMonthAndYear = (date: Date) =>
{
    return moment.utc(date).format('MM.YYYY');
};

export const getMonthName = (month: number) => moment.months(month - 1);

export const getPreviousMonthNumber = (month: number) =>
    month === 1 ? 12 : month - 1;

export const formatDateFriendly = (
    dateTime: DateTime,
    formatNearestDateAsString = true
) => {
    dateTime = moment.utc(dateTime);
    if (formatNearestDateAsString) {
        if (isToday(dateTime)) {
            return 'Сегодня';
        } else if (isYesterday(dateTime)) {
            return 'Вчера';
        } else if (isDayBeforeYesterday(dateTime)) {
            return 'Позавчера';
        } else if (isTomorrow(dateTime)) {
            return 'Завтра';
        }
    }

    return formatDate(
        dateTime,
        isCurrentYear(dateTime)
            ? FRIENDLY_DATE_FORMAT
            : FRIENDLY_DATE_FORMAT_WITH_YEAR
    );
};

export const formatMonthAndYearFriendly = (dateTime: DateTime) =>
    formatDate(
        dateTime,
        isCurrentYear(dateTime)
            ? MONTH_NAME_ONLY_FORMAT
            : FULL_MONTH_WITH_YEAR_FORMAT
    );

export const formatMonthAndYear = (dateTime: DateTime) =>
    formatDate(dateTime, FULL_MONTH_WITH_YEAR_FORMAT);

export const formatMonthAndYearFull = (dateTime: DateTime) =>
    formatDate(dateTime, FULL_MONTH_WITH_YEAR_FORMAT);

export const formatDateTimeFriendly = (dateTime: DateTime): string =>
    isCurrentYear(dateTime)
        ? `${formatDateFriendly(dateTime)} в ${formatDate(
            dateTime,
            DEFAULT_TIME_FORMAT
        )}`
        : formatDateFriendly(dateTime);

export const formatTime = (dateTime: DateTime, format = DEFAULT_TIME_FORMAT) =>
    formatDate(dateTime, format);

export const toUnixTime = (dateTime: DateTime) => moment(dateTime).valueOf();

export const diff = (
    from: DateTime,
    to: DateTime,
    unit: moment.unitOfTime.Diff
) => moment.utc(from).diff(moment.utc(to), unit);

export const diffFromCurrentDate = (
    date: DateTime,
    unit: moment.unitOfTime.Diff
) => diff(getNow(), date, unit);

export const formatDateRangeInMonthsFriendly = (
    from: DateTime,
    to: DateTime
) => {
    if (isToday(to)) {
        switch (diff(from, to, 'month')) {
            case -1:
                return 'За 1 месяц';
            case -2:
                return 'За 2 месяца';
            case -3:
                return 'За 3 месяца';
            case -12:
                return 'За год';
        }
    }

    return `с ${formatDate(from)} по ${formatDate(to)}`;
};

export const getYear = (date: DateTime): number => {
    return +formatDate(date, YEAR_ONLY_FORMAT);
};

export const getMonthNumber = (date: DateTime): number => {
    return +formatDate(date, MONTH_NUMBER_FORMAT);
};

export const lastDayOfMonth = (date: DateTime) => moment.utc(date).endOf('month');

const defaultExport = {
    getMinDate,
    addDays,
    addYears,
    getDayOfMonth,
    getOnlyDate,
    getDayOfWeek,
    now,
    isSameDay,
    isToday,
    isTomorrow,
    isYesterday,
    isDayBeforeYesterday,
    isCurrentYear,
    isBeforeToday,
    isAfterToday,
    isAfter,
    isSameMonth,
    isSeveralMonthsDateRange,
    isSameOrBeforeToday,
    isSameOrAfterToday,
    currentUnixTime,
    firstDayOfMonth,
    lastDayOfMonth,
    formatDate,
    formatDateFriendly,
    formatMonthAndYearFriendly,
    formatDateTimeFriendly,
    formatMonthAndYear,
    formatDateRangeInMonthsFriendly,
    formatTime,
    toUnixTime,
    diff,
    getMonthName,
    diffFromCurrentDate,
    getPreviousMonthNumber,
    getYear,
    month,
    getMonthNumber,
};
export default defaultExport;
