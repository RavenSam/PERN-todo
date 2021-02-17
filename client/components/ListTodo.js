import { useEffect } from "react"
import EditTodo from "./EditTodo"

export default function ListTodo({ todos, setTodos }) {
   const getTodos = async () => {
      try {
         const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/todos`)

         const jsonData = await response.json()
         setTodos(jsonData)
      } catch (err) {
         console.error(err)
      }
   }

   const handleDelete = async (id) => {
      try {
         const deleteTodo = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/todos/${id}`, {
            method: "DELETE",
         })

         setTodos(todos.filter((todo) => todo.todo_id !== id))
      } catch (err) {
         console.error(err.message)
      }
   }

   useEffect(() => getTodos(), [])

   return (
      <>
         <table className="table mt-5">
            <thead className="table-dark">
               <tr>
                  <th scope="col" className="col-8">
                     Description
                  </th>
                  <th scope="col" className="col-1">
                     Edit
                  </th>
                  <th scope="col" className="col-1">
                     Delete
                  </th>
               </tr>
            </thead>
            <tbody>
               {todos.map((todo) => (
                  <tr key={todo.todo_id}>
                     <th scope="row">{todo.description}</th>
                     <td>
                        <EditTodo id={todo.todo_id} todo={todo} setTodos={setTodos} />
                     </td>
                     <td>
                        <button onClick={() => handleDelete(todo.todo_id)} className="btn btn-danger">
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   )
}
