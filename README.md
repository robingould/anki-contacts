# angular-go-sql-crud
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
