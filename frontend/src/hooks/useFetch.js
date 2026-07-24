import { useState, useCallback } from 'react';

/**
 * useFetch
 * Generic async data-fetching hook.
 *
 * @param {Function} fetchFn  — async function that returns data
 *
 * Usage:
 *   const { data, loading, error, execute } = useFetch(contentService.getAll);
 *   useEffect(() => { execute(); }, []);
 */
function useFetch(fetchFn) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchFn]);

  const reset = () => { setData(null); setError(null); };

  return { data, loading, error, execute, reset };
}

export default useFetch;
