import { useState, useEffect } from 'react';


export const useHttp = (url: string, dependencies: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log('Sending Http request to URL: ' + url);
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
        console.log(err);
        setIsLoading(false);
        setError(err);
      });
  }, dependencies);

  return [isLoading, fetchedData, error];
};