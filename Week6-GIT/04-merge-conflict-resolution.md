# GIT HOL 4 — Resolving a Merge Conflict

**Objective:** deliberately create a conflict on `hello.xml` and resolve it.

## Steps & commands

```bash
cd GitDemo

# 1. Ensure master is clean
git status

# 2. Create a branch and add hello.xml
git branch GitWork
git checkout GitWork
echo "<msg>Hello from branch</msg>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml on GitWork"

# 3. Switch to master and add hello.xml with DIFFERENT content
git checkout main
echo "<msg>Hello from master</msg>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml on master"

# 4. View history
git log --oneline --graph --decorate --all

# 5. Merge the branch -> conflict on hello.xml
git merge GitWork
# Git marks the file:
#   <<<<<<< HEAD
#   <msg>Hello from master</msg>
#   =======
#   <msg>Hello from branch</msg>
#   >>>>>>> GitWork

# 6. Inspect the conflict / use a 3-way merge tool
git diff
git mergetool          # opens P4Merge (or configured tool)

# 7. Manually edit hello.xml to the resolved content, then:
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"

# 8. Ignore editor backup files, commit .gitignore
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignore .orig backup files"

# 9. Clean up
git branch              # list branches
git branch -d GitWork
git log --oneline --graph --decorate
```

## Expected outcome
- `git merge GitWork` reports a **CONFLICT** in `hello.xml`.
- After editing + `git add` + `git commit`, the merge completes.
- `git log --graph` shows both commits joined by the merge commit.
