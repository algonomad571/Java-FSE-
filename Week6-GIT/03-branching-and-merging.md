# GIT HOL 3 — Branching & Merging

**Objective:** create a branch, commit to it, and merge it back into `master`/`main`.

## Branching

```bash
cd GitDemo

# 1. Create a new branch
git branch GitNewBranch

# 2. List all local (and remote) branches; * marks the current branch
git branch
git branch -a

# 3. Switch to the new branch
git checkout GitNewBranch      # or: git switch GitNewBranch

# 4. Add files with content and commit
echo "feature work" > feature.txt
git add feature.txt
git commit -m "Add feature.txt on GitNewBranch"

# 5. Check status
git status
```

## Merging

```bash
# 6. Switch back to the trunk
git checkout main              # or master

# 7. Show differences between trunk and branch (CLI)
git diff main GitNewBranch

# 8. (Visual) open a merge/diff tool such as P4Merge
git difftool main GitNewBranch

# 9. Merge the branch into the trunk
git merge GitNewBranch

# 10. View the history graph
git log --oneline --graph --decorate

# 11. Delete the merged branch and confirm
git branch -d GitNewBranch
git status
```

## Expected outcome
- `git branch` shows `* GitNewBranch` while on it, then `* main` after switching back.
- After `git merge`, `feature.txt` exists on the trunk and the graph shows the merge.
- `git branch -d` removes the branch cleanly (it was fully merged).
