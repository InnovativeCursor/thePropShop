import Select from 'react-select';

function MultipleSelectDropDown({ options, placeholder }) {
  // Check if options already have label and value, otherwise format them
  const formattedOptions = options && options.length > 0 && typeof options[0] === 'object'
    ? options
    : options.map(option => ({ value: option, label: option }));

  return (
    <Select
      options={formattedOptions}
      placeholder={placeholder}
      isMulti 
      isClearable
      isSearchable
    />
  );
}

export default MultipleSelectDropDown;
