import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[click-outside]'
})
export class ClickoutsideDirective {
  @Output()
  public clickOutside: EventEmitter<MouseEvent> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement) {
    const clickInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickInside) {
      this.clickOutside.emit(event);
    }
  }
}
