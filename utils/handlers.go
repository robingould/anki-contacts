package utils

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// ContactCreate is the handler for creating a new contact.
func ContactCreate(c *gin.Context) {
	fmt.Print("tried to create a contact, but this functionality is not yet implemented!")
}

// ContactsRetrieve is the handler for retriveing stored contacts.
func ContactsRetrieve(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	contactModels, err := ReadAllContacts()

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch contacts"})
		return
	}
	c.JSON(http.StatusOK, contactModels)
}

// ContactUpdate is the handler for updating a contact.
func ContactUpdate(c *gin.Context) {
	fmt.Print("tried to update a contact, but this functionality is not yet implemented!")
}

// ContactDelete is the handler for deleting a contact.
func ContactDelete(c *gin.Context) {
	fmt.Print("tried to delete a contact, but this functionality is not yet implemented!")
}
