
# Git Branching and Commit Conventions

## 1. Purpose

This document defines the Git branching strategy and commit-message convention for Lainne Market. The goal is to keep changes organised, traceable, and easy to review as the project grows.

---

## 2. Branching Strategy

The project uses `main` as the primary branch. It should contain stable, reviewed changes.

New work should be completed on a separate branch and merged into `main` after review and testing.

### Branch Naming Convention

Use lowercase words separated by hyphens.

| Branch Type | Naming Pattern | Example |
|---|---|---|
| Feature | `feature/<short-description>` | `feature/product-catalog` |
| Bug fix | `fix/<short-description>` | `fix/cart-total` |
| Documentation | `docs/<short-description>` | `docs/readme-update` |
| CI/CD | `ci/<short-description>` | `ci/github-actions` |
| Refactoring | `refactor/<short-description>` | `refactor/cart-logic` |
| Testing | `test/<short-description>` | `test/product-catalog` |

### Branch Workflow

1. Start from the latest `main` branch.
2. Create a branch for the task.
3. Make and test the changes.
4. Commit changes using the convention below.
5. Push the branch to GitHub.
6. Review and merge the changes into `main`.
7. Delete the task branch after merging when it is no longer needed.

---

## 3. Commit Message Convention

Lainne Market uses the Conventional Commits format:

`type: short description`

Use a clear, concise description of what the commit changes.

### Commit Types and Examples

| Type | Purpose | Example |
|---|---|---|
| `feat` | Introduces a feature | `feat: add product catalog` |
| `fix` | Fixes a bug | `fix: correct cart total calculation` |
| `docs` | Adds or updates documentation | `docs: document Git workflow` |
| `chore` | Routine maintenance or project organisation | `chore: add backend directory placeholder` |
| `ci` | Changes CI/CD configuration | `ci: add GitHub Actions workflow` |
| `test` | Adds or updates tests | `test: add product catalog tests` |
| `refactor` | Improves code structure without changing behaviour | `refactor: simplify cart logic` |
| `build` | Changes build tools or dependencies | `build: update frontend dependencies` |

### Commit Message Guidelines

- Use the correct type for the change.
- Keep the description short and specific.
- Separate unrelated changes into separate commits where practical.
- Avoid vague messages such as `changes`, `updates`, or `fixed stuff`.
- Never commit passwords, access tokens, or other secrets.

---

## 4. Example Development Workflow

Create a task-specific branch:

```bash
git switch main
git pull origin main
git switch -c feature/product-catalog
```

After making and testing the changes, check which files have changed:

```bash
git status
```

Stage and commit the intended files:

```bash
git add <file-path>
git commit -m "feat: add product catalog"
```

Push the branch to GitHub:

```bash
git push -u origin feature/product-catalog
```

Review the changes and merge the branch into `main` when they are ready.

**Note:** Stage only the files related to your task. Review `git status` before committing to avoid including unrelated files or secrets.

---

## 5. Scope and Future Improvements

This is the initial Git branching and commit policy for Lainne Market.

As the project grows, the workflow may be extended with:

- Pull-request reviews
- Automated testing
- Branch protection rules
- CI/CD quality checks

---

## 6. Summary

- `main` is the primary stable branch.
- Task-specific branches keep changes organised.
- Branch names use a clear type prefix and hyphen-separated descriptions.
- Commit messages follow the `type: short description` format.
- Changes should be reviewed and tested before merging into `main`.
