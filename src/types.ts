export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

export interface Quote {
  _id: string;
  content: string;
  character: {
    firstName: string;
    lastName: string;
  }
}