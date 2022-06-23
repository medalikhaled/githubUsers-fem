/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { Input } from '@mantine/core';
// import { At } from 'tabler-icons-react';

const SearchBar = ({ username, setUsername }) => {
  const onChange = (e) => {
    setUsername(e.target.value);
  };
  const icon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-3 w-3'
      style={{
        width: '20px',
        height: '20px',
      }}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
    >
      <path d='M12 14l9-5-9-5-9 5 9 5z' />
      <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
      />
    </svg>
  );

  return (
    <Fragment>
      <Input
        icon={icon}
        variant='filled'
        id='searchBar'
        placeholder='Search Github Username'
        radius='md'
        size='md'
        value={username}
        onChange={(event) => {
          onChange(event);
        }}
        onKeyUp={(event) => {
          onChange(event);
        }}
        onPaste={(event) => {
          onChange(event);
        }}
      />
    </Fragment>
  );
};

export default SearchBar;
