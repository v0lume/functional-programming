import { Search, Sort } from "../components";
import { SORT_ASC } from "../consts";

interface PrepareDataProps {
    data: Row[];
    filter: Filter;
    search?: Search;
    sort?: Sort;
}

const hasPassFilterNoPosts = (row: Row, noPosts: boolean): boolean => noPosts && !row.posts;
const hasPassFilterMore100Posts = (row: Row, more100Posts: boolean): boolean => more100Posts && row.posts > 100;
const hasPassFilter = (row: Row, filter: Filter, search: Search): boolean => hasPassFilterNoPosts(row, filter.noPosts) || hasPassFilterMore100Posts(row, filter.more100Posts);

const hasPassSearch = (row: Row, search: string): boolean => !!search && row.username.toUpperCase().includes(search.toUpperCase());

const hasNoConditions = (filter: Filter, search: Search): boolean => !filter.noPosts && !filter.more100Posts && search === '';

const sortRows = (rows: Row[], sort: Sort): Row[] => rows.sort((a: Row, b: Row) => sort === SORT_ASC ? a.lastPayments - b.lastPayments : b.lastPayments - a.lastPayments);

export const prepareData = (props: PrepareDataProps): Row[] => {
    const { data = [], filter, search, sort } = props;

    let rows = data.filter((row: Row) => hasPassFilter(row, filter, search) || hasPassSearch(row, search) || hasNoConditions(filter, search));

    if (sort) {
        rows = sortRows(rows, sort);
    }

    return rows;
};
