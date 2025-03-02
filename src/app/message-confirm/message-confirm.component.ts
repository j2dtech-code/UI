import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-confirm',
  standalone: false,
  
  templateUrl: './message-confirm.component.html',
  styleUrl: './message-confirm.component.css'
})
export class MessageConfirmComponent {
  constructor(private dialogRef: MatDialogRef<MessageConfirmComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
