export const actions = {
  async getScreenData(){
    try {
      const url=`http://api.chymes.ru/api/screen`
      let resultdata = await this.$axios.get(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async getContactData(){
    try {
      const url=`http://api.chymes.ru/api/contacts`
      let resultdata = await this.$axios.get(url)
      return resultdata.data[0]
    } catch(e){
      throw  e
    }
  },
  async getList2Data(){
    try {
      const url=`http://api.chymes.ru/api/list-screen2`
      let resultdata = await this.$axios.get(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async getList3Data(){
    try {
      const url=`http://api.chymes.ru/api/list-screen3`
      let resultdata = await this.$axios.get(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  },
  async getList4Data(){
    try {
      const url=`http://api.chymes.ru/api/list-screen4`
      let resultdata = await this.$axios.get(url)
      return resultdata.data
    } catch(e){
      throw  e
    }
  }
}
