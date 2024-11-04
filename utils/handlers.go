package utils

import (
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

// ContactCreate is the handler for creating a new contact.
func ContactCreate(c *gin.Context) {
	// TODO need to check if contact request is valid format
	var contact Contact
	err := c.ShouldBindBodyWithJSON(&contact)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request format!"})
		return
	}
	contact.CreatedAt = time.Now()

	creationErr := CreateContact(&contact)
	if creationErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add new contact"})
		return
	}

	c.JSON(http.StatusCreated, contact)
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
	id, parseUintError := strconv.ParseUint(c.Param("id"), 10, 32)
	if parseUintError != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failure to parse ID as Uint while trying to retrieve a single contact by ID!"})
		return
	}

	contact, err := ReadContactByID(uint(id))

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Contact couldn't be reached!"})
	}
	c.JSON(http.StatusOK, contact)
}

// ContactUpdate is the handler for updating a contact.
func ContactUpdate(c *gin.Context) {
	fmt.Print("tried to update a contact, but this functionality is not yet implemented!")
}

// ContactDelete is the handler for deleting a contact.
func ContactDelete(c *gin.Context) {
	id, parseUintError := strconv.ParseUint(c.Param("id"), 10, 32)
	if parseUintError != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failure to parse ID as Uint while trying to delete by ID!"})
		return
	}
	err := DeleteContactByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Contact couldn't be reached for deletion!"})
	}

	c.JSON(http.StatusOK, gin.H{"message": "Successfully deleted contact!"})
}
