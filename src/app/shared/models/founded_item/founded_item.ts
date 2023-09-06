import { FoundedItemStatus } from "./founded_Item_status";
import { Item } from "../item";
import { Person } from "../person";

export interface FoundedItem{
    hasOwner?: boolean;
    owner?: Person;
    item?: Item;
    founder?: Person;
    foundedPlace?: string;
    foundedDate?: Date;
    status?: FoundedItemStatus;
    deliveredBy?: string;
    deliveryDate?: string;
}