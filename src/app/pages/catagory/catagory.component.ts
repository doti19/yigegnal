import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'app/shared/components/confirm-dialog/confirm-dialog.component';
import { EditDialogComponent, EditDialogModel } from 'app/shared/components/edit-dialog/edit-dialog.component';
import { Catagory } from 'app/shared/models/catagory';
import { CatagoryService } from 'app/shared/services/catagory/catagory.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss']
})
export class CatagoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'edit', 'delete'];
  dataSource: MatTableDataSource<Catagory>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  result: string = '';
  isLoadingCatagories = true;
  gotError = false;
  catagories: Catagory[];
  isDisabled = true;
  constructor(public dialog: MatDialog, private router: Router, private ngZone: NgZone, private catagoryService: CatagoryService) {
    this.fetchData();
   }
   fetchData(){
    this.catagoryService.getCatagories().subscribe(res=>{
      this.isLoadingCatagories = true;
      this.catagories = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.isLoadingCatagories = false;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err=>{
      console.log('ther has been an error: ' + err);
      this.gotError = true;
    });
   }
   addCatagory(){
    const message = `Please Enter a new Catagory Name`;
     const dialogData = new EditDialogModel(`Add A Catagory`, message, '');

     const dialogRef = this.dialog.open(EditDialogComponent, {
    
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(dialogResult =>{
      if(dialogResult && dialogResult.toString() != ''){
    
        this.catagoryService.createCatagory({name: dialogResult}).subscribe(res=>{
        this.isLoadingCatagories = true;
        this.fetchData();
        
        this.isLoadingCatagories = false;
      });
    
    } 
    });
   }
   edit(catagory: Catagory){
    const message = `Please Enter a new Catagory Name`;
    const dialogData = new EditDialogModel(`Confirm update on ${catagory.name}`, message, catagory.name);

    const dialogRef = this.dialog.open(EditDialogComponent, {
    
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(dialogResult =>{
      if(dialogResult && dialogResult.toString() != ' '){
        if(dialogResult != catagory.name){
        this.catagoryService.updateCatagory(catagory._id, {name: dialogResult}).subscribe(res=>{
        this.isLoadingCatagories = true;
        this.fetchData();
        
        this.isLoadingCatagories = false;
      });
    }
    } 
    });
  }

   delete(catagory: Catagory){
    const message = `Are you sure you want to delete ${catagory.name}?`;
    const dialogData = new ConfirmDialogModel("Confirm Delete", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(dialogResult =>{
      this.catagoryService.deleteCatagory(catagory._id).subscribe(res=>{
        this.isLoadingCatagories = true;
        this.fetchData();

        this.isLoadingCatagories = false;
      });
     
    });
    
   }
 
   applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    
  }
 
}
  ngOnInit(): void {
  }

}
