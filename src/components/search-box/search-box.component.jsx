import './search-box.styles.css';

export const SearchBox = ({ placeholder , handleChange}) => (
  <input className='search' type='search' placerholder={placeholder} onChange={handleChange}/>
)