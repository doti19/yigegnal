import { Component, AfterViewInit, ViewChild, NgZone } from '@angular/core';

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
import { Router } from '@angular/router';
// import { Router } from 'express';
import { InquiryService } from 'app/shared/services/inquiry/inquiry.service';
import { Inquiry } from 'app/shared/models/inquiry/inquiry';
import { GetInquiries, Result } from 'app/shared/response-interfaces/get-inquiries';
import {DateTime} from 'luxon';
import { catchError } from 'rxjs';
import { AddInquiryDialogComponent } from 'app/shared/components/registration/add-inquiry-dialog/add-inquiry-dialog.component';





@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements AfterViewInit {
  displayedColumns: string[] = ['item.catagory', 'owner.firstName', 'item.lostPlace', 'item.lostDate','status', 'registeredBy'];
  dataSource: MatTableDataSource<Result>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 

  
 inquiry: GetInquiries ;
 isLoadingResults = true;
 gotError = false;
// 
  constructor(public dialog: MatDialog, private router: Router,  private ngZone: NgZone, private inquiryService: InquiryService ) {
    // Create 100 users
    this.inquiryService.getInquiries().subscribe(res=>{ 
      console.log(res.results);
      this.isLoadingResults = true;
      this.inquiry = res;
      this.dataSource = new MatTableDataSource(res.results);
      
      this.dataSource.sortingDataAccessor = this.nestedProperty;
      //  = (item, property)=>{
        this.dataSource.filterPredicate = (data, filter) => {
          const dataStr = data.item.catagory+' '+  data.owner.firstName+' '+ data.owner.lastName+' '+ data.item.lostPlace+' '+ data.item.lostDate +' '+ data.status+' '+ data.registeredBy;
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
    });

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }
 nestedProperty = (data: any, sortHeaderId: string): string |number =>{
  return sortHeaderId
    .split('.')
    .reduce((accumulator, key) => accumulator && accumulator[key], data) as
    | string
    | number;
 };
formatDate(date: string){
  return DateTime.fromISO(date).toLocaleString();
}
  ngOnInit(): void {
  
    // this.inquiryService.getInquiries().subscribe(res=>{
    //   console.log(res.results);
    //   this.inquiry = res;
    //   this.dataSource = new MatTableDataSource(res.results);
    // });
  } 

  getProperty = (obj, path) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )

  // filterDictionary= new Map<string,string>();

// applyEmpFilter(ob:MatSelectChange,empfilter:EmpFilter) {

//     // this.filterDictionary.set(empfilter.name,ob.value);
//     // var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
//     // this.dataSource.filter = ob.value;
//     const filterValue = ob.value=='All'? '': ob.value.trim().toLowerCase();
//     const col = empfilter.name;
    
//     // this.dataSource.filterPredicate = function(record, filter){
//     //   return record[col].trim().toLowerCase() == filter.trim().toLowerCase();
//     // }
//     this.dataSource.filter = filterValue.trim().toLowerCase();
  
//       if (this.dataSource.paginator) {
//         this.dataSource.paginator.firstPage();
      
//     }
//     // // this.dataSource.filterPredicate = function(record, filter){
//     // //   return record[col].toLowerCase() == 'Bole'.trim().toLowerCase();
//     // // }

  
// }


// createFilter() {
//   let filterFunction = function (data: any, filter: string): boolean {
//     let searchTerms = JSON.parse(filter);
//     let isFilterSet = false;
//     for (const col in searchTerms) {
//       if (searchTerms[col].toString() !== '') {
//         isFilterSet = true;
//       } else {
//         delete searchTerms[col];
//       }
//     }

//     console.log(searchTerms);

//     let nameSearch = () => {
//       let found = false;
//       if (isFilterSet) {
//         for (const col in searchTerms) {
//           searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
//             if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
//               found = true
//             }
//           });
//         }
//         return found
//       } else {
//         return true;
//       }
//     }
//     return nameSearch()
//   }
//   return filterFunction
// }

addData() {
  const dialogRef = this.dialog.open(AddInquiryDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  // this.table.renderRows();
}
  ngAfterViewInit() {
   
   
  }

  applyFilter(event: Event) {
    
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      
    }
   
  }
  
//   search(foundedPlace: string, foundedDate: string, delivered: string) {
//     foundedPlace = foundedPlace.trim(); // Remove whitespace
//   foundedPlace = foundedPlace.toLowerCase(); // MatTableDataSource defaults to lowercase matches

//   //  selectedValueEle = selectedValueEle.trim(); 

//    this.dataSource.filter = foundedPlace;
//    debugger 
// }
}
