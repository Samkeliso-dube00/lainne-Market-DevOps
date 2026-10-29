# Lainne Market :Repository Folder Structure

## Purpose

This document defines the repository folder structure for Lainne Market. It separates application code, cloud infrastructure, deployment configuration, observability, testing, and documentation.

## Proposed Structure

```text
lainne-market/
cloud-native-platform/
│
├── app/                          # Application source code
│   ├── frontend/                 # User interface
│   └── backend/                  # Backend services and APIs
│
├── deployment/                   # Application deployment configuration
│   └── kubernetes/               # Kubernetes manifests and resources
│
├── infrastructure/               # Cloud infrastructure provisioning
│   └── terraform/                # Infrastructure as Code (IaC)
│
├── observability/                # Monitoring and observability tools
│   ├── prometheus/               # Metrics collection and monitoring
│   └── grafana/                  # Dashboards and visualization
│
├── scripts/                      # Automation and maintenance scripts
│
├── tests/                        # Automated tests
│
├── docs/                         # Project documentation
│   ├── architecture/             # Architecture diagrams and designs
│   ├── SOP/                      # Standard Operating Procedures
│   └── screenshots/              # Project screenshots and evidence
│
├── .gitignore                    # Files and folders Git should ignore
│
└── README.md                     # Project overview and setup instructions
```

## Folder Responsibilities

| Folder | Responsibility |
|---|---|
| `app/frontend/` | Contains the React/Vite user interface and frontend dependencies. |
| `app/backend/` | Reserved for backend services and APIs. |
| `deployment/kubernetes/` | Contains Kubernetes manifests and deployment resources. |
| `infrastructure/terraform/` | Contains Terraform code for provisioning cloud infrastructure. |
| `observability/prometheus/` | Reserved for Prometheus metrics collection and monitoring configuration. |
| `observability/grafana/` | Reserved for Grafana dashboards and visualization configuration. |
| `.github/workflows/` | Stores GitHub Actions workflow files for CI/CD. |
| `tests/` | Contains automated tests and supporting test resources. |
| `docs/architecture/` | Stores architecture diagrams and design documentation. |
| `docs/SOP/` | Stores Standard Operating Procedures and setup guides. |
| `docs/screenshots/` | Stores screenshots and supporting documentation evidence. |
| `scripts/` | Contains reusable automation and operational scripts. |
| `jira-images/` | Preserves evidence associated with Jira work items. |
| `screenshots/` | Preserves existing application and component screenshots. |

## Design Principles

1. **Separation of concerns:** Each folder has a defined responsibility.
2. **Maintainability:** Related files are grouped together so the repository is easier to navigate.
3. **Automation:** GitHub Actions workflows are stored in `.github/workflows/`, the location GitHub recognizes automatically.
4. **Infrastructure as Code:** Terraform configuration is separated from application source code.
5. **Security:** Secrets and credentials must not be committed to the repository.
6. **Generated files:** Dependency directories such as `node_modules/` and build output such as `dist/` are excluded using `.gitignore`.

## Current Implementation Status

The React/Vite frontend is located in `app/frontend/`. Dependencies were installed using `npm ci`, and the production build completed successfully using `npm run build`.

The `deployment/`, `infrastructure/`, and `observability/` folders are organized for future implementation. Their presence does not mean the associated cloud infrastructure, Kubernetes deployment, monitoring, or CI/CD pipelines are already implemented.

## Jira Acceptance Criteria

- The proposed top-level folder structure is documented.
- The purpose of each folder is described.
- Application, infrastructure, deployment, observability, testing, and documentation responsibilities are separated.
- Existing project files and evidence are preserved.

