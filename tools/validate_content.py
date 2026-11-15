#!/usr/bin/env python3
"""Validate content/grade-N.js files.

Each file must look like:   OLY.addGrade({...JSON...});
Checks: schema, unique ids, examples are among tests, every reference
solution passes every test (whitespace-insensitive compare), speed, size.

Usage: python3 tools/validate_content.py content/grade-7.js [more files]
"""
import json, subprocess, sys, time, os

PREFIX, SUFFIX = "OLY.addGrade(", ");"
BLOCK_TYPES = {"p", "h", "code", "tip", "warn", "list", "table"}


def load(path):
    raw = open(path, encoding="utf-8").read().strip()
    if not raw.startswith(PREFIX) or not raw.endswith(SUFFIX):
        raise SystemExit(f"{path}: must start with {PREFIX!r} and end with {SUFFIX!r}")
    return json.loads(raw[len(PREFIX):-len(SUFFIX)]), len(raw.encode())


def run(code, inp, timeout=5):
    t = time.time()
    p = subprocess.run([sys.executable, "-I", "-c", code], input=inp, capture_output=True,
                       text=True, timeout=timeout)
    return p.returncode, p.stdout, p.stderr, time.time() - t


def main(paths):
    errors, ids = [], set()
    for path in paths:
        g, size = load(path)
        if size > 260_000:
            errors.append(f"{path}: file too big ({size} bytes, max 260000)")
        for k in ("grade", "track", "stage", "intro", "topics"):
            if k not in g:
                errors.append(f"{path}: grade missing '{k}'")
        for t in g.get("topics", []):
            tid = t.get("id", "?")
            for k in ("id", "title", "summary", "minutes", "lesson", "quiz", "problems"):
                if k not in t:
                    errors.append(f"{tid}: topic missing '{k}'")
            if tid in ids:
                errors.append(f"duplicate id {tid}")
            ids.add(tid)
            for b in t.get("lesson", []):
                if b.get("type") not in BLOCK_TYPES:
                    errors.append(f"{tid}: bad lesson block type {b.get('type')}")
                if b.get("type") == "code" and b.get("runnable"):
                    rc, out, err, _ = run(b["code"], b.get("input", ""))
                    if rc != 0:
                        errors.append(f"{tid}: lesson code fails:\n{err[-400:]}")
            for q in t.get("quiz", []):
                if not (0 <= q.get("answer", -1) < len(q.get("options", []))):
                    errors.append(f"{tid}: quiz answer index out of range: {q.get('q')}")
            for pr in t.get("problems", []):
                pid = pr.get("id", "?")
                for k in ("id", "title", "level", "statement", "input", "output", "examples",
                          "tests", "hint", "solution", "explain", "starter"):
                    if k not in pr:
                        errors.append(f"{pid}: problem missing '{k}'")
                if pid in ids:
                    errors.append(f"duplicate id {pid}")
                ids.add(pid)
                tests = pr.get("tests", [])
                if len(tests) < 5:
                    errors.append(f"{pid}: needs >= 5 tests (has {len(tests)})")
                tin = [x["in"] for x in tests]
                for ex in pr.get("examples", []):
                    if ex["in"] not in tin:
                        errors.append(f"{pid}: example input not in tests")
                for i, tc in enumerate(tests):
                    if len(tc["in"]) > 30_000:
                        errors.append(f"{pid} test {i+1}: input too big")
                    try:
                        rc, out, err, dt = run(pr["solution"], tc["in"])
                    except subprocess.TimeoutExpired:
                        errors.append(f"{pid} test {i+1}: solution timeout")
                        continue
                    if rc != 0:
                        errors.append(f"{pid} test {i+1}: solution crashed:\n{err[-400:]}")
                    elif out.split() != tc["out"].split():
                        errors.append(f"{pid} test {i+1}: WA expected {tc['out'][:60]!r} got {out[:60]!r}")
                    elif dt > 0.6:
                        errors.append(f"{pid} test {i+1}: too slow for browser ({dt:.2f}s)")
        print(f"{path}: {len(g.get('topics', []))} topics, "
              f"{sum(len(t.get('problems', [])) for t in g.get('topics', []))} problems, {size} bytes")
    if errors:
        print("\n".join("ERROR " + e for e in errors))
        sys.exit(1)
    print("OK")


if __name__ == "__main__":
    main(sys.argv[1:])
