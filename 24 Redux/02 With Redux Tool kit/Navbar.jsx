import { useSelector, useDispatch } from "react-redux"

const Navbar = () => {
  const count = useSelector( (state) => state.counter.value)
  return (
    <div>
      Counter in Navbar Component :: {count}
    </div>
  )
}

export default Navbar
