import { Item } from "../models/item";
import { Person } from "../models/person";

export interface GetFoundItems {
    results: Result[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}

  export interface Result {
    owner: Person;
    item: Item;
    founder: Person;
    hasOwner: boolean;
    foundedPlace: string;
    foundedDate: Date;
    status: string;
    registeredBy: string;
    id: string;
  }
 