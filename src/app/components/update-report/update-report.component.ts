import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../../../core/master-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update-report',
  imports: [CommonModule],
  templateUrl: './update-report.component.html',
  styleUrl: './update-report.component.scss'
})
export class UpdateReportComponent implements OnInit {
  public reports: any
  constructor(public  MasterServiceService: MasterServiceService) {}
  ngOnInit(): void {
    this.reports = this.MasterServiceService.getReports(); // ✅ Get cached reports
  }
  
  
  // editReport(index: number) {
  //   const updatedName = prompt('Enter new report name:', this.reports$.value[index].name);
  //   if (updatedName) {
  //     this.MasterServiceService.editReport(index, { ...this.reports$.value[index], name: updatedName });
  //   }
  // }

}
