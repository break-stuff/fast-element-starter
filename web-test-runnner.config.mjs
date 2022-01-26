import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default ({
  files: 'src/**/*.test.ts',
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'webkit' }),
    playwrightLauncher({ product: 'firefox' })
  ],
  nodeResolve: true,
  rootDir: '.',

  plugins: [
    esbuildPlugin({ ts: true })
  ]
});
