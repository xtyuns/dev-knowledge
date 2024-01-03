---
title: DockerCompose
sidebar_position: 3
---

安装 portainer-ce

```DockerCompose
portainer docker compose:
version: '3.8'

services:
  app:
    image: portainer/portainer-ce:2.19.4
    ports:
      - 9000:9000
      - 9443:9443
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - app_data:/data
    restart: unless-stopped
volumes:

  app_data: {}
```
