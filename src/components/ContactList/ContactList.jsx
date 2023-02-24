export const Contacts = ({Contacts, deleteContact}) => { 
    return (
        
       
            <ul>
            {
                Contacts.map(({ name, id, number }) => {
                    return (
                        <li key={id}>
                            <span>{name} : {number}</span>
                            <button type="button"
                            onClick={()=>deleteContact(id)}>Delete</button>
                        </li>
                    )
                })
                }
            </ul>
        
    )
};