# Umeme Upo Contribution Guide

## Welcome Contributors!

Thank you for considering contributing to Umeme Upo! We appreciate your time and effort to make this project better. Please take a moment to review this document in order to understand how to contribute.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Supabase & Database & API](#supabase--database--api)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
- [Contributing](#contributing)
  - [Creating an Issue](#creating-an-issue)
  - [Working on an Issue](#working-on-an-issue)
  - [Creating a Branch](#creating-a-branch)
  - [Making Changes](#making-changes)
  - [Creating a Pull Request](#creating-a-pull-request)
- [Code of Conduct](#code-of-conduct)

## Getting Started

### Prerequisites

Before you start contributing, make sure you have the following installed:

- Node version 18.0.0 or higher
- Supabase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fredygerman/umeme-upo.git
   cd umeme-upo
   ```

2. Install project dependencies using pnpm:

```bash
pnpm install
```

3. Create a `.env` file using the `.env.example` file as a template:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
pnpm dev
```

### Supabase & Database & API

1. Create a [Supabase](https://supabase.io/) account.

2. Create a new project.

3. Create the following tables in your Supabase project:

The example schema for the database per area is as follows:

```sql
-- Create makumbusho_logs table
CREATE TABLE makumbusho_logs (
    id serial PRIMARY KEY,
    created_at timestamptz DEFAULT now(),
    errors jsonb DEFAULT '{}',
    source text
);
```

```sql
-- Create makumbusho_errors table
CREATE TABLE makumbusho_errors (
    id serial PRIMARY KEY,
    created_at timestamptz DEFAULT now(),
    errors jsonb DEFAULT '{}',
    source text
);
```

### Environment Variables

The `.env` file contains the following environment variables:

- `NEXT_PUBLIC_SUPABASE_URL` - The URL of your Supabase project.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - The public API key of your Supabase project.
- `NEXT_PUBLIC_APP_URL` - The URL of your frontend application.
- `NEXT_PUBLIC_ENV` - The environment of your application. This can be `development` or `production`.

### Running the Project

1. Start the development server:

```bash
pnpm dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

### Creating an Issue

Before you start working on a feature or a bug fix, you should create an issue. This will allow you to get feedback from the maintainers and other contributors before you start working on it.

1. Go to the [issues page](https://github.com/fredygerman/umeme-upo/issues) and click on the "New Issue" button.

2. Select the type of issue you want to create (bug report, feature request, or question).

3. Fill out the form with the required information.

4. Click on the "Submit new issue" button.

### Working on an Issue

1. Go to the [issues page](https://github.com/fredygerman/umeme-upo/issues) and select an issue to work on.

2. Leave a comment on the issue to let others know that you are working on it.

3. Follow the steps in the [Installation](#installation) section to set up the project.

4. Follow the steps in the [Creating a Branch](#creating-a-branch) section to create a branch for your changes.

5. Follow the steps in the [Making Changes](#making-changes) section to make changes to the codebase.

6. Follow the steps in the [Creating a Pull Request](#creating-a-pull-request) section to create a pull request.

### Creating a Branch

1.  Make sure you are on the `develop` branch:

    ```bash
    git checkout develop
    ```

2.  Create a new branch:
    `bash
git checkout -b <username>/feature/<feature-name>
`

3.  Push the branch to GitHub:

    ```bash
    git push -u origin <username>/feature/<feature-name>
    ```

### Making Changes

1. Make sure you are on the branch you created in the [Creating a Branch](#creating-a-branch) section.

2. Make changes to the codebase.

3. Commit your changes:

   ```bash
   git add .
   git commit -m "commit message"
   ```

4. Push your changes to GitHub:

   ```bash
    git push
   ```

### Creating a Pull Request

1. Go to the [pull requests page](https://github.com/fredygerman/umeme-upo/pulls) and click on the "New pull request" button.

2. Select the branch you created in the [Creating a Branch](#creating-a-branch) section.

3. Fill out the form with the required information.

4. Click on the "Create pull request" button.

## Code of Conduct

Please read the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.
