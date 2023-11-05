import axios from "axios";

const BASE_URL = "http://localhost:4000/v1/"

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmU4N2IxMzc4OGZiZmRmYTEyYTczMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTE4NzQ1MCwiZXhwIjoxNjk5NDQ2NjUwfQ.Q1WbfG6PrKsEDaThyYkgHZXTK43s5O7-ILT-AbZE5x8'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseUrl: BASE_URL,
  headers: {token: `Bearer ${TOKEN}`}
})