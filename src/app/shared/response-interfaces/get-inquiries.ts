import { Item } from "../models/item"
import { Person } from "../models/person"

export interface GetInquiries {
    results: Result[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}

  export interface Result {
    item: Item;
    owner: Person;
    status: string;
    isFound: boolean;
    registeredBy: string;
    foundedItemId?: string;
    id: string;
  }
  

  
  