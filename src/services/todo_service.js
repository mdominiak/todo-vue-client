import axios from 'axios'

const host = process.env.VUE_APP_TODO_API_HOST

function getUrl(path) {
  return `${host}${path}`
}

function errorHandler(msg) {
  return function(error) {
    console.log(msg, error)
    alert(`${msg}: ${error}`)
  }
}

function getTodos() {
  return axios
    .get(getUrl('/api/todos'))
    .then((response) => response.data)
    .catch(errorHandler('Failed to load todos'))
}

export default {
  getTodos,
}
