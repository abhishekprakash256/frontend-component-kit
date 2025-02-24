"use strict";
// vite.config.ts
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    build: {
        lib: {
            entry: './src/index.ts', // Entry point of your component library
            name: 'FrontendReactComponents', // New global variable name
            fileName: function (format) { return "frontend-react-components.".concat(format, ".js"); }, // New output file format (es, cjs)
        },
        rollupOptions: {
            // Externalize dependencies that you don't want to include in the library bundle
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React', // If used via CDN, React will be a global variable
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
