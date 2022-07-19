import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from './Sort.module.scss'
import { buildTimeValue } from '@testing-library/user-event/dist/utils';

// interface SortProps {
//   store?: {};
//   updateStore?: (val) => void;
// }

// OR

interface SortProps {
 selected?: string;
 updateSelected?: (val) => void;
}

// OR store can be global

export function Sort(props: SortProps) {
  const { selected, updateSelected } = props;

  const handleChange = (value) => {
    console.log(value); // for debugging
    updateSelected(value);
  };

  return (
    <FormControl className={styles.control} component="fieldset">
      <FormLabel className={styles.label}>
        Sort by payments
      </FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label="sorting"
        name="radio-buttons-group"
        value={selected}
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel value="desc" control={<Radio />} label="desc" />
        <FormControlLabel value="asc" control={<Radio />} label="asc" />
      </RadioGroup>
    </FormControl>
  );
}
