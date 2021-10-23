import React, { Component } from "react";
import shortid from "shortid";
import "./Form.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  addContact = () => {
    const { name, number } = this.state;
    const { onSubmit } = this.props;
    const contactId = shortid.generate();
    const newContact = { name, number, id: contactId };
    onSubmit(newContact);
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  checkContact = () => {
    const { name } = this.state;
    const { contacts } = this.props;
    const checkName = name.toLocaleLowerCase();
    contacts.find(contact =>
      contact.name.toLocaleLowerCase() === checkName)
      ? alert(`${name} is already in contacts`)
      : this.addContact();
  };

  onSubmit = (elem) => {
    elem.preventDefault();
    this.reset();
    this.checkContact();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label className="label" htmlFor={this.nameInputId}>
          <p className="text">Name</p>
          <input
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.onChange}
            id={shortid.generate()}
          ></input>
        </label>
        <label className="label" htmlFor={this.numberInputId}>
          <p className="text">Number</p>
          <input
            className="input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.onChange}
            id={shortid.generate()}
          />
        </label>
        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
