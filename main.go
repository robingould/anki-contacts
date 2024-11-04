package main

import (
	"anki-contacts/databased"
	"anki-contacts/utils"
	"fmt"
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	db := databased.Get()
	utils.MigrateSchema(db)

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

	contacts := []*utils.Contact{
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

	emailC := "yueah@waow.gov"
	phoneC := "+11111111"
	birthdayC := time.Date(1999, time.January, 2, 2, 2, 0, 0, time.UTC)

	contactCreationDummy := utils.Contact{
		FirstName:     "John",
		LastName:      "Salamander",
		Email:         &emailC,
		PhoneNumber:   &phoneC,
		Birthday:      &birthdayC,
		LastContacted: time.Now(),
	}

	utils.CreateContact(&contactCreationDummy)

	if result.Error != nil {
		panic("failed to create example contacts")
	}

	fmt.Print("rows affected: ")
	fmt.Println(result.RowsAffected) // print inserted records count

	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:4200"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.POST("/contacts", utils.ContactCreate)
	router.GET("/contacts", utils.ContactsRetrieve)
	router.GET("/contacts/:id", utils.ContactRetrieveByID)
	router.PUT("/contacts/:id", utils.ContactUpdate)
	router.DELETE("/contacts/:id", utils.ContactDelete)

	router.Run(":8080")
}
