
## GitHub Actions Learning Project

### Project Overview
This repository demonstrates CI/CD workflow development and security practices using GitHub Actions.

### Workflows and Features
- Build, test, and staging deployment jobs
- Node.js matrix testing (versions 20, 22, and 24)
- npm dependency caching
- Build artifact upload and download
- Reusable workflows
- Composite actions
- Least-privilege workflow permissions
- Branch protection and required status checks

### Related Repository
Shared reusable workflows:
https://github.com/KinjalT1810/qable-reusable-workflows

### How to Run Workflows
1. Open the repository's Actions tab.
2. Select the workflow you want to run.
3. Click Run workflow if manual execution is enabled.
4. Open the run and inspect each job's logs.
5. Review uploaded artifacts when available.

### Security Practices
- Grant only the minimum required GITHUB_TOKEN permissions.
- Review third-party actions before using them.
- Consider pinning external actions to full commit SHAs.
- Never print secrets in workflow logs.
- Require successful status checks before merging into main.

### Troubleshooting
- Artifact not found: verify upload/download names and job dependencies.
- Workflow not triggered: check event and branch filters.
- Permission denied: inspect workflow permissions and repository settings.
- Reusable workflow failure: verify repository, file path, reference, and workflow_call inputs.
- Failed tests: inspect the first failing step and its logs.