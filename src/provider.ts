import type { SingleProviderPluginOptions } from "openclaw/plugin-sdk/provider-entry";
import type { ModelDefinitionConfig } from "openclaw/plugin-sdk/provider-model-shared";

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
      hint: "Get your API key from tokaroo.com after activating API access.",
      optionKey: "tokarooApiKey",
      flagName: "--tokaroo-api-key",
      envVar: "TOKAROO_API_KEY",
      promptMessage: "Enter your Tokaroo API key from https://tokaroo.com/keys",
      defaultModel: "tokaroo/auto",
    },
  ],
  catalog: {
    buildProvider: () => ({
      api: "openai-completions",
      baseUrl: "https://api.tokaroo.com/v1",
      models: [...TOKAROO_PROVIDER_MODELS],
    }),
  },
} satisfies NonNullable<SingleProviderPluginOptions["provider"]>;
