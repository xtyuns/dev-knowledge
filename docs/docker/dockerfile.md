---
title: Dockerfile
sidebar_position: 4
---

打包 DB-GPT(proxyllm): https://github.com/eosphoros-ai/DB-GPT/tree/v0.4.3

```Dockerfile
FROM xtyuns/debian-tuna:bookworm

# 安装依赖软件包
RUN apt-get install -y git python3 pip python3-venv wget sqlite3 tzdata \
    && apt-get clean

# 设置工作目录
WORKDIR /app

# 配置默认 python venv 环境
RUN pip config --global set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  \
    && python3 -m venv /opt/dbgptpyenv
ENV PATH="/opt/dbgptpyenv/bin:$PATH"

# 复制文件
COPY setup.py setup.py
COPY README.md README.md

# 安装程序依赖
RUN pip install ".[openai]"

# 安装其他依赖
RUN wget https://mirror.ghproxy.com/github.com/explosion/spacy-models/releases/download/zh_core_web_sm-3.5.0/zh_core_web_sm-3.5.0-py3-none-any.whl -O /tmp/zh_core_web_sm-3.5.0-py3-none-any.whl
RUN pip install /tmp/zh_core_web_sm-3.5.0-py3-none-any.whl && pip cache purge

# 复制 python 主程序
COPY . /app

# 初始化演示数据
RUN mkdir -p /app/pilot/data && sqlite3 /app/pilot/data/default_sqlite.db < /app/docker/examples/sqls/case_1_student_manager_sqlite.sql \
    && sqlite3 /app/pilot/data/default_sqlite.db < /app/docker/examples/sqls/case_2_ecom_sqlite.sql \
    && sqlite3 /app/pilot/data/default_sqlite.db < /app/docker/examples/sqls/test_case_info_sqlite.sql

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone

# 将当前应用加入 python 环境变量
ENV PYTHONPATH "/app:$PYTHONPATH"

# 声明应用端口
EXPOSE 5000

# 指定容器默认执行命令
CMD ["dbgpt", "start", "webserver"]
```
