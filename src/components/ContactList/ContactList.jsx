import { ListContact, BtnDelete, Contact } from './ContactList.styled';

export const Contacts = ({ Contacts, deleteContact }) => {
  return (
    <ListContact>
      {Contacts.map(({ name, id, number }) => {
        return (
          <Contact key={id}>
            <span>
              {name} : {number}
            </span>
            <BtnDelete type="button" onClick={() => deleteContact(id)}>
              Delete
            </BtnDelete>
          </Contact>
        );
      })}
    </ListContact>
  );
};
