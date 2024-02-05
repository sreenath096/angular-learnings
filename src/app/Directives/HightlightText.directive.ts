import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlightText]',
})
export class HighlightTextDirective implements OnInit {
    ngOnInit(): void {
        (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';
    }

    constructor(private element: ElementRef) {

    }

}
