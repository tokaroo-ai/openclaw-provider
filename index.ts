import { defineSingleProviderPluginEntry } from "openclaw/plugin-sdk/provider-entry";

import { tokarooProvider } from "./src/provider.js";

export default defineSingleProviderPluginEntry({
  id: "tokaroo",
  name: "Tokaroo",
  description: "Routes OpenClaw through Tokaroo's managed auto, fast, and max models.",
  provider: tokarooProvider,
});
