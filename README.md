# Football Score Simulator backend

## Project structure

The project consists of multiple apps, each of which is responsible for a specific part of the project. The apps are:
- `auth` - authentication and authorization
- `core` - core functionality
- etc.

## Local development

To launch each app locally, you need to run the following command in the root directory:
```bash
nest start <package-name>
```

> Be sure you have nest CLI installed globally

Alternatively, you can run `pnpm start:auth:dev` command to launch the `auth` app. See `package.json` scripts for more details.
