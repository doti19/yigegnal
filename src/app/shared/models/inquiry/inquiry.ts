import { InquiryStatus } from "./inquiry_status";
import { Item } from "../item";
import { Person } from "../person";

export interface Inquiry{
    item: Item;
    owner?: Person;
    status?: InquiryStatus;
    isFound?: boolean;
    foundedItemId?: string;
    registeredBy: string;
    
}