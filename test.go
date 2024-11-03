

import (
	"log"
	"net/http"

	"fmt"
	"time"

	"github.com/rs/cors"
)

func initializeDatabase() {
	db, err := databased.initializeDB()
	if err != nil {
		panic("failed to connect database")
	}

	err = db.AutoMigrate(&Contact{})
	if err != nil {
		panic("failed to migrate database schema")
	}

	fmt.Println("Contacts table successfully created!")

	// Truncate the contacts table
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

	contacts := []*Contact{
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

	result := db.Create(contacts) // pass a slice to insert multiple row

	if result.Error != nil {
		panic("failed to create example contacts")
	}

	fmt.Print("rows affected: ")
	fmt.Println(result.RowsAffected) // returns inserted records count

}

func getContacts(w http.ResponseWriter, r *http.Request) {
	// get contacts
	db.Find(&contacts)
	if err != nil {
		http.Error(w, "Database query failed", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

}

func addContact(w http.ResponseWriter, r *http.Request) {
	// add new contact
}

func deleteContact(w http.ResponseWriter, r *http.Request) {
	// delete contact
}

func updateContact(w http.ResponseWriter, r *http.Request) {
	// update contact
}

func main() {
	initializeDatabase()
	mux := http.NewServeMux()
	mux.HandleFunc("/contacts", getContacts)
	mux.HandleFunc("/contacts/add-contact", addContact)
	mux.HandleFunc("/contacts/delete-contact", deleteContact)
	mux.HandleFunc("/contacts/update-contact", updateContact)

	// cors.Default() setup the middleware with default options being
	// all origins accepted with simple methods (GET, POST). See
	// documentation below for more options.
	handler := cors.Default().Handler(mux)
	log.Print(http.ListenAndServe(":8080", handler))

}
