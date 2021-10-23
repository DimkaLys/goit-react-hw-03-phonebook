import './Contacts.css';

function Contacts({ contacts, deleteContacts }){
  return (
    <ul className="list">
      {contacts.map(({ id, name, number }) => (
        <li className="listItem" key={id}>
          {name}: {number}
          <button className='btn' onClick={() => deleteContacts(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;