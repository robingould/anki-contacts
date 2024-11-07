import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "sadify",
	standalone: true
})

export class SadIfyPipe implements PipeTransform {

	transform(value: string): string {
		return value.concat(" :/");
	}
}
