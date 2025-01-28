import { Link } from "react-router"
import api from "../../lib/api"
import { ROUTES } from "../../types"
import { useUserInfo } from "../../hooks"

const Home = () => {
  const { userInfo, loading } = useUserInfo()

  if (loading)
    return <div>Loading...</div>;

  return (
    <div>
      Home
      {userInfo?.first_name}
      <Link to={ROUTES.MESSAGES}>Messages</Link>
      <button onClick={() => api.logout()}>Logout</button>
    </div>
  )
}

export default Home