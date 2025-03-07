## Shortcuts In VsCode

html:5 - creates html boiler plate


## Commands

npx parcel index.html 
npx parcel build index.html -- To create Production build . You need remove the main : app.js from package.json as parcel uses index.html as entry point.    

## Parcel

- Creates Dev Build
- Creates Prod Build
- Creates Dev Server
- Create HMR - Hot Module Replacement
- It uses File Watching Algorithm built in C++ to perform HMR where on saving file it will re-render the application without refreshing the page.
- It also Caches the files and the dependencies for faster builds.
- It also does Image Optimization.
- It does Minification of JS and CSS.
- It Bundles the code.
- It can Compress the files.
- Consistent Hashing.
- Code Splitting.
- Differential Bundling to support older browsers.
- Dignostics and Errors in the browser.
- it allows you host in https also.
- Tree Shaking. Removes unused code.
- ```json
{
  "browserslist": [
    "last 2 versions"
  ]
}
- ```
- adding browserlist will help in building the code for older versions of the browser too. 

### REACT

```javascript

// This creates the React Element which is just an JS object.
React.createElement('element-tag', attributes, value | React.createElement[]);

// Targeting where React should render its elements
ReactDOM.createRoot(document.getElementById('root'));

// Render the elements in the root element, replacing any existing elements. This transforms the React Element into DOM Elements.
root.render();

^ - minor updates will be applied to package
~ -  major updates will be applied to package

Transitive dependencies are the dependencies of the dependencies.

Package.json is the manifest file for our application.
Package-lock.json is used by the package manager to ensure that the correct version of each dependency is installed.


npx executes a package 

