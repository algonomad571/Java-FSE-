# GIT HOL 2 — Ignoring Unwanted Files with .gitignore

**Objective:** ignore `.log` files and a `log/` folder so they are never committed.

## Steps & commands

```bash
cd GitDemo

# 1. Create files/folders that should be ignored
touch app.log
mkdir log
touch log/server.log

# 2. Create a .gitignore that ignores .log files and the log/ folder
cat > .gitignore << 'EOF'
# Ignore all .log files
*.log

# Ignore the log directory
log/
EOF

# 3. Check status - the .log file and log/ folder should NOT appear as untracked
git status

# 4. Commit the .gitignore itself
git add .gitignore
git commit -m "Add .gitignore for logs"

# 5. Prove ignored files stay out even if you try to add them
git add app.log        # Git warns/ignores it
git status
```

## Expected outcome
- After creating `.gitignore`, `git status` shows only `.gitignore` as new — `app.log` and `log/` are hidden.
- `git add app.log` does not stage the file (it's ignored).
