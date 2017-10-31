import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = true;
  }
  @HostListener('dblclick') toggleClose() {
    this.isOpen = false;
  }
}
