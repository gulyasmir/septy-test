export const actions = {
  async getScreenData(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/screen`
      let resultdata = await this.$axios.get(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async getContactData(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/contacts`
      let resultdata = await this.$axios.get(url)
      return resultdata.data[1]
    } catch(e){
      throw  e
    }
  },
  async getList2Data(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen2`
      let resultdata = await this.$axios.get(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async getList3Data(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen3`
      let resultdata = await this.$axios.get(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async getList4Data(){
    try {
      const url=`https://septy-test-api.herokuapp.com/api/list-screen4`
      let resultdata = await this.$axios.get(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  }
}
