---
title: MySQL
sidebar_position: 20
---

备份整个数据库

```MySQL
mysqldump -u root -p --all-databases > mysql.sql
```

查询数据表占用空间

```MySQL
SELECT table_schema AS `Database`,
       table_name AS `Table`,
       round(((data_length + index_length) / 1024 / 1024), 2) `Size in MB`
FROM information_schema.TABLES
ORDER BY (data_length + index_length) DESC;
```

优化表空间

```MySQL
OPTIMIZE table ANY_TABLE_NAME;
```
