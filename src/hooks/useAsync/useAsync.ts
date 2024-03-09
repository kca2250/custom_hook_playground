import { DependencyList, useCallback, useEffect, useState } from "react";

export default function useAsync<T>(
  callback: () => Promise<T>,
  dependencies: DependencyList = []
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [value, setValue] = useState<T>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies]);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
