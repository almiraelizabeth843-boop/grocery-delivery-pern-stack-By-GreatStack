# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# Folder Structure + React Router Setup

- The installations for this topic are listed in install.txt.
- Created 4 folders in the src folder: Components, Context, Pages, and Types.
- Created 11 page files in the pages folder.
- Used **BrowserRouter** for routing and imported it in 'main.tsx'. (This approach is not suitable for large projects).
- In 'App.tsx', imported **toaster** for toast messages and styled it.
- Also imported **Routes** and **Route** in 'App.tsx' for routing.
- There is one **Routes** component for the parent branch and 2 **Route** components for sub-routing branches. One is for Auth pages, and the other is for Main pages that include Nav and Footer.
- In that sub-routing branch, we created another **Route** branch for logged-in users.
- In the **Route** for main pages, we used 'AppLayout' from 'AppLayout.tsx', which contains the Outlet.
- In 'AppLayout.tsx', we wrote the JSX elements that will be displayed on all pages except the login page.
- In the **Route** for pages accessible only to logged-in users, we used 'ProtectedRoute' from '@/components/ProtectedRoute', which contains the Outlet.

# Login Page

```
    # Login Page

- Created a 'Login' function expression in Login.tsx
- Used the 'useState' hook to create 5 const variables for the login state
- Also created an async 'handleSubmit' function to handle the submit button
- Coded a div that displays content with minimum screen height and flex layout. Then divided the content into two parts: left and right.
- On the left side, added a div where we placed a background image, and over that image, we added the title and description.
- That div is hidden on mobile screens but displayed on desktop screens only. It uses the 'lg' breakpoint for large screens with flex display.
- Added an 'img' tag in that div, which is exported from 'assets.ts' in the assets folder, and styled it accordingly.
- Then added a div containing an h2 tag and p tags for the description, and styled them accordingly.
- On the right side, we created a header message form. In this part, we used 'isLoginState' to show the appropriate message. When we click the button, the form and header message change on the same page without navigating to another screen.
- After that, we created login and register forms for both Signup and Sign In. For the Signup form, we validated it using 'isLoginState' and the not (!) operator to conditionally show the name input. So, it will not appear on the Sign In form.
- In the same form, we created a submit button with a loading icon that spins when the button is disabled. The "Sign Up" and "Sign In" texts are shown according to the form type.
```
