import { Component, AfterViewInit, ViewChild, NgZone  } from '@angular/core';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataSource } from '@angular/cdk/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { EditSearchResultDialogComponent } from '../edit-search-result-dialog/edit-search-result-dialog.component';
import { MatSelectChange } from '@angular/material/select';
import { GetFoundItems, Result } from 'app/shared/response-interfaces/get-found-items';
import { Router } from '@angular/router';
import { FoundedItemService } from 'app/shared/services/founded-item/founded-item.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements AfterViewInit {
  displayedColumns: string[] = ['item.catagory', 'owner.firstName','owner.phoneNumber',
  'foundedPlace', 'foundedDate', 'status'];
dataSource: MatTableDataSource<Result>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

pendingItem: GetFoundItems;
isLoadingResults = true;
gotError = false;

constructor(public dialog: MatDialog, private router: Router, private ngZone: NgZone, private foundedItemService: FoundedItemService) {
// Create 100 users

this.foundedItemService.getFoundedItemsDelivered().subscribe(res=>{
this.isLoadingResults= true;
this.pendingItem = res;
this.dataSource = new MatTableDataSource(res.results);

this.dataSource.sortingDataAccessor = this.nestedProperty;
//  = (item, property)=>{
this.dataSource.filterPredicate = (data, filter) => {
const dataStr = data.item.catagory+' '+  data.owner.firstName+' '+ data.owner.lastName+' '+data.owner.phoneNumber+' '+ data.foundedPlace+' '+ data.foundedDate+' '+ data.status+' '+ data.registeredBy;
return dataStr.toLowerCase().indexOf(filter) != -1; 
}
//   switch(property){
//     case 'lostDate': return item.item.lostDate.toDateString;
//     default: return item[property]
//   }
// };
this.isLoadingResults = false;
this.dataSource.paginator = this.paginator; 
this.dataSource.sort = this.sort;
})

}

nestedProperty = (data: any, sortHeaderId: string): string |number =>{
return sortHeaderId
.split('.')
.reduce((accumulator, key) => accumulator && accumulator[key], data) as
| string
| number;
};


ngOnInit(): void {

// this.dataSource.filterPredicate = this.createFilter();
// this.dataSource.filterPredicate = function (record,filter) {
//   debugger;
//   console.log('goti'+ filter);
//   var map = new Map(JSON.parse(filter));
//   let isMatch = false;
//   for(let [key,value] of map){
//     isMatch = (value=="All") || (record[key as keyof UserData] == value); 
//     if(!isMatch) return false;
//   }
//   return isMatch;
// }

}



filterDictionary= new Map<string,string>();




createFilter() {
let filterFunction = function (data: any, filter: string): boolean {
let searchTerms = JSON.parse(filter);
let isFilterSet = false;
for (const col in searchTerms) {
if (searchTerms[col].toString() !== '') {
isFilterSet = true;
} else {
delete searchTerms[col];
}
}

console.log(searchTerms);

let nameSearch = () => {
let found = false;
if (isFilterSet) {
for (const col in searchTerms) {
searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
found = true
}
});
}
return found
} else {
return true;
}
}
return nameSearch()
}
return filterFunction
}

addData() {
// const dialogRef = this.dialog.open(AddInquiryDialogComponent);

// dialogRef.afterClosed().subscribe(result => {
// console.log(`Dialog result: ${result}`);
// });
// this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
// this.table.renderRows();
}
ngAfterViewInit() {
// this.dataSource.paginator = this.paginator;
// this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {

const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
this.dataSource.paginator.firstPage();

}

}

search(foundedPlace: string, foundedDate: string, delivered: string) {
foundedPlace = foundedPlace.trim(); // Remove whitespace
foundedPlace = foundedPlace.toLowerCase(); // MatTableDataSource defaults to lowercase matches

//  selectedValueEle = selectedValueEle.trim(); 

this.dataSource.filter = foundedPlace;
debugger 
}
}