import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-check-in-dialog',
  templateUrl: './check-in-dialog.component.html',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class CheckInDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string, isSuccess: boolean },
    public dialogRef: MatDialogRef<CheckInDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
