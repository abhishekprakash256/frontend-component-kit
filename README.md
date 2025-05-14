# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {  
    // other options...
    parserOptions: {  
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
```


### Commands 

```bash
npm run build   

tsc -b  #to build the dist files

npm run dev

```

### Note

After the tsc -b command copy the styles dir and the asset in dist as well 

### Install   

```bash
npm install git@github.com:abhishekprakash256/front-end-component-kit.git#branch  (if branch needed)
```

### Notes 

✅ Vite = Client-Side Rendering (No SSR) → Works normally
✅ Next.js = Server-Side Rendering (SSR) + Hydration → Needs careful handling
✅ Fix hydration issues using useEffect()
✅ Fix Bootstrap styling issues with d-flex justify-content-center flex-wrap
✅ Move CSS imports to _app.tsx in Next.js
Now your component should behave the same way in both Vite and Next.js! 



### install as 


// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# front-end-component-kit
