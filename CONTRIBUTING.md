# Contributing

We would ❤️ you to contribute to Headless Hashnode Starter kit and help make it better! We want contributing to Hashnode to be fun, enjoyable, and educational for anyone and everyone. All contributions are welcome, including issues, integrations, updates and tweaks.

## Contribution Guidelines

### General Contributions

While we welcome a wide range of contributions, it's important to align with the project's goals. Here are the types of contributions we value the most:

- **New Features**: Adding new capabilities or tools that enhance the functionality of the starter kit.
- **Bug Fixes**: Resolving existing issues to improve stability and performance.
- **Integrations**: Building connectors or tools that integrate with other services or platforms.
- **Improvements**: Enhancements that add value without altering the core look and feel in a subjective manner.

**Note: We generally do not accept pull requests that solely make cosmetic changes, such as altering font weight, padding, text decoration, etc unless they solve an existing issue or add a new generic feature. This is because we believe that cosmetic changes are subjective and users might have different preferences.**

If your contribution falls into the above categories, we encourage you to submit a pull request!

### Theme Contributions

While we appreciate the creativity in creating new themes, we want to keep the starter kit streamlined and focused on its core themes: Personal, Enterprise, and Hashnode. Therefore, we do not accept direct PRs for adding new themes to the main repository. Instead, we encourage you to:

1. **Host your theme in a separate repository**.
2. **Deploy your theme to a live demo site**.
3. **Open an issue on our GitHub repository and provide the links in the description.**.

We will showcase these themes under the `Community Themes` section in our README, allowing others to discover and use them.

## How to Start?

If you are worried or don’t know where to start, you can checkout open issues or add new issues and comment your interest and a maintainer can guide you. Alternatively, you can send your questions to anyone from the [Hashnode team on Discord](https://hshno.de/discord).

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

1. `git pull`, before creating a new branch, pull the changes from upstream. Your main branch needs to be up to date.

```
$ git pull
```

2. Create a new branch from `main` like: `feat-adds-profile-section`.<br/>

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

To set up a working **development environment**, just fork the project git repository and install the necessary packages with the `pnpm install` command.

> If you just want to get started with Headless Hashnode for day-to-day use and not as a contributor, you can refer to the [guide](https://hashnode.com/headless) or the [README](README.md) file.

```bash
git clone git@github.com:[YOUR_FORK_HERE]/starter-kit.git

cd starter-kit

pnpm install

pnpm run dev
```

<em> Note- Make sure to run `pnpm run dev` in the correct folder. You can find more instructions about it in the [README](https://github.com/Hashnode/starter-kit/?tab=readme-ov-file#running-locally)</em>

## Resources

To stay updated with latest updates of Hashnode, you can follow:

- [Changelog](https://hashnode.com/changelog)
- [Hashnode Discord Server](https://hshno.de/discord)
