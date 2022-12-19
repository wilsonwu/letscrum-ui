import axios from 'axios'
const version = '/v1'

export interface UserState {
  loading: boolean
  error: any
  id: string | null
  name: string | null
  email: string | null
  password: string | null
  inSuperAdmin: boolean
  token: {
    accessToken: string | null
  }
}
export interface SignInProps {
  inputName: string | null
  inputPwd: string | null
}

export const postSignIn = async (params: SignInProps): Promise<UserState> => {
  try {
    const response = await axios.post(version + '/signin', {
      name: params.inputName,
      password: params.inputPwd
    })
    return response.data.item
  } catch (e: any) {
    return e.message
  }
}
