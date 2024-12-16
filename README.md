# GHG Backend Repository
## Description

Here you find the full implementation of Beavr GHG Backend.
The project implements the requirements as simple as possible, while keeping it functional. You will notice that there
are no tests (there's one unit test shown as an example), basic dependency injection usage, no guards and no interceptors
are used.

For the schema, there are 4 basic tables:

- Document: Represents a document that is trying to proof a compliance, for each document type there will be only one
  document.
- Requirement: Represents the requirement for a specific compliance spec/framework.
- RequiredDocumentsForCompliance: Each requirement has at least one required document that is needed to be produced for
  the organization to be compliant. This table keep track of this information.
- DocumentFile: represent an instance of a document that is related to a specific requirement. Each instance has a version,
 expiration date, etc. Thus, requirement is linked to Document through DocumentFile with a Many-to-Many relationship.

## User Stories

### User Story 1: As a CSR Manager, I want to view and manage the compliance status of all CSR requirements.
#### Description:
The CSR manager needs to understand the overall compliance status of the company by viewing all the CSR requirements and their associated compliance statuses in a single page.

#### Acceptance Criteria:

* The requirements page displays a list of all CSR requirements from the database.
* Each requirement includes the following fields:
  * Requirement name description.
  * Compliance status (e.g., "Compliant," "In Progress," "Non-Compliant").
  * Associated required document(s) and the progress.
* The user can change the status of the requirement.

### User Story 2: As a CSR Manager, I want to manage compliance-related documents.
#### Description:
The CSR manager must be able to view and manage all compliance-related documents, including adding new versions, updating their status, and deleting old versions if necessary.

#### Acceptance Criteria:

* The documents page displays a list of all documents group by their document type, with each entry showing:
  * Document name.
  * Current status.
  * Version and expiration date.
* The user can create a new version of a document.
* The user can update the status of a document (e.g., mark it as "Validated").
* The user can delete a specific version of a document.
## Project setup

Install dependencies 
```bash
$ pnpm install
```
Run the DB (You need Docker up & running)
```bash
$ pnpm run db:up 
```
Generate Prisma migration and run it against the local DB
```bash
$ pnpm run prisma:migrate:dev
```
Seed your DB
```bash
$ pnpm run prisma:seed
```
Run the project
```bash
$ pnpm run start:dev
```
## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
