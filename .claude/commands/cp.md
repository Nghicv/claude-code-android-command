Commit and push code with formatting check.

Steps:
1. Run `./gradlew spotlessCheck` to verify code formatting
2. If spotlessCheck fails, run `./gradlew spotlessApply` to fix formatting automatically
3. Run `git status` and `git diff` to see changes
4. Commit all changes with a descriptive message
5. Push to remote

If there are no changes to commit, inform the user.
