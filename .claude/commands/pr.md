Commit, push, and create pull request to main branch.

Steps:
1. Check current branch with `git branch --show-current`
2. If on `main` branch, create a new feature branch with a descriptive name based on the changes (e.g., `feature/fix-tts-stop-on-exit`, `feature/add-dark-mode`)
3. Run `./gradlew spotlessCheck` to verify code formatting
4. If spotlessCheck fails, run `./gradlew spotlessApply` to fix formatting automatically
5. Run `git status` and `git diff` to see changes
6. Commit all changes with a descriptive message
7. Push to remote with `-u` flag to set upstream
8. Create a pull request to `main` branch using `gh pr create`

If there are no changes to commit, inform the user.
