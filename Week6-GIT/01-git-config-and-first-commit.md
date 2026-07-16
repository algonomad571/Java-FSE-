# GIT HOL 1 — Configuration & First Commit

**Objective:** configure Git, set a default editor, and add a file to a repository.

## Steps & commands

```bash
# 1. Verify Git is installed
git --version

# 2. Configure user-level identity
git config --global user.name  "Your Name"
git config --global user.email "your-email@example.com"

# 3. (Optional) set Notepad++ as the default editor
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"

# 4. Verify configuration
git config --list

# 5. Create a repository and add a file
mkdir GitDemo && cd GitDemo
git init
echo "Hello Git" > readme.txt

# 6. Stage, commit
git status            # readme.txt shows as untracked
git add readme.txt
git status            # now staged (green)
git commit -m "Add readme.txt - first commit"
git log --oneline
```

## Expected outcome
- `git config --list` shows your `user.name` and `user.email`.
- After `git add`, `git status` moves `readme.txt` from *Untracked* to *Changes to be committed*.
- `git log --oneline` shows one commit.
