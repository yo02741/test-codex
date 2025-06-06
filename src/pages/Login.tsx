import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username && password) {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-6 bg-white p-8 rounded shadow"
      >
        <h1 className="text-2xl font-semibold text-center">Welcome back</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded border border-gray-300 p-2 focus:border-black focus:outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-gray-300 p-2 focus:border-black focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-black py-2 font-medium text-white hover:bg-gray-800"
        >
          Continue
        </button>
      </form>
    </div>
  )
}

export default Login

