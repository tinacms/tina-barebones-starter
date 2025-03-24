# TinaCMS Next.js TypeScript Starter

## Introduction

This project utilizes [TinaCMS](https://tina.io/), a git-backed, React-based headless CMS that enables seamless content management. This system allows both technical and non-technical users to maintain website content through an intuitive interface.

## Local Development

### Cloning the Repository

This repository is available on both Radicle and GitHub:

#### Radicle (Recommended)

Clone using [the Radicle CLI](https://github.com/radicle-dev/heartwood):

```bash
rad clone rad:z3nSm4EXspD9WXm6H2Zj7rLqcbn4h
```

Or clone from the public Radicle seed node using standard `git`:

```bash
git clone https://seed.radicle.garden/z3nSm4EXspD9WXm6H2Zj7rLqcbn4h.git tina-next-ts
```

#### GitHub (Alternative)

If using GitHub, clone from the `dev/main` branch to avoid propagating GitHub-specific references to Radicle:

```bash
git clone -b dev/main https://github.com/Chen-Software/tina-next-ts.git
```

**Note**: The Radicle version is considered the canonical source of truth.

### Setup & Running

#### 1. Install dependencies

```bash
pnpm install
```

#### 2. Start development server

```bash
pnpm dev
```

#### 3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build (Using TinaCMS Content API)

#### 1. Create `.env` file from template

```bash
cp .env.example .env
```

#### 2. Configure environment variables

```env
NEXT_PUBLIC_TINA_CLIENT_ID=<From Tina.io Dashboard>
TINA_TOKEN=<From Tina.io Dashboard> 
NEXT_PUBLIC_TINA_BRANCH=<Branch with Tina configuration>
```

#### 3. Build the project

```bash
pnpm build
```

## Content Management

### Admin Interface Access

Access the CMS dashboard at:

```txt
https://localhost:3000/admin
```

For direct page editing:

```txt
https://localhost:3000/admin#/collections/edit/page/{page-name}
```

Replace `{page-name}` with your target page (e.g., `about`)

### Editing Workflow

1. **Authentication**: Login with your credentials
2. **Navigation**: Use sidebar to locate content sections
3. **Modification**: Edit content using visual/WYSIWYG controls
4. **Versioning**: Changes auto-save to `content/main` branch

## Publishing Process

### Branch Strategy

- `content/main`: Contains CMS-generated content changes
- `main`: Production branch combining code and content

### Deployment Steps

#### 1. Create PR from `content/main` to `main`

   ```txt
   https://github.com/Chen-Software/tina-next-ts/compare/main...content/main
   ```

#### 2. Review changes in GitHub interface

#### 3. Merge PR to publish updates

## Branch Management

- 🔄 **Automatic Commits**: CMS edits directly push to `content/main`
- 🛡️ **Protected Branches**: 
  - `main`: Requires PR review
  - `content/main`: CMS-write protected
- ⚡ **Sync Frequency**: Merge `content/main` → `main` regularly

## Troubleshooting

| Issue                  | Solution                                  |
|------------------------|-------------------------------------------|
| Edits not visible      | Verify PR merge from `content/main`       |
| Authentication failure | Contact admin for credential refresh      |
| Formatting issues      | Validate markdown syntax in CMS interface |

For advanced configurations, consult the [TinaCMS documentation](https://tina.io/docs/).
