export default {
  base: "master",
  // A fresh worktree has no node_modules, so verify installs first.
  verify: "npm ci && npm run check",
  maxTasks: 10,
  maxHours: 4,
  concurrency: 1,
  runner: "claude",
  model: "sonnet",
  // Off: each pull request waits for Cody to merge it before the next ticket starts.
  chain: "",
  shell: "",
  pull: "gh issue list --assignee=@me --state=open --limit=50 --json=number,title,body,url,labels",
}
