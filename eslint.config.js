const cds = require('@sap/eslint-plugin-cds');

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = [
  ...tseslint.configs.recommended,
  eslint.configs.recommended,
  cds.configs.recommended, 
 {
  ignores: ["eslint.config.js", "node_modules/*"],
 },
  {
    plugins: {
      '@sap/cds': cds
      
    },
       
    rules: {
      ...cds.configs.recommended.rules,
    }
    
  },
  
 
]

// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';

// export default tseslint.config(
//   eslint.configs.recommended,
//   ...tseslint.configs.recommended,
// );
