import React from "react"
import Nav from "../components/Nav"
import AppShell from "../components/AppShell"

export default function reflection() {
  return (
    <>
      {/* same concep as the notes app with user based contribution that tesets upon login. 
          Primary page will be a login page. I can buid a site by reading docs. im not a big  */}
      <Nav />
      <div className="text-center text-lg">
        <h2>Reflection</h2>
        <AppShell />
      </div>
    </>
  )
}
