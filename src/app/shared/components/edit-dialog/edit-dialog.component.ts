import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  title: string;
  message: string;
  catagory: string;
  name: FormControl;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditDialogModel,
  ) {
    this.title = data.title;
      this.message = data.message;
      this.catagory = data.catagory;
  }
  ngOnInit(): void {
    this.name = this.fb.control('', [Validators.required]);
  }

  // catagoryExists({value}: AbstractControl): Observable<ValidationErrors | null>{
  //   if(value.toLowerCase == this.catagory.toLowerCase){
  //     return combineLatest([{isExists : true}]);
  //   }
  //   return null;
  // }
 
  onConfirm(): void{
    //close the dialog, return true
    if(this.catagory.length> 0)
    this.dialogRef.close(this.catagory.trim());
  }

  onDismiss(): void{
    // close the dialog, return false
    this.dialogRef.close(false);
  }

}

export class EditDialogModel {

  constructor(public title: string, public message: string, public catagory: string) {
  }
}