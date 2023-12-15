import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';
import Vote from './lib/vote';
import { Octokit } from '@octokit/core';

const app = express();
const port = 3000;

const server = app.listen(process.env.PORT || port, () => {
  console.log('App is listening at ' + (server.address() as AddressInfo).port);
});

app.get('/', (req, res) => {
  res.send('纯爱天下第一');
});

app.get('/vote', async (req: Request, res: Response) => {
  try {
    const issueURL: string | undefined = req.query.issue as string;
    if (!issueURL) {
      res.send('issue not found');
      return;
    }

    const u = new URL(issueURL);
    const issuePath = u.pathname;

    console.log('sending request to ' + issuePath);

    const reaction = await fetchIssueReactions(issuePath);
    const vote = new Vote(reaction.heart, reaction.rocket, reaction.hooray);
    
    console.log("vote info: ", vote);

    res.setHeader("Content-Type","image/svg+xml");
    res.set({
      'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'
    });
    res.send(vote.generateSvg());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch issue' });
  }
});

interface IssueReaction {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

async function fetchIssueReactions(issuePath: string): Promise<IssueReaction> {
  const path = '/repos' + issuePath;

  const headers = {
    accept: 'application/vnd.github+json',
  };

  const octokit = new Octokit({
    auth: process.env.GITHUB_ISSUE_VOTE_API
  });

  const response = await octokit.request(`GET ${path}`, {
    headers: headers,
  });

  const reactions = response.data.reactions;

  return reactions;
}
