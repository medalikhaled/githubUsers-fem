/* eslint-disable react/prop-types */
import './index.css';
const Header = ({ bkg, setbkg }) => {
  return (
    <div className='header'>
      <label>
        Background Color:{' '}
        <select
          value={bkg}
          onChange={(event) => {
            event.preventDefault();
            setbkg(event.target.value);
          }}
          onBlur={(event) => {
            event.preventDefault();
            event.target.value = bkg;
          }}
        >
          <option value='white'>white</option>
          <option value='black'>black</option>
          <option value={'lightblue'}>lightblue</option>
          <option value={'yellow'}>Yellow</option>
          <option value={'orange'}>Orange</option>
          <option value={'pink'}>Pink</option>
          <option value={'brown'}>Brown </option>
        </select>
      </label>
    </div>
  );
};

export default Header;
