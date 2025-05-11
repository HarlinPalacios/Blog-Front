import { useState } from "react";
import api from "../../services/api";

export const useFiltrar = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const filtrarPorCurso = async (curso) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get(`/public/${curso}`);
      setPublications(response.data.publications);
    } catch (err) {
      setError(err.response?.data?.message || "Error al filtrar publicaciones.");
    } finally {
      setLoading(false);
    }
  };

  return { publications, loading, error, filtrarPorCurso };
};