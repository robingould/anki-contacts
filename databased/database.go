// Package databased handles data in a based way.
package databased

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// Database represents a connection to the anki-contacts database.
type Database struct {
	*gorm.DB
}

var globalDBPointer Database

// New returns the shared database connection, opening it if that has not
// already been done.
func Get() Database {
	if globalDBPointer.DB != nil {
		return globalDBPointer
	}

	dbStringInput := "root:password@tcp(127.0.0.1:3306)/contacts?charset=utf8mb4&parseTime=True&loc=Local"
	initializedDBPointer, gormError := gorm.Open(mysql.Open(dbStringInput), &gorm.Config{})

	if gormError != nil {
		panic(gormError)
	}

	globalDBPointer.DB = initializedDBPointer

	return globalDBPointer
}
