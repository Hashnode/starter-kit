# Contributing

We would ❤️ you to contribute to Headless Hashnode Starter kit and help make it better! We want contributing to Hashnode to be fun, enjoyable, and educational for anyone and everyone. All contributions are welcome, including issues, integrations, updates and tweaks.

## How to Start?

If you are worried or don’t know where to start, you can checkout open issues or add new issues and comment your interest and a maintainer can guide you. Alternatively, you can send your questions to anyone from the [Hashnode team on Discord](https://hshno.de/discord).

## Code of Conduct

Help us keep Appwrite open and inclusive. Please read and follow our [Code of Conduct](https://github.com/appwrite/.github/blob/main/CODE_OF_CONDUCT.md).

## Submit a Pull Request 🚀

Branch naming convention is as following

`TYPE-DESCRIPTION`

example:

```
feat-adds-profile-section
```

When `TYPE` can be:

- **feat** - a new feature
- **fix** - a bug fix
- **refactor** - code change that neither fixes a bug nor adds a feature

**All PRs must include a commit message with the description of the changes made!**

For the initial start, fork the project and use git clone command to download the repository to your computer. A standard procedure for working on an issue would be to:

1. `git pull`, before creating a new branch, pull the changes from upstream. Your master needs to be up to date.

```
$ git pull
```

2. Create a new branch from `master` like: `feat-adds-profile-section`.<br/>

```
$ git checkout -b [name_of_your_new_branch]
```

3. Work - commit - repeat (make sure you're on the correct branch!)

4. Push changes to GitHub.

```
$ git push origin [name_of_your_new_branch]
```

5. Submit your changes for review
   If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.
6. Start a Pull Request
   Now submit the pull request and click on `Create pull request`.
7. Get a code review approval/reject.
8. After approval, merge your PR.
9. GitHub will automatically delete the branch after the merge is done. (they can still be restored).

## Setup From Source

To set up a working **development environment**, just fork the project git repository and install the backend and frontend dependencies using the proper package manager and create run the docker-compose stack.

> If you just want to get started with Headless Hashnode for day-to-day use and not as a contributor, you can refer to the [guide](https://hashnode.com/headless) or the [README](README.md) file.

```bash
git clone git@github.com:[YOUR_FORK_HERE]/starter-kit.git

cd starter-kit

pnpm install

npm run dev
```
## Resources
To stay updated with latest updates of Hashnode, you can follow:
- [Changelog](https://hashnode.com/changelog)
- [Hashnode Discord Server](https://hshno.de/discord)
