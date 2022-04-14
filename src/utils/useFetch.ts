import { useEffect, useState } from "react";

export const useFetch = <T>(url: string): {
  data: T[] | null;
} => {
  const [data, setData] = useState<T[] | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((resData: T[]) => {
        setData(resData);
      })
  }, [url])

  return { data };
};
