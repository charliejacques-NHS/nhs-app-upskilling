import { Link } from "react-router"
import api from "../../lib/api"
import { ROUTES } from "../../types"

const Home = () => {
  return (
    <div>
      Home
      <Link to={ROUTES.MESSAGES}>Messages</Link>
      <button onClick={() => api.logout()}>Logout</button>
    </div>
  )
}

export default Home