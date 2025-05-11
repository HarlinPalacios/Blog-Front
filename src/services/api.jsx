import axios from "axios";

// Configuración de Axios con la base URL de tu backend
const api = axios.create({
  baseURL: "http://localhost:3003/blogAprende/v1", // Base URL de tu API
  headers: {
    "Content-Type": "application/json", // Tipo de contenido
  },
});

// Exporta la instancia de Axios para usarla en otros archivos
export default api;