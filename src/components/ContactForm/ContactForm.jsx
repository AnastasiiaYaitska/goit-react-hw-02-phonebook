import { nanoid } from "nanoid";
import { GrPhone, GrUserManager } from "react-icons/gr";
import { Component } from "react";
import { Form, Label, Input, SubmitBtn} from "./ContactForm.styled";


export class ContactsForm extends Component{
  nameInputId = nanoid();
  numberInputId = nanoid();

    state = {
        name: '',
        number: ''
 }
 


  handlerChange = (event) => { 
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({  name: '',
        number: ''})
   };



  render() {
    
      return (
             <Form onSubmit={this.handlerSubmit}>
                <Label htmlFor={this.nameInputId}> Name  <GrUserManager/>  </Label>
                   <Input
                    type="text"
                    name="name"
                    id={this.nameInputId}
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange = {this.handlerChange}
                  />

                  <Label htmlFor=
                {this.numberInputId}>Number <GrPhone/></Label>
      
                  <Input
                  type="tel"
                  name="number"
                  id={this.numberInputId}
                  value={this.state.number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange = {this.handlerChange}
                />
             
                <SubmitBtn type="submit">Add contact</SubmitBtn>
            </Form>
        )
    }
};
