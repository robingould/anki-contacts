import { Directive, ElementRef, HostListener } from "@angular/core";
/**
 * Hover Effect Directive is a directive that highlights and bolds text
 * on a div while your mouse is over it.
 */
@Directive({
	selector: "[appHoverEffect]",
	standalone: true
})
export class HoverEffectDirective {

	constructor(private readonly elementRef: ElementRef<HTMLElement>) {
	}
	/**
	 * Handles a user moving their mouse pointer over a div.
	 *
	 */
	@HostListener("mouseenter")
	public onMouseEnter(): void {
		this.styleDiv("lightgray", "bold");
	}
	/**
	 * Handles a user cruelly abandoning a poor, innocent div with their mouse
	 * in a truly evil fashion.
	 *
	 */
	@HostListener("mouseleave")
	public onMouseLeave(): void {
		this.styleDiv("", "");
	}
	/**
	 * Handles making our div fancy
	 *
	 * @param color The color we want our background to be highlighted
	 * @param weight The weight we want our font to be weighted
	 */
	private styleDiv(color: string, weight: string): void {
		this.elementRef.nativeElement.style.backgroundColor = color;
		this.elementRef.nativeElement.style.fontWeight = weight;
	}

}
