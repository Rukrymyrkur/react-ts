import { Quote } from "../types";
import { useFetch } from "../utils/useFetch";

export const QuoteList = () => {
  const { data } = useFetch<Quote>('/quotes.json');

  return (
    <div>
      <h2>Quotes</h2>
      {data?.length &&
        <ul>
          {data?.map((obj) => (
            <li><strong>{obj.character.firstName} {obj.character.lastName}</strong> - {obj.content}</li>
          ))}
        </ul>
      }
    </div>
  )
}
