export const actions = {
  async updateScreenData({commit}, payload){
    try {
      const url=`http://api.chymes.ru/api/screen/${payload.id}?title=${payload.title}&text=${payload.text}&img=${payload.img}`
      let resultdata = await this.$axios.put(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async updateContact({commit}, payload){
    try {
      const url=`http://api.chymes.ru/api/contacts/${payload.id}?address=${payload.address}&email=${payload.email}&site=${payload.site}&whatsapp=${payload.whatsapp}`
      const resultdata = await this.$axios.put(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async updateList2Data({commit}, payload){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen2/${payload.id}?text=${payload.text}`
      let resultdata = await this.$axios.put(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async updateList3Data({commit}, payload){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen3/${payload.id}?title=${payload.title}&text=${payload.text}`
      let resultdata = await this.$axios.put(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async updateList4Data({commit}, payload){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen4/${payload.id}?text=${payload.text}`
      let resultdata = await this.$axios.put(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  }
}
