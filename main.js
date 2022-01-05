const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  axios.get(`${BASE_URL}/constellations`).then(resp => console.log(resp.data)).catch(error=>console.log(error))
}

function create(body) {
  axios.post(`${BASE_URL}/constellations`, body).then(response => console.log(response.data)).catch(err => console.log(err))
}

function show(id) {
  axios.get(`${BASE_URL}/constellations/${id}`).then(result => console.log(result.data)).catch(err => console.log(err))
}

function update(id, body) {
  axios.put(`${BASE_URL}/constellations/${id}`, body).then(result => {
    id = body;
    console.log(result.data)
  }).catch(err => console.log(err))
}

function destroy(id) {
  axios.delete(`${BASE_URL}/constellations/${id}`).then(result => console.log(result.data)).catch(err => console.log(err))
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
