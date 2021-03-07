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

function fetchTodos() {
  return axios
    .get(getUrl('/api/todos'))
    .then((response) => response.data)
    .catch(errorHandler('Failed to load todos'))
}

function createTodo(name) {
  return axios
    .post(getUrl('/api/todos'), { name })
    .then((response) => response.data)
    .catch(errorHandler('Failed to create todo'))
}

function updateTodo(todo) {
  const { id, ...props } = todo
  return axios
    .patch(getUrl(`/api/todos/${id}`), props)
    .then((response) => response.data)
    .catch(errorHandler('Failed to update todo'))
}

function deleteCompletedTodos() {
  return axios
    .delete(getUrl('/api/todos/completed'))
    .then((response) => response.data)
    .catch(errorHandler('Failed to delete completed todos'))
}

export default {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteCompletedTodos,
}
