import { useEffect, useState } from "react";
import { Beverage } from "../types";

export const useFetchBeverages = (url: string): {
  data: Beverage[] | null;
} => {
  const [data, setData] = useState<Beverage[] | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((resData: Beverage[]) => {
        setData(resData);
      })
  }, [url])

  return { data };
};
