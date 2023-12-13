# github-issue-vote

English | [简体中文](./README_ZH_CN.md)

Using GitHub Issue Reactions to vote.

If you like this repo, please consider giving it a star (o゜▽゜)o☆ . Thank you OwO.

## Example

Here is an example in [github.com/acgtools/hanime-hunter](https://github.com/acgtools/hanime-hunter)

Check [here](https://github.com/acgtools/hanime-hunter/issues/3) and chooes a reaction:  Pure Love Knight ❤️, NTR Warrior：🚀

<img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/202312102326405.jpg" height=180> <img src="https://github-issue-vote.vercel.app/vote?issue=https://github.com/acgtools/hanime-hunter/issues/3" height=190> <img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/202312102326670.jpg" height=180>

## Quick Start

### Fork this repo and deploy

Fork this repo and deploy your own Vercel service.

> You can set the environment variable `GITHUB_ISSUE_VOTE_API` to your own GitHub personal token to increase the GitHub API rate limit.

### Make modification

You need to make some modifications to fit your own needs.

#### Issue Reactions

`app.ts`:

```ts
interface IssueReaction {
  ...
  total_count: number; // the total count of all reactions
  ...
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}
```

#### Vote class

`./lib/vote.ts`:

```ts
class Vote {
  // change these fields to fit your needs
  private heart: number; 
  private rocket: number;

  constructor(heart: number, rocket: number ) { 
    this.heart = heart;
    this.rocket = rocket;
  }

  generateSvg(): string {    
   // calculate the result and render the svg   
  }
```

