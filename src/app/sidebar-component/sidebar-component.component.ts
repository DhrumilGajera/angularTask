import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../../core/master-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-sidebar-component',
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar-component.component.html',
  styleUrl: './sidebar-component.component.scss'
})
export class SidebarComponentComponent implements OnInit{
public menuItems : any
  constructor( private ms:MasterServiceService){}
  ngOnInit() {
    this.getModuleValue()
  }

  getModuleValue(){
    this.ms.getAccessibleModules().subscribe((res:any)=>{
      console.log(res);
      this.menuItems = res
    })
  }

  
}
