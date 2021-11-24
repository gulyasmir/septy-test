export const actions = {
  async sendingData({commit}, payload) {
    try {
      const url = `http://api.chymes.ru/api/orders?email=${payload.email}&name=${payload.name}&text=${payload.text}`

      let resultdata = await this.$axios.post(url)

      console.log('sendingData result', resultdata)
      return resultdata.data
    } catch (e) {
      console.log('sendingData store error')
      throw  e
    }
  }
}
