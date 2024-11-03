package models

import (
	"time"

	"gorm.io/gorm"
)

type ContactModel struct {
	ID            uint       `gorm:"primaryKey"`                 // Primary key
	FirstName     string     `gorm:"type:varchar(100);not null"` // String field with not null constraint
	LastName      string     `gorm:"type:varchar(100);not null"` // String field with not null constraint
	Email         *string    `gorm:"type:varchar(100);unique"`   // Nullable string with unique constraint
	PhoneNumber   *string    `gorm:"type:varchar(20)"`           // Nullable string
	Birthday      *time.Time // Nullable date
	CreatedAt     time.Time  // Automatically managed by GORM for creation time
	LastContacted time.Time  // Automatically managed by GORM for last contact time
}

func MigrateSchema(db *gorm.DB) {
	err := db.AutoMigrate(ContactModel{})
	if err != nil {
		panic(err)
	}
}
