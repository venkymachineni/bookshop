//const cds = require('@sap/eslint-plugin-cds');



// module.exports = [
//   cds.configs.recommended,
//   {
//     plugins: {
//       '@sap/cds': cds
      
//     },
//     rules: {
//       ...cds.configs.recommended.rules
//     }
//   }
// ]

// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
