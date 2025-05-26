// Returns a JSON containing the default texts of a specific widget type.
// Usage: npx ts-node -P tsconfig-script.json text-reader <CONTEXT_ID>

import type { LanguagePack } from './src/common/locales/locale';
import { DEFAULT_TEXTS as DEFAULT_TEXTS_13 } from './src/official-widgets/shop-the-look/default-config';

const configs: Record<string, LanguagePack> = {
  13: DEFAULT_TEXTS_13,
};

const args = process.argv.slice(2);

if (args.length) {
  console.log(
      args.includes('--pretty-print')
      ? JSON.stringify(configs[args[0]], null, 2)
      : JSON.stringify(configs[args[0]]),
  );
}
