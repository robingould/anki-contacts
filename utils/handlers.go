package utils

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// ContactCreate is the handler for creating a new contact.
func ContactCreate(c *gin.Context) {
	// TODO need to check if contact request is valid format
	fmt.Print("tried to create a contact, but this functionality is not yet implemented!")
}

// ContactsRetrieve is the handler for retrieving stored contacts.
func ContactsRetrieve(c *gin.Context) {
	// TODO best practices for cors?
	c.Header("Access-Control-Allow-Origin", "*")
	contacts, err := ReadAllContacts()

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch contacts"})
		return
	}
	c.JSON(http.StatusOK, contacts)
}

// ContactRetrieve is the handler for retrieving a single contact by id
func ContactRetrieveByID(c *gin.Context) {
	// base 10, 32 bit integer
	id, convertErr := strconv.ParseUint(c.Param("id"), 10, 32)
	if convertErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failure to parse ID as Uint!"})
		return
	}

	contact, err := ReadContactByID(uint(id))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Contact couldn't be reached!"})
	}
	c.JSON(http.StatusOK, contact)
}

// ContactUpdate is the handler for updating a contact.
func ContactUpdate(c *gin.Context) {
	fmt.Print("tried to update a contact, but this functionality is not yet implemented!")
}

// ContactDelete is the handler for deleting a contact.
func ContactDelete(c *gin.Context) {
	fmt.Print("tried to delete a contact, but this functionality is not yet implemented!")
}
