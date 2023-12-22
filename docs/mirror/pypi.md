---
title: PyPI 镜像站配置
sidebar_position: 1
---

PyPI(Python Package Index) 是 Python 的包管理工具 pip (Package installer for python) 的软件仓库

升级 pip:

```bash
python -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip
```

临时使用:

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple xxx
```

设置默认仓库地址:

```bash
pip config --global set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

查看当前配置信息:

```bash
pip3 config list
```
