import { useState } from "react"

export default function TodoInput({ setTodos, todos }) {
   const [description, setDescription] = useState("")

   const handleChange = (e) => setDescription(e.target.value)

   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const body = { description }

         const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/todos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
         })

         const jsonData = await response.json()

         setTodos([...todos, jsonData])

         setDescription("")
      } catch (err) {
         console.error(err)
      }
   }

   return (
      <>
         <h1 className="text-center mt-5">Todo List</h1>

         <form className="input-group mt-5 " onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={description} onChange={handleChange} />
            <button className="btn btn-outline-success ">Add</button>
         </form>
      </>
   )
}
