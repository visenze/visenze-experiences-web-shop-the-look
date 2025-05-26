// Returns a JSON containing the default config of a specific widget type.
// Usage: npx ts-node -P tsconfig-script.json customization-reader <CONTEXT_ID>

import type { WidgetConfig } from './src/common/wigmix-core';
import { DEFAULT_CUSTOMIZATIONS as DEFAULT_CUSTOMIZATIONS_13 } from './src/official-widgets/shop-the-look/default-config';

const configs: Record<string, WidgetConfig['customizations']> = {
  13: DEFAULT_CUSTOMIZATIONS_13,
};

const args = process.argv.slice(2);

if (args.length) {
  console.log(
      args.includes('--pretty-print')
      ? JSON.stringify(configs[args[0]], null, 2)
      : JSON.stringify(configs[args[0]]),
  );
}
