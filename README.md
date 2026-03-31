# Tokaroo OpenClaw Provider

Tokaroo provider plugin for OpenClaw.

It packages the same managed Tokaroo setup used in the manual OpenClaw docs:

- `https://api.tokaroo.com/v1`
- `TOKAROO_API_KEY`
- `tokaroo/auto`
- `tokaroo/fast`
- `tokaroo/max`

## What it does

- Registers Tokaroo as an OpenClaw provider.
- Prompts for `TOKAROO_API_KEY`.
- Adds the managed Tokaroo model catalog.
- Applies Tokaroo as an OpenClaw provider/default-model preset during onboarding.

## Local install

```bash
pnpm install
pnpm build
pnpm exec openclaw plugins install -l .
pnpm exec openclaw plugins list
```

After linking, restart OpenClaw so the plugin is loaded in your normal session.

## Getting a key

Create a Tokaroo account, activate API access, and create your key at:

- https://tokaroo.com/keys
- https://tokaroo.com/payments
- https://tokaroo.com/integrations/openclaw

## Local development

```bash
pnpm install
pnpm build
pnpm test
```

## Publish status

- Plugin loads successfully in OpenClaw from a local linked path.
- Preferred published install target: `clawhub:tokaroo-openclaw-provider`
- ClawHub publish still requires an authenticated `clawhub login`.
- npm publish still requires npm auth if you want the package on npm in addition to ClawHub.
