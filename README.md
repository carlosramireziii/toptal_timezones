# Toptal Timezones

## cURL Commands

### Login

```
curl -XGET -L 'http://localhost:8080/auth/identity/callback?auth_key=<email>&password=<password>'
```

### Register

```
curl -XPOST 'http://localhost:8080/auth/identity/register' --data "email=<email>&password=<password>&password_confirmation=<password>"
```

### Time Zone Fetch (List)

```
curl -XGET 'http://localhost:8080/time_zones.json' -H "Authorization: Token token=<token>"
```

### Time Zone Fetch (List w/ filters)

```
curl -XGET 'http://localhost:8080/time_zones.json?name=<filter>' -H "Authorization: Token token=<token>"
```

### Time Zone Create

```
curl -XPOST 'http://localhost:8080/time_zones.json?' -H "Authorization: Token token=<token>" --data "time_zone[name]=<name>&time_zone[city]=<city>"
```

### Time Zone Fetch (Single)

```
curl -XGET 'http://localhost:8080/time_zones/<id>.json' -H "Authorization: Token token=<token>"
```

### Time Zone Update

```
curl -XPATCH 'http://localhost:8080/time_zones/<id>.json' -H "Authorization: Token token=<token>" --data "time_zone[name]=<name>&time_zone[city]=<city>"
```

### Time Zone Delete

```
curl -XDELETE 'http://localhost:8080/time_zones/<id>.json' -H "Authorization: Token token=<token>"
```
