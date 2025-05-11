import { useState, useEffect } from "react";
import api from "../../services/api.jsx";

export const usePublicList = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await api.get("/public");
        setPublications(response.data.publications);
      } catch (err) {
        setError(err.response?.data?.message || "Error al obtener publicaciones");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  return { publications, loading, error };
};