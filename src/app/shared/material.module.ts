import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
} from '@angular/material';


@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,

  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
