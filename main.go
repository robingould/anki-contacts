package main

import (
	"anki-contacts/databased"
	"anki-contacts/models"
	"fmt"
	"log"
	"time"
)

func main() {
	db := databased.InitializeDatabase()
	models.MigrateSchema(db)

	fmt.Println("Contacts table successfully created!")

	// Truncate the contacts table for testing
	if err := db.Exec("TRUNCATE TABLE contacts").Error; err != nil {
		log.Fatalf("failed to truncate contacts table: %v", err)
	}

	// Testing example table creation
	emailA := "yippee@waow.gov"
	phoneA := "+1234567890"
	birthdayA := time.Date(1990, time.January, 1, 0, 0, 0, 0, time.UTC)

	emailB := "test@waow.gov"
	phoneB := "+9876543210"
	birthdayB := time.Date(2000, time.December, 2, 2, 2, 0, 0, time.UTC)

	contacts := []*models.ContactModel{
		{
			FirstName:     "Alice",
			LastName:      "Glassoline",
			Email:         &emailA,
			PhoneNumber:   &phoneA,
			Birthday:      &birthdayA,
			LastContacted: time.Now(),
		},
		{
			FirstName:     "Blob",
			LastName:      "Salamander",
			Email:         &emailB,
			PhoneNumber:   &phoneB,
			Birthday:      &birthdayB,
			LastContacted: time.Now(),
		},
	}

	result := db.Create(contacts) // pass a slice to insert multiple rows

	if result.Error != nil {
		panic("failed to create example contacts")
	}

	fmt.Print("rows affected: ")
	fmt.Println(result.RowsAffected) // returns inserted records count

}
