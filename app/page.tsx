import Nav from "./components/Nav"
import Calender from "./components/Calender"

export default function Home() {
  return (
    <>
      <div className="flex">
        <Nav />
        <Calender />
      </div>
    </>
  )
}
