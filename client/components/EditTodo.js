import { useState } from "react"

const EditTodo = ({ id, setTodos, todo }) => {
   const [description, setDescription] = useState(todo.description)

   const handleChange = (e) => setDescription(e.target.value)

   const handleEdit = async () => {
      try {
         const body = { description }

         const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
         })

         const jsonData = await response.json()
         console.log(jsonData)
      } catch (err) {
         console.error(err.message)
      }
   }

   return (
      <>
         <button className="btn btn-info" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
            Edit
         </button>

         <div
            className="modal fade"
            id={`id${todo.todo_id}`}
            tabIndex="-1"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
            onClick={() => setDescription(todo.description)}
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="editModalLabel">
                        Edit Todo Description
                     </h5>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setDescription(todo.description)}
                     ></button>
                  </div>
                  <div className="modal-body">
                     <input type="text" className="form-control" value={description} onChange={handleChange} />
                  </div>
                  <div className="modal-footer">
                     <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={() => setDescription(todo.description)}
                     >
                        Close
                     </button>
                     <button type="button" onClick={handleEdit} className="btn btn-info" data-bs-dismiss="modal">
                        Edit
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default EditTodo
