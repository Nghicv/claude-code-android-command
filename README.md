# Claude Code Android Commands

Custom Claude Code commands for Android development workflow with Gradle and Spotless.

## Quick Install

Run this command in your Android project root:

```bash
npx claude-code-android-command
```

That's it! The `.claude/commands` folder will be automatically created in your project.

## Available Commands

### `/commit`
Commit code with formatting check (no push).

**Steps:**
1. Run `./gradlew spotlessCheck` to verify code formatting
2. If spotlessCheck fails, run `./gradlew spotlessApply` to fix formatting automatically
3. Run `git status` and `git diff` to see changes
4. Commit all changes with a descriptive message

**Usage:**
```
/commit
```

### `/cp`
Commit and push code with formatting check.

**Steps:**
1. Run `./gradlew spotlessCheck` to verify code formatting
2. If spotlessCheck fails, run `./gradlew spotlessApply` to fix formatting automatically
3. Run `git status` and `git diff` to see changes
4. Commit all changes with a descriptive message
5. Push to remote

**Usage:**
```
/cp
```

### `/pr`
Commit, push, and create pull request to main branch.

**Steps:**
1. Check current branch with `git branch --show-current`
2. If on `main` branch, create a new feature branch with a descriptive name
3. Run `./gradlew spotlessCheck` to verify code formatting
4. If spotlessCheck fails, run `./gradlew spotlessApply` to fix formatting automatically
5. Run `git status` and `git diff` to see changes
6. Commit all changes with a descriptive message
7. Push to remote with `-u` flag to set upstream
8. Create a pull request to `main` branch using `gh pr create`

**Usage:**
```
/pr
```

## Manual Installation

If you prefer manual installation:

```bash
git clone https://github.com/Nghicv/claude-code-android-command.git
cp -r claude-code-android-command/.claude .
rm -rf claude-code-android-command
```

## Requirements

- **Node.js** (for npx installation)
- **Gradle** with Spotless plugin configured in your Android project
- **Git**
- **GitHub CLI** (`gh`) for `/pr` command

## What Gets Installed?

```
your-project/
└── .claude/
    └── commands/
        ├── commit.md
        ├── cp.md
        └── pr.md
```

These commands become available as project-specific skills in Claude Code.

## Notes

- ✅ Optimized for Android projects using Spotless for code formatting
- ✅ All commands include automatic formatting fixes before committing
- ✅ Safe to run multiple times (existing files will be overwritten)
- ✅ Works with any Android project structure

## Examples

After installation, in Claude Code:

```
User: /commit
Claude: [Runs spotlessCheck, applies formatting if needed, shows diff, and commits]

User: /pr
Claude: [Checks branch, formats code, commits, pushes, and creates PR with description]
```

## License

MIT

## Repository

https://github.com/Nghicv/claude-code-android-command
