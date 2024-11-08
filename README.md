# anki contacts
Practice toy CRUD App with an Angular frontend client and a Go backend. Uses MySQL as the database. Normal contact app that reminds you to call your loved ones.

## Starting
```bash
docker pull mysql:latest
docker run --name mysql-server -e MYSQL_ROOT_USER=root -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:latest
```

## connect to docker mysql tables
```bash
docker exec -it mysql-server mysql -u root -p
# enter password provided
```

## run go backend
```bash
go run main.go
```

## run angular frontend
```bash
cd angular-client
ng serve
```
