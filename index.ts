import { defineSingleProviderPluginEntry } from "openclaw/plugin-sdk/provider-entry";

import { tokarooProvider } from "./src/provider.js";

export default defineSingleProviderPluginEntry({
  id: "tokaroo-openclaw-provider",
  name: "Tokaroo OpenClaw Provider",
  description: "Routes OpenClaw through Tokaroo's managed auto, fast, and max models.",
  provider: tokarooProvider,
});
