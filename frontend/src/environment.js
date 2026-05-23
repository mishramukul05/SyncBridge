const isProd = import.meta.env.MODE === "production";
const server = import.meta.env.VITE_API_URL || (isProd
    ? "https://syncbridge-2.onrender.com"
    : "http://localhost:8000");

export default server;