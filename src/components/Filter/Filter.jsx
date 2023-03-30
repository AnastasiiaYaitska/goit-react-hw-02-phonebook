import { nanoid } from 'nanoid';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();

  return (
    <>
      <FilterLabel htmlFor={filterInputId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={filterInputId}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
