import css from './Filter.module.css';

function Filter({ onChange }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.filter} type="text" onChange={onChange} />
    </label>
  );
}
export default Filter;
