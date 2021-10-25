# Carbon UI

## Setup

Run `yarn dev` to start storybook.

## Adding a new component

Make sure you export the component in `src/index.ts`.

## Publishing

Build a package with your changes `yarn build`.  
To publish the new package simply run `yarn publish`.

### Versioning

**Major versions:** `1.x.x`.  
Major versions symbolise changes in the existing interface of one of the components (Breaking changes).

**Minor versions:** `x.1.x`.  
Minor versions symbolise new features, i.e a new components.

**Patch versions:** `x.x.1`.  
Patch versions symbolise bug fixes and should not introduce any change in functionality.

Read more here: https://semver.org/
