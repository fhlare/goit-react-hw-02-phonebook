

export const ContactCard = ({ contact:{name, number} }) => {
  return (
    <>
    <p>
      {name}
      <span>
        {number}
      </span>
      </p>
      <button>Delete</button>
    </>
  )
}