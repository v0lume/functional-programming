import { useState, useEffect, useMemo } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

import { dataConverter } from './utils/dataConverter';
import { prepareData } from './utils/prepareData';

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [filter, setFilter] = useState<Filter>({ noPosts: false, more100Posts: false });
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<Sort>(null);

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) =>
        setData(dataConverter(users, accounts, images))
    );
  }, [dataConverter]);

  const rows = useMemo(() => {
    return prepareData({ data, filter, search, sort });
  }, [data, filter, search, sort, prepareData]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters selectedFilter={filter} setSelectedFilter={setFilter} />
            <Sort selected={sort} updateSelected={setSort} />
          </div>

          <Search searchedValue={search} setSearchedValue={setSearch} />
        </div>

        <Table rows={rows} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
