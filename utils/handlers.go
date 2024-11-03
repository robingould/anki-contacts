package utils

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ContactCreate(c *gin.Context) {
	fmt.Print("tried to create a contact, but this functionality is not yet implemented!")
}

func ContactsRetrieve(c *gin.Context) {
	contactModels, err := ReadAllContacts()

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch contacts"})
		return
	}
	c.JSON(http.StatusOK, contactModels)
}

func ContactUpdate(c *gin.Context) {
	fmt.Print("tried to update a contact, but this functionality is not yet implemented!")
}

func ContactDelete(c *gin.Context) {
	fmt.Print("tried to delete a contact, but this functionality is not yet implemented!")
}
