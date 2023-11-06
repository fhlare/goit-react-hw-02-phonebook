
import { ContactCard } from "components/ContactCard/ContactCard"

export const ContactList = ({items, deleteContact}) => {
  return (
    <ul>
      {items.map(item =>
      (
        <li key={item.id}>
          <ContactCard contact={item} onDelete={deleteContact} />
        </li>
        ))}
    </ul>
    
  )
}