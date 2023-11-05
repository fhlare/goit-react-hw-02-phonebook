import { nanoid } from "nanoid"
import { ContactCard } from "components/ContactCard/ContactCard"

export const ContactList = ({items}) => {
  return (
    <ul>
      {items.map(item =>
      (
        <li key={nanoid()}>
          <ContactCard contact={item} />
        </li>
        ))}
    </ul>
    
  )
}