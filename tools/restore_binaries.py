# -*- coding: utf-8 -*-
"""把仓库里的 .b64 / .gz.b64 资产还原成真实文件。

背景：GitHub 连接器只能内联推送文本，推不了二进制；超过单次上限的大文件
（app_v4.js 376KB、style4.css 171KB）也用 gzip+base64 存放。
在仓库根目录执行：python tools/restore_binaries.py
"""
import base64
import gzip
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def restore(path):
    with open(path, 'r', encoding='utf-8') as f:
        payload = f.read().strip()
    if path.endswith('.gz.b64'):
        raw = gzip.decompress(base64.b64decode(payload))
        out = path[:-len('.gz.b64')]
    else:
        raw = base64.b64decode(payload)
        out = path[:-len('.b64')]
    d = os.path.dirname(out)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(out, 'wb') as f:
        f.write(raw)
    print('%-52s -> %s (%d bytes)' % (os.path.relpath(path, ROOT),
                                      os.path.relpath(out, ROOT), len(raw)))


n = 0
for dirpath, dirnames, filenames in os.walk(ROOT):
    if '.git' in dirpath:
        continue
    for fn in filenames:
        if fn.endswith('.b64'):
            restore(os.path.join(dirpath, fn))
            n += 1
print('还原 %d 个文件' % n)
