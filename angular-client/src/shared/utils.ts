import { formatDate } from "@angular/common";

/**
 * Converts a date to an ISO format.
 *
 * @param dateString The date being converted.
 * @returns The converted date.
 */
export function convertToISODateTime(dateString: string | null | undefined): string | null | undefined {
	if (dateString === null || dateString === undefined) {
		return dateString;
	}
	const date = new Date(dateString);
	date.setUTCHours(0, 0, 0, 0); // Set time to 00:00:00.000 in UTC
	const isoString = date.toISOString(); // Get the ISO string, e.g., "2024-11-04T00:00:00.000Z"
	return isoString.replace("Z", "-00:00"); // Replace the Z with -00:00
}

/**
 * Ensure date is formatted correctly for being used in form.
 *
 * @param dateString The date being formatted.
 * @returns The formatted date or null.
 */
export function controlDateFormat(dateString: string | null | undefined): string | null {
	if (dateString !== null && dateString !== undefined) {
		return formatDate(dateString,'yyyy-MM-dd','en');
	} 
	return null;
}