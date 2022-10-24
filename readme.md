# ReactUI Integrations

[![npm package](https://badge.fury.io/js/%40aboutbits%2Freact-ui-integrations.svg)](https://badge.fury.io/js/%40aboutbits%2Freact-ui-integrations)
[![license](https://img.shields.io/github/license/aboutbits/react-ui-integrations)](https://github.com/aboutbits/react-ui-integrations/blob/main/license.md)

This is a collection of tools for various libraries to integrate [About Bit's ReactUI](https://github.com/aboutbits/react-ui) into a project.

## Table of content

- [Usage](#usage)
- [Supported libraries](#supported-libraries)
  - [Next.js](#nextjs)
  - [Webpack](#webpack)
- [Configuration](#configuration)
- [Build & Publish](#build--publish)
- [Information](#information)
  - [Support](#support)
  - [Credits](#credits)
  - [License](#license)

## Usage

1. Install the package

   ```bash
   npm install -D @aboutbits/react-ui-integrations
   ```

2. Add a `reactui.config.js` to your project's directory

   See [Configuration](#configuration) for available options.

   ```js
   module.exports = {
     theme: {
       override: [...],
       merge: [...]
     }
   }
   ```

3. Pass the `REACTUI_THEME` to your `ReactUIProvider` instance:

   ```jsx
   import { ReactUIProvider, Theme } from '@aboutbits/react-ui'
   import React from 'react'

   declare const REACTUI_THEME: Theme

   export const Layout: React.FC = ({ children }) => {
     return <ReactUIProvider theme={REACTUI_THEME}>{children}</ReactUIProvider>
   }
   ```

4. Configure the Tailwind CSS plugin

   `tailwind.config.js`:

   ```js
   module.exports = {
     plugins: [
       // Basic configuration
       require('@aboutbits/react-ui-integrations').useTailwindPlugin(),

       // Configuration with custom config file
       require('@aboutbits/react-ui-integrations').useTailwindPlugin({
         configFile: resolve('./reactui_custom.config.js'),
       }),
     ],
   }
   ```

   **Optional configuration options**

   - `configFile`: Absolute path to an alternative configuration file

5. Configure the respective library in your project

   See [Supported libraries](#supported-libraries).

## Supported libraries

### Next.js

`next.config.js`:

```js
const { withReactUI } = require('@aboutbits/react-ui-integrations')

let nextConfig = {} // your NextJS config

// Basic configuration
nextConfig = withReactUI(nextConfig)

// Configuration with custom theme variable and config file
nextConfig = withReactUI(nextConfig, {
  themeVariable: 'REACTUI_THEME_CUSTOM',
  configFile: path.resolve('./reactui_custom.config.js'),
})

module.exports = nextConfig
```

**Optional configuration options**

- `themeVariable`: Configure the variable name to which the ReactUI theme will be bound (by Webpack's DefinePlugin).
- `configFile`: Absolute path to an alternative configuration file

### Webpack

`webpack.config.js`:

```js
const { ReactUIWebpackPlugin } = require('@aboutbits/react-ui-integrations')

module.exports = {
  plugins: [
    // Basic configuration
    new ReactUIWebpackPlugin(),

    // Configuration with custom theme variable and config file
    new ReactUIWebpackPlugin({
      themeVariable: 'REACTUI_THEME_CUSTOM',
      configFile: path.resolve('./reactui_custom.config.js'),
    }),
  ],
}
```

**Optional configuration options**

- `themeVariable`: Configure the variable name to which the ReactUI theme will be bound (by Webpack's DefinePlugin).
- `configFile`: Absolute path to an alternative configuration file

### Jest

`webpack.config.js`:

```js
const { getTheme } = require('@aboutbits/react-ui-integrations')

module.exports = {
  globals: {
    REACTUI_THEME: getTheme(),
  },
}
```

**Optional configuration options**

- `configFile`: Absolute path to an alternative configuration file

## Configuration

These configuration options are available to be set in the `reactui.config.js`:

- `theme.override` / `theme.merge`

  Extend ReactUI theme configuration. Starting with version 1.0 you have the option to override or merge the ReacUI's default theme configuration.

## Build & Publish

To publish the package commit all changes and push them to main. Then run one of the following commands locally:

```bash
npm version patch
npm version minor
npm version major
```

## Information

About Bits is a company based in South Tyrol, Italy. You can find more information about us
on [our website](https://aboutbits.it).

### Support

For support, please contact [info@aboutbits.it](mailto:info@aboutbits.it).

### Credits

- [All Contributors](../../contributors)

### License

The MIT License (MIT). Please see the [license file](license.md) for more information.
