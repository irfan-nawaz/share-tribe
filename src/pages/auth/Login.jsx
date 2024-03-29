import { useLocation, useNavigate } from 'react-router-dom'
import useLogin from '../../backend/queryHooks/auth/useLogin'
import { Link } from 'react-router-dom'
import './auth.css'
const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { loginMutation } = useLogin()
  loginMutation.isSuccess
    ? navigate(`${location?.state?.from?.pathname || '/'}`, { replace: true })
    : null
  return (
    <>
      <div className="auth">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const userData = {
              username: formData?.get('userName'),
              password: formData?.get('password'),
            }
            loginMutation.mutate(userData)
          }}
        >
          <label>
            <p>Username</p>
            <input type="text" name="userName" required />
          </label>
          <label>
            <p>Password</p>
            <input type="password" name="password" required />
          </label>
          <button>login</button>
        </form>
        <button
          onClick={() => {
            loginMutation.mutate({
              username: 'adarshbalika',
              password: 'adarshBalika123',
            })
          }}
        >
          Guest
        </button>
        <Link to="/signup">new user ? please sign up</Link>
      </div>
    </>
  )
}
export default Login
