import React from "react"
import Nav from "../components/Nav"
import Payment from "../components/Payment"

console.log("if this does")
const n = [2, 5, 7, 11]
console.log(n)

export default function Notes() {
  return (
    <>
      <div className="flex flex-row">
        {/* Figue out the best solution for creating notes that save after user season (tied into the user account )
        when user logs in the notes they commited to the project should remain  */}
        <Nav />
        <div className="text-center">
          😏
          <h2 className="text-2xl">Notes</h2>
        </div>
        <Payment />
      </div>
    </>
  )
}
