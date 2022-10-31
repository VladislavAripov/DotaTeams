import { DateTime } from 'utils/dateTime';

// see for details: https://habr.com/ru/post/446768/ (or https://github.com/Microsoft/TypeScript/issues/202)
export type Guid = string & { _type: 'Guid' };

export interface IStringBag<TValue> {
    [key: string]: TValue;
}

export enum SortDirection {
    Asc = 'Asc',
    Desc = 'Desc',
}

export interface ISorter<T> {
    sortFields: { [key in keyof T]?: SortDirection };
}

export interface IPaging {
    pageNum: number;
    pageSize: number;
}

export interface ErrorFile extends File {
    message: string;
}

export type SortOrder = 'ascend' | 'descend' | false;

export type nullDateTime = DateTime | null;
export type nullDate = Date | string | null;
export type nullGuid = Guid | null;
export type nullString = string | null;
export type nullNumber = number | null;
export type nullBoolean = boolean | null;

export interface Image {
    url: string;
    preview?: string;
}
