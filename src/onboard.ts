import { createModelCatalogPresetAppliers } from "openclaw/plugin-sdk/provider-onboard";

import {
  TOKAROO_BASE_URL,
  TOKAROO_DEFAULT_MODEL_REF,
  TOKAROO_PROVIDER_ID,
} from "./constants.js";
import { TOKAROO_PROVIDER_MODELS } from "./provider.js";

const tokarooPresetAppliers = createModelCatalogPresetAppliers({
  primaryModelRef: TOKAROO_DEFAULT_MODEL_REF,
  resolveParams: () => ({
    providerId: TOKAROO_PROVIDER_ID,
    api: "openai-completions",
    baseUrl: TOKAROO_BASE_URL,
    catalogModels: TOKAROO_PROVIDER_MODELS,
  }),
});

export function applyTokarooProviderConfig(cfg: Parameters<typeof tokarooPresetAppliers.applyProviderConfig>[0]) {
  return tokarooPresetAppliers.applyProviderConfig(cfg);
}

export function applyTokarooConfig(cfg: Parameters<typeof tokarooPresetAppliers.applyConfig>[0]) {
  return tokarooPresetAppliers.applyConfig(cfg);
}
