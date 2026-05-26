import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "/api",

  headers: {
    "Content-Type":
      "application/json",
  },
});

/* =========================================
   AUTH TOKEN
========================================= */

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) =>
    Promise.reject(error)
);

/* =========================================
   RESPONSE ERROR
========================================= */

api.interceptors.response.use(
  (response) => response,

  (error) => {
    console.error(
      "API ERROR:",
      error?.response ||
        error
    );

    return Promise.reject(
      error
    );
  }
);

export default api;