#!/usr/bin/env python3
"""Build a static copy of the site for GitHub Pages (or any static hosting).

index.html in the project is a page body without <!doctype>/<html>/<body>, because the
artifact host adds that skeleton. Static hosts serve files as is, so here we wrap it.

Usage: python3 tools/build_pages.py OUT_DIR [DOMAIN]
With DOMAIN (e.g. pystart.kz) a CNAME file is written, so GitHub Pages serves the site there.
"""
import os, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKELETON = ('<!doctype html>\n<html lang="kk">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}'
            'body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style>\n'
            '</head>\n<body>\n{}\n</body>\n</html>\n')
COPY = ['app.js', 'README.md', 'content', 'vendor', 'tools']


def main(out, domain=None):
    os.makedirs(out, exist_ok=True)
    for name in COPY:
        src, dst = os.path.join(ROOT, name), os.path.join(out, name)
        if os.path.isdir(src):
            shutil.copytree(src, dst, dirs_exist_ok=True, ignore=shutil.ignore_patterns('__pycache__'))
        else:
            shutil.copy2(src, dst)
    page = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
    with open(os.path.join(out, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(SKELETON.replace('{}', page))
    open(os.path.join(out, '.nojekyll'), 'w').close()  # serve files as is, no Jekyll processing
    if domain:
        with open(os.path.join(out, 'CNAME'), 'w') as f:
            f.write(domain + '\n')
    print('built', out, domain or '')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
