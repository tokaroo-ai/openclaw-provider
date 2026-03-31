import type { SingleProviderPluginOptions } from "openclaw/plugin-sdk/provider-entry";
import type { ModelDefinitionConfig } from "openclaw/plugin-sdk/provider-model-shared";

import {
  TOKAROO_BASE_URL,
  TOKAROO_DEFAULT_MODEL_REF,
  TOKAROO_PROVIDER_ID,
} from "./constants.js";
import { applyTokarooConfig } from "./onboard.js";

export const TOKAROO_PROVIDER_MODELS: ModelDefinitionConfig[] = [
  {
    id: "auto",
    name: "Tokaroo Auto",
    reasoning: true,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: 32768,
  },
  {
    id: "fast",
    name: "Tokaroo Fast",
    reasoning: false,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 128000,
    maxTokens: 16384,
  },
  {
    id: "max",
    name: "Tokaroo Max",
    reasoning: true,
    input: ["text"],
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 200000,
    maxTokens: 32768,
  },
];

export const tokarooProvider = {
  label: "Tokaroo",
  docsPath: "https://tokaroo.com/integrations/openclaw",
  envVars: ["TOKAROO_API_KEY"],
  auth: [
    {
      methodId: "api-key",
      label: "Tokaroo API key",
      hint: "Managed multi-provider routing through one Tokaroo key.",
      optionKey: "tokarooApiKey",
      flagName: "--tokaroo-api-key",
      envVar: "TOKAROO_API_KEY",
      promptMessage: "Enter your Tokaroo API key from https://tokaroo.com/keys",
      defaultModel: TOKAROO_DEFAULT_MODEL_REF,
      applyConfig: (cfg) => applyTokarooConfig(cfg),
      noteTitle: "Tokaroo",
      noteMessage: [
        "Tokaroo routes across OpenAI, Anthropic, Google, and Groq through one key.",
        "Activate API access at https://tokaroo.com/payments before creating your first key.",
        "Docs: https://tokaroo.com/integrations/openclaw",
      ].join("\n"),
      wizard: {
        groupLabel: "Tokaroo",
        groupHint: "Managed multi-provider routing",
      },
    },
  ],
  catalog: {
    buildProvider: () => ({
      api: "openai-completions",
      baseUrl: TOKAROO_BASE_URL,
      models: [...TOKAROO_PROVIDER_MODELS],
    }),
  },
} satisfies NonNullable<SingleProviderPluginOptions["provider"]>;
