import { useState, useEffect } from 'react';

export const useHttp = (url: string, dependencies: string[], shouldFetch: boolean) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (shouldFetch) {
      setIsLoading(true);
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch.');
          }
          return response.json();
        })
        .then(data => {
          setIsLoading(false);
          setFetchedData(data);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }

  }, dependencies);

  return [isLoading, fetchedData, error];
};