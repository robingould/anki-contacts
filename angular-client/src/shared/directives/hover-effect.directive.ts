import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
	selector: "[appHoverEffect]",
	standalone: true
})
export class HoverEffectDirective {

	constructor(private readonly elementRef: ElementRef<HTMLElement>) {
	}

	@HostListener("mouseenter") onMouseEnter(): void {
		this.styleDiv("lightgray", "bold");
	}
	@HostListener("mouseleave") onMouseLeave(): void {
		this.styleDiv("", "");
	}
	private styleDiv(color: string, weight: string): void {
		this.elementRef.nativeElement.style.backgroundColor = color;
		this.elementRef.nativeElement.style.fontWeight = weight;
	}

}
