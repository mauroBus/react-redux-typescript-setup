# React Configs for a Large Scale App

This project was built to show a well curated setup of a complex app built with React, Redux and using TypeScript.
The React components defined here are just a simple example of the declaration of a page which follows a redux flow.
Additionally, the examples include unit tests using Jest and Enzyme.
Many other details of a real application were excluded to aim in the particular example of the setup of a React app, using Redux, TypeScript and Jest & Enzyme for unit testing.

## Run

```bash
$ yarn
$ yarn start
```

The server should be live at <http://localhost:3000>.

## Build

Run `yarn build` to build the project.
The build artifacts will be stored in the `dist/` directory.

### Serve built files

In order to test the bundle, you can run `yarn serve`.
This command first generates the build, and then starts a Node static server to serve the `/dist` files.

## Linters

The setup includes some linters to check the ES6 syntax as well as the styles syntax. At the same time, it runs a TypeScript checker for the types definitions.
Run the commands `yarn eslint`, `yarn stylelint` and `yarn tsc`.
Optionally you can run `yarn lint` to run all the above commands at once.

## Technology

Some technology notes are described below:

### React Components

The components in this app are intended to be "dumb" components (views). They receive props, render elements, and call function props in response to events. Some of these components can contain state, where the data is only view related. Application data should be in the redux store. They do not side-load data through `context`, or other means.
Components can inherit from `PureComponent`, so that they can avoid re-rendering when data has not changed. But they also can be defined as functions, and even using hooks, more in particular when they are simple and small logic blocks.

### TypeScript

React components, redux actions & reducers, and all other code is annotated with type information and statically checked by TypeScript. This improves the confidence that the code is accurate, and makes refactoring much less likely to introduce bugs. There is a non-trivial amount of extra code for the annotations, and sometimes that can get messy, but none of the type annotations are part of the browser bundle, so it don't slow down the customer experience.

### Module bundler

This app uses `Webpack` to compile the TypeScript and CSS modules. This configuration was built following the optimization best practices, trying to reduce the size and improve the performance of the served files.
All configurations are in place to implement a simple app like this. At the same time, this configuration can be used to build a much bigger and complex application. It includes both: a production and a development builds, which uses `webpack-dev-server` to serve the app locally and update the browser on changes.
The bundle configurations are inside the `/webpack` folder.

### Unit tests

This example uses `Jest` and `Enzyme` to define unit tests for each component. There are some examples on each file, where the tests are placed inside the `__tests__` folder, and their names match with its subject file.
The set of configurations required to run unit tests with Webpack are under the `/jest` folder.

### Redux

No Immutable: In Redux all modifications to data should happen in the reducer, by returning a new object rather than mutating the existing one. Mutating component state, rather than replacing parts of it through `setState` can cause bugs. Many apps use `Immutable.js` for their data structures to prevent mutation at runtime. While it provides strong guarantees around immutability, it requires you to use its types instead of plain JS values.
Instead, this app uses an eslint rule, immutable/no-mutation, to prevent bug-causing mutation within the code. Its guarantees are not as strong, but we get the maintenance benefits of using plain JS values, that are JSON serializable. It also fits well with other static checks that are already doing with TypeScript and eslint.

### Styles

Styles are defined using the PostCSS pre-processor.
Components use a separated CSS file to define its particular styles. The CSS file is named with the same name than its subject component.
The class names defined in a given component are parsed, generating unique ids that don't clash with other components. The advantage of this is the resulting simplicity in the styles definitions, making the usage of a bit complex naming conventions (ie: BEM) not needed.

### Internationalization

The app uses `format-message` as an example of internationalization.
`format-message` is based on the ICU Message Format, which is a great format for user-visible strings. It includes simple placeholders, number and date placeholders, and selecting among submessages for gender and plural arguments.

## License

[MIT](https://github.com/mauroBus/todos-app-react-redux-typescript/blob/master/LICENSE.md)
