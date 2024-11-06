/**
 * A Contact is someone you can get in touch with.
 */
export interface Contact {
	Birthday: string | null | undefined;
	CreatedAt: string | null | undefined;
	Email: string | null | undefined;
	FirstName: string;
	ID: number | null | undefined;
	LastContacted: string | null | undefined;
	LastName: string;
	PhoneNumber: string | null | undefined;
}
