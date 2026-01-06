Commit code with formatting check (no push).

Steps:
1. Run `./gradlew spotlessCheck` to verify code formatting
2. If spotlessCheck fails, run `./gradlew spotlessApply` to fix formatting automatically
3. Run `git status` and `git diff` to see changes
4. Commit all changes with a descriptive message

Do NOT push to remote. If there are no changes to commit, inform the user.
