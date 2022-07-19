import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';

// interface FiltersProps {
//   store?: {};
//   updateStore?: (val) => void;
// }

// OR

interface FiltersProps {
 selectedFilter?: Filter;
 setSelectedFilter?: (val) => void;
}

// OR store can be global

const OPTIONS = [
  {
    name: 'noPosts',
    title: 'Without posts',
  },
  {
    name: 'more100Posts',
    title: 'More than 100 posts',
  },
];

export function Filters(props: FiltersProps) {
  const { selectedFilter = { noPosts: false, more100Posts: false }, setSelectedFilter } = props;

  const onChange = ({ name, title }) => {
    console.log(title); // for debugging

    setSelectedFilter({ ...selectedFilter, [name]: !selectedFilter[name] });
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={selectedFilter[option.name]}
              value={selectedFilter[option.name]}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
