import { describe, expect, it } from "vitest";

import { TOKAROO_BASE_URL, TOKAROO_DEFAULT_MODEL_REF } from "./constants.js";
import { TOKAROO_PROVIDER_MODELS, tokarooProvider } from "./provider.js";

describe("tokaroo provider", () => {
  it("publishes the managed Tokaroo catalog", () => {
    const provider = tokarooProvider.catalog.buildProvider();
    expect(provider.api).toBe("openai-completions");
    expect(provider.baseUrl).toBe(TOKAROO_BASE_URL);
    expect(provider.models).toEqual([...TOKAROO_PROVIDER_MODELS]);
  });

  it("defaults auth onboarding to tokaroo/auto", () => {
    expect(tokarooProvider.auth[0]?.defaultModel).toBe(TOKAROO_DEFAULT_MODEL_REF);
    expect(tokarooProvider.auth[0]?.envVar).toBe("TOKAROO_API_KEY");
  });
});
