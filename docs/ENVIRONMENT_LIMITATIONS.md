# Environment limitations and workarounds

This repository is ready to install and push from a normal developer machine or CI runner with internet access. The current coding container has two outbound network restrictions that cannot be fixed inside the repository:

1. `npm install --workspace apps/web --include-workspace-root=false` receives `403 Forbidden` from the configured HTTP proxy when requesting packages from npm.
2. `git push https://github.com/lucenthomelystay-creator/Opwise.git work:main` receives `CONNECT tunnel failed, response 403` from the same proxy.

## npm install workaround

Run the install from a machine/CI runner that can access `https://registry.npmjs.org`:

```bash
npm install --workspace apps/web --include-workspace-root=false
npm --workspace apps/web run build
```

If your local network requires a corporate proxy, configure npm with the proxy that is allowed by your network administrator:

```bash
npm config set proxy http://YOUR_ALLOWED_PROXY:PORT
npm config set https-proxy http://YOUR_ALLOWED_PROXY:PORT
```

## GitHub push workaround

If this container cannot push directly, generate portable Git artifacts and push them from any machine with GitHub access:

```bash
./scripts/export-for-github.sh work dist/github-export
```

Then copy `dist/github-export/opwise-work.bundle` to your machine and run:

```bash
git clone https://github.com/lucenthomelystay-creator/Opwise.git
cd Opwise
git pull ../opwise-work.bundle work
git push origin work:main
```

Alternatively, apply the generated patches:

```bash
git clone https://github.com/lucenthomelystay-creator/Opwise.git
cd Opwise
git am ../patches/*.patch
git push origin HEAD:main
```
