import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlternateIf]'
})
export class AlternateIfDirective implements OnChanges {
  @Input() appAlternateIf: boolean = false;

  constructor(private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  ngOnChanges(): void {
    if (this.appAlternateIf) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

}
