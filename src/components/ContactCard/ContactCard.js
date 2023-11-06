

export const ContactCard =
  ({ contact: { id, name, number },
    onDelete,
  }) => {
  return (
    <>
    <p>
      {name}
      <span>
        {number}
      </span>
      </p>
      <button onClick={()=> onDelete(id)}>Delete</button>
    </>
  )
}