export const Todoitem = ({Todo, handleStatus}) => {
    return <div>
        <div>id:{Todo.id}</div>
        {Todo.title} - {Todo.status ? "Done" : "Not Done"}
    <button onClick={() => handleStatus(Todo.id)}>Delete</button>
    </div>
}