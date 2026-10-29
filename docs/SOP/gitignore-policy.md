
# Git Ignore Policy

## 1. Purpose

This document defines the files and directories that must remain outside version control in the Lainne Market repository.

The goal is to keep the repository clean, avoid committing generated files, and protect credentials and sensitive configuration.

---

## 2. Generated Files and Dependencies

The following items should not be committed:

- `node_modules/` : installed JavaScript dependencies.
- `dist/` and `build/` :generated application builds.
- `coverage/` : test coverage output.
- Log files such as `*.log`.
- Python cache files and virtual environments.

These files can generally be regenerated and may unnecessarily increase repository size.

---

## 3. Local Environment Files

Local environment files must be excluded:

- `.env`
- `.env.local`
- `.env.development.local`
- `.env.production.local`
- Other `.env.*` files

Safe templates such as `.env.example` may be committed only when they contain placeholder values and no real credentials.

---

## 4. Secrets and Credentials

The following must never be committed:

- API keys and access tokens.
- Passwords and database connection credentials.
- Cloud provider credentials.
- SSH private keys and TLS private keys.
- Certificates or credential files containing sensitive material.
- Secret files and local credential directories.

Secrets must be stored using appropriate environment variables or a dedicated secrets-management solution.

If a secret is accidentally committed, removing it from `.gitignore` or a later commit is not enough. Revoke or rotate the exposed credential and clean the repository history where necessary.

---

## 5. Terraform and Cloud Files

Exclude local Terraform working directories, state files, and machine-specific overrides:

- `.terraform/`
- `*.tfstate`
- `*.tfstate.*`
- Terraform override files
- Local cloud credential directories

Terraform configuration files such as `.tf` files should normally remain version-controlled. Terraform state can contain sensitive information and must be stored securely.

---

## 6. Editor and Operating-System Files

Exclude local-only files such as:

- `.vscode/` and `.idea/`
- `.DS_Store` and `Thumbs.db`
- Temporary editor files and swap files

Shared editor settings may be committed when they are useful to the team and contain no personal paths or sensitive information.

---

## 7. Review and Verification

Before committing changes:

1. Review `git status`.
2. Check that environment files, credentials, and generated output are excluded.
3. Review staged files before committing.
4. Never commit real secrets, even if they are stored in a file normally allowed by Git.

The root `.gitignore` is the central starting point for these exclusions. Additional rules should be added when new tools or build processes introduce local-only files.

---

## 8. Summary

The repository excludes common dependencies, generated output, local configuration, credentials, private keys, Terraform state, editor files, and temporary files.

Only necessary source code, safe configuration templates, documentation, and project files should be committed.
