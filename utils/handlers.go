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

	c.Header("Location", fmt.Sprintf("/contacts/%d", contact.ID))
	c.JSON(http.StatusCreated, contact)
}

// ContactsRetrieve is the handler for retrieving stored contacts.
func ContactsRetrieve(c *gin.Context) {
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
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failure to parse ID as Uint while trying to retrieve a single contact by ID!"})
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
	id, parseUintError := strconv.ParseUint(c.Param("id"), 10, 32)
	if parseUintError != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failure to parse ID as Uint while trying to update by ID!"})
		return
	}
	var contactUpdate Contact
	err := c.ShouldBindBodyWithJSON(&contactUpdate)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid contact update request format!"})
		return
	}

	updatableContact, _ := ReadContactByID(uint(id))
	updatableContact.UpdateContactByID(contactUpdate)

	c.JSON(http.StatusOK, updatableContact)
}

// ContactDelete is the handler for deleting a contact.
func ContactDelete(c *gin.Context) {
	id, parseUintError := strconv.ParseUint(c.Param("id"), 10, 32)
	if parseUintError != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failure to parse ID as Uint while trying to delete by ID!"})
		return
	}
	err := DeleteContactByID(uint(id))
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Contact couldn't be reached for deletion!"})
	}

	c.JSON(http.StatusOK, gin.H{"message": "Successfully deleted contact!"})
}
