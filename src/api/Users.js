import {post} from 'axios'

export default {
  async login(email, pass) {
    try {
      let {data} = await post('ttp://localhost:30004/auth/login', {
        email, pass
      })
      return data
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
