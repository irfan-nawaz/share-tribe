import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateUserData = () => {
  const { authData } = useAuth()
  const mutateUserApi = async (userData) => {
    const res = await axios.post(
      `/api/users/edit`,
      {
        ...userData,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    console.log(res.data)
    return res.data
  }
  const userDataMutation = useMutation(mutateUserApi)
  return { userDataMutation }
}

export default useMutateUserData
