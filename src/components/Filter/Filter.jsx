import "./Filter.css";

function Filter({ value, onChange }) {
  return (
    <label className="label">
      <p className="text">Find contacts by name</p>
      <input type="text" className="input" value={value} onChange={onChange}></input>
    </label>
  );
}

export default Filter;
