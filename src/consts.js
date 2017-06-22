export default {
  BASE_URL: process.env.NODE_ENV === 'production' ?
  'https://integer-as-a-service.herokuapp.com' :
  'http://localhost:9000'
}