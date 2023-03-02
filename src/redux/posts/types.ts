export interface IPostItem {
    id: number,
    title: string,
    body: string,
    [key: string]: any
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface IPostsSliceState {
    items: IPostItem[];
    status: Status;
}