import api from "../../lib/api"

const Home = () => {
  return (
    <div>
      Home
      <button onClick={() => api.logout()}>Logout</button>
    </div>
  )
}

export default Home