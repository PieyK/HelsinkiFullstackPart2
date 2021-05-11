import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

async function getAll(){
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

async function create(newObject){
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
}

async function toDelete(id){
  const request = axios.delete(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

async function update(id, newObject){
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  const response = await request
  return response.data
}
export default { getAll, create, toDelete, update }