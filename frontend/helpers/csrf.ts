import http from "./http";

const csrf = () => http.get('/sanctum/csrf-cookie');

export default csrf;