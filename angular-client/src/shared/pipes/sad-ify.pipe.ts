import { Pipe, PipeTransform } from "@angular/core";
/**
 * SadIfy Pipe ensures that your string is quite unhappy.
 * You did something morally wrong.
 */
@Pipe({
	name: "sadify",
	standalone: true
})
export class SadIfyPipe implements PipeTransform {
	/**
	 * transform() turns your neutral or even happy string, into a sad one. darn.
	 *
	 * @param value - string to concatenate the sad text face to
	 */
	public transform(value: string): string {
		return value.concat(" :/");
	}
}
