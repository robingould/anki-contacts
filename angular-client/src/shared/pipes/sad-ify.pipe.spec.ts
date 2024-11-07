import { SadIfyPipe } from "./sad-ify.pipe";

describe("SadIfyPipe", () => {
	it("create an instance", () => {
		const pipe = new SadIfyPipe();
		expect(pipe).toBeTruthy();
	});
});
