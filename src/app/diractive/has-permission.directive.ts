import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { MasterServiceService } from '../../core/master-service.service';
@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit{
  @Input() module!: string;
  @Input() requiredAction!: string;

  constructor(private MasterServiceService: MasterServiceService, private el: ElementRef) {}

  ngOnInit() {
      let hasPermission = this.MasterServiceService.hasElementPermission(this.module, this.requiredAction);
    // this.MasterServiceService.hasElementPermission(this.module, this.requiredAction).subscribe(hasPermission => {
      if (!hasPermission) {
        this.el.nativeElement.style.display = 'none';
      }
    // });
  }

}
