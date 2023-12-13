# github-issue-vote

使用 GitHub Issue Reaction 进行投票.

如果你喜欢这个程序，可以帮忙给一个 star (o゜▽゜)o☆ ，谢谢 OwO。

## 使用示例

这是一个在 [github.com/acgtools/hanime-hunter](https://github.com/acgtools/hanime-hunter) 中的示例, 点击这里 [here](https://github.com/acgtools/hanime-hunter/issues/3) 然后选择一个表情:  纯爱战士 ❤️, 牛头人：🚀

<img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/202312102326405.jpg" height=180> <img src="https://github-issue-vote.vercel.app/vote?issue=https://github.com/acgtools/hanime-hunter/issues/3" height=190> <img src="https://raw.githubusercontent.com/dreamjz/pics/main/pics/2023/202312102326670.jpg" height=180>

## 快速开始

### Fork 仓库然后部署至 Vercel

Fork 这个仓库然后部署你自己的 Vercel 服务。

> 你可以设置环境变量 `GITHUB_ISSUE_VOTE_API` 为你的 GitHub personal token 来增加 GitHub API 的限流阈值.

### 修改代码

你需要修改代码来满足你的需求。

#### Issue Reactions

`app.ts`:

```ts
interface IssueReaction {
  ...
  total_count: number; // 表情总数
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
  // 修改这些字段来满足需求
  private heart: number; 
  private rocket: number;

  constructor(heart: number, rocket: number ) { 
    this.heart = heart;
    this.rocket = rocket;
  }

  generateSvg(): string {    
   // 计算投票结果并渲染 svg 图片   
  }
```

