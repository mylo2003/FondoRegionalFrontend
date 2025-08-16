import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:8080/fondo-regional',
  headers: {
    'Content-Type': 'application/json'
  }
});