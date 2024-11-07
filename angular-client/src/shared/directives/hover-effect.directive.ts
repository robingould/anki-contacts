import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
	selector: "[appHoverEffect]",
	standalone: true
})
export class HoverEffectDirective {

	constructor(private readonly elementRef: ElementRef<HTMLElement>) {
	}

	@HostListener("mouseenter") onMouseEnter() {
		this.styleDiv("lightgray", "bold");
	}
	@HostListener("mouseleave") onMouseLeave() {
		this.styleDiv("", "");
	}
	private styleDiv(color: string, weight: string) {
		this.elementRef.nativeElement.style.backgroundColor = color;
		this.elementRef.nativeElement.style.fontWeight = weight;
	}


}
