import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-confirm',
  standalone: false,
  
  templateUrl: './message-confirm.component.html',
  styleUrl: './message-confirm.component.css'
})
export class MessageConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<MessageConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string } // Receiving message data
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
