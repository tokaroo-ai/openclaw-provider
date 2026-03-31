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

## Planned follow-ups

- ClawHub publish metadata and release flow
- Optional onboarding presets for setting Tokaroo as the default OpenClaw provider
- Optional richer provider docs/help text inside OpenClaw
