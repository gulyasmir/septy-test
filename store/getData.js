export const actions = {
  async getScreenData(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/screen`

      let resultdata = await this.$axios.get(url)

      console.log('screen1 result', resultdata)
      return resultdata.data
    } catch(e){
      console.log('getClients store error')
      throw  e
    }
  },
  async getContactData(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/contacts`

      let resultdata = await this.$axios.get(url)

      console.log('contacts result', resultdata)
      return resultdata.data[1]
    } catch(e){
      console.log('getClients store error')
      throw  e
    }
  },
  async getList2Data(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen2`

      let resultdata = await this.$axios.get(url)

      console.log('list-screen2 result', resultdata)
      return resultdata.data
    } catch(e){
      console.log('getClients store error')
      throw  e
    }
  },
  async getList3Data(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen3`

      let resultdata = await this.$axios.get(url)

      console.log('list-screen3 result', resultdata)
      return resultdata.data
    } catch(e){
      console.log('getClients store error')
      throw  e
    }
  },
  async getList4Data(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen4`

      let resultdata = await this.$axios.get(url)

      console.log('list-screen4 result', resultdata)
      return resultdata.data
    } catch(e){
      console.log('getClients store error')
      throw  e
    }
  }
}
