package databased

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Database struct {
	*gorm.DB
}

var globalDBPointer *gorm.DB

func InitializeDatabase() *gorm.DB {
	dbStringInput := "root:password@tcp(127.0.0.1:3306)/contacts?charset=utf8mb4&parseTime=True&loc=Local"
	initializedDBPointer, gormError := gorm.Open(mysql.Open(dbStringInput), &gorm.Config{})

	if gormError != nil {
		panic(gormError)
	}

	globalDBPointer = initializedDBPointer

	return globalDBPointer
}

func GetDB() *gorm.DB {
	return globalDBPointer
}
