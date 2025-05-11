import { useState, useEffect } from "react";
import api from "../../services/api";

export const usePublicationsList = (curso = null) => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const endpoint = curso ? `/public/${curso}` : "/public/";

        const response = await api.get(endpoint);
        setPublications(response.data.publications);
      } catch (err) {
        setError(
          err.response?.data?.message || "Error al obtener publicaciones"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, [curso]);

  return { publications, loading, error };
};