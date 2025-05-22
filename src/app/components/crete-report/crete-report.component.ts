import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MasterServiceService } from '../../../core/master-service.service';

@Component({
  selector: 'app-crete-report',
  imports: [CommonModule, FormsModule],
  templateUrl: './crete-report.component.html',
  styleUrl: './crete-report.component.scss'
})
export class CreteReportComponent {
  reportName = '';
  reportType = '';
  constructor(private MasterServiceService: MasterServiceService) { }

  submitReport() {
    if (this.reportName && this.reportType) {
      this.MasterServiceService.addReport({ name: this.reportName, type: this.reportType });
      this.reportName = '';
      this.reportType = ''; 
    }

  }

}
