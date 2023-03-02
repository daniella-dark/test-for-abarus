export type TSortItem = {
    name: string;
    sortProperty: string;
}

export interface IFilterSliceState {
    sortType: string;
    searchValue: string;
    activePage: number;
}