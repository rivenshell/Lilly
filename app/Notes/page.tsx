import React from "react"
import Nav from "../components/Nav"

console.log("if this does")

export default function Notes() {
  return (
    <>
      {/* Figue out the best solution for creating notes that save after user season (tied into the user account )
        when user logs in the notes they commited to the project should remain  */}
      <Nav />
      <div className="text-center">
        😏
        <h2 className="text-2xl">Notes</h2>
      </div>
    </>
  )
}
