import { Beverage } from "../types";
import { useFetch } from "../utils/useFetch";
import { useFetchBeverages } from "../utils/useFetchBeverages";

export const BeverageList = () => {
  const { data } = useFetch<Beverage>('/beverageData.json');

  return (
    <div>
      <h2>Beverages</h2>
      {data?.length &&
        <ul>
          {data?.map((obj) => (
            <li>{obj.level} - {obj.producerLocation}</li>
          ))}
        </ul>
      }
    </div>
  )
}
