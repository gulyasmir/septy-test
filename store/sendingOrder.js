export const actions = {
  async sendingData({commit}, payload) {
    try {
      const url = `http://api.chymes.ru/api/orders?email=${payload.email}&name=${payload.name}&text=${payload.text}`
      let resultdata = await this.$axios.post(url)
      return resultdata.data
    } catch (e) {
      throw  e
    }
  }
}
