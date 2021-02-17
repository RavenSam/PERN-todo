import Head from "next/head"
import { useState } from "react"

import { TodoInput, ListTodo } from "../components"

export default function Home() {
   const [todos, setTodos] = useState([])

   return (
      <>
         <Head>
            <title>Todos App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className="container">
            <TodoInput todos={todos} setTodos={setTodos} />

            <ListTodo setTodos={setTodos} todos={todos} />
         </div>
      </>
   )
}
