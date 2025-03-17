# VSCode Shortcuts

- `html:5` - Generates an HTML boilerplate.

---

# Commands

- **Development Server:**
  ```sh
  npx parcel index.html
  ```
- **Production Build:**
  ```sh
  npx parcel build index.html
  ```
  > Ensure `main: app.js` is removed from `package.json`, as Parcel uses `index.html` as the entry point.

---

# Parcel Bundler

Parcel is a powerful zero-config bundler with the following features:

- **Development & Production Builds**
  - Parcel automatically creates optimized development and production builds.
- **Built-in Dev Server**
  - Runs a local server for easy development and live reloading.
- **Hot Module Replacement (HMR)**
  - Uses a file-watching algorithm written in C++ to detect changes and update modules without refreshing the page.
- **Intelligent Caching**
  - Caches files and dependencies to significantly speed up subsequent builds.
- **Image Optimization**
  - Automatically compresses and optimizes images for better performance.
- **JS & CSS Minification**
  - Reduces the file size of JavaScript and CSS to enhance load speed.
- **Code Bundling & Compression**
  - Groups related files together and compresses them for efficient loading.
- **Consistent Hashing**
  - Ensures file versions are correctly identified and cached by browsers.
- **Code Splitting**
  - Automatically splits large codebases into smaller chunks to improve loading times.
- **Differential Bundling**
  - Generates multiple versions of the build to support both modern and older browsers.
- **Diagnostics & Error Reporting in Browser**
  - Displays errors directly in the browser for easier debugging.
- **HTTPS Support**
  - Allows local hosting using HTTPS for secure development.
- **Tree Shaking**
  - Eliminates unused code from the final build to optimize performance.
- **Browser Compatibility Settings**
  - Uses `browserslist` in `package.json` to define browser support:
  ```json
  {
    "browserslist": [
      "last 2 versions"
    ]
  }
  ```
  - This ensures compatibility with the last two major versions of all browsers.

---

# React Basics

### Creating a React Element
```javascript

// This creates the React Element which is just an JS object.
React.createElement('tag', attributes, value | React.createElement[]);
```

### Rendering Elements
```javascript

// Targeting where React should render its elements
// Render the elements in the root element, replacing any existing elements. This transforms the React Element into DOM Elements.
ReactDOM.createRoot(document.getElementById('root')).render();
```

### Package Versioning
- `^` - Allows minor updates.
- `~` - Allows only patch updates.

### Dependency Management
- **Transitive Dependencies** - Dependencies of dependencies.
- **package.json** - Manifest file for the project.
- **package-lock.json** - Ensures consistent dependency versions.
- **npx** - Executes packages without global installation.

### JSX
- JSX is **not** HTML in JS, but an HTML/XML-like syntax.
- JSX is transpiled by Babel into `React.createElement` which is then converted to DOM elements.
- JSX attributes use **camelCase**.
- JSX **sanitizes** code, preventing XSS attacks.

### Component Composition
- The practice of creating new components by combining existing ones.

### Keys in React
- Used to uniquely identify elements in the virtual DOM.
- Prevents unnecessary re-renders and improves performance.
- If the key is not provided, it can cause performance issues by re-rendering all the elements

### Config-Driven UI
- UI built dynamically based on configurations.

---

# React Hooks

### useState & Re-Renders
- State updates trigger re-renders via `setState()`.
- React uses **Reconciliation Algorithm (React Fiber)** to efficiently update the DOM.

### Virtual DOM
- A lightweight JS object representation of the actual DOM  Which is nothing but just the React Elements(JS Object).
- Uses **Diff Algorithm** to update only necessary parts of the real DOM.

### useEffect
```javascript
useEffect(() => {
  // Side effect logic
}, [dependencies]);
```
- Runs after the component renders.
- **No dependency array** → Runs on every render.
- **Empty array `[]`** → Runs only once.
- **Dependencies provided** → Runs when dependencies change.

### Shimmer UI
- Displays a skeleton UI before actual data loads.

---

# React Router DOM

### Core Functions & Components
- `createBrowserRouter`
- `Outlet` for nested routes
- `useRouteError`
- `errorElement`
- `ReactRouteProvider`
- `useParams`

### Routing Types
- **Client-Side Routing**
- **Server-Side Routing**

---

# Tools
- **[CrossProxy.io](https://crossproxy.io)** - Resolves CORS errors.

