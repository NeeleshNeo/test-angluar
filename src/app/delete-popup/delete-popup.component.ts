import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css'],
})
export class DeletePopupComponent implements OnInit {
  @Input() empDetails: any;
  @Output() onConfirm = new EventEmitter();

  constructor(private emp: EmployeService) {}

  ngOnInit(): void {}

  onDeleteConfirm(emp: any) {
    this.emp.deleteEmp(emp.id).subscribe((data) => {
      console.error('deleted', data);
      this.onConfirm.emit('false');
    });
  }
}
