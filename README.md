Designed and developed a full ERP solution for an architecture company using Angular, Node.js, and MongoDB. The system automates core business processes including project management, client handling, resource allocation, billing, and reporting—streamlining operations and enhancing productivity through a modern, scalable web application.

![Architect Firm ERP Web Application](https://github.com/sultan-ul-arefin/Architect/blob/main/login.jpeg?raw=true)

# Open Source Part

Task                            | Description
--------------------------------|--------------------------------------------------------------------------------------
Authencation                    | Authencation is successfully done in Frontend & Backend
Role Based Access Control       | Role based access control in both Angular and Nodejs
Bangla & English Translation    | Translation using [ngx-translate](https://github.com/ngx-translate/core)

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

Task                            | Description
--------------------------------|--------------------------------------------------------------------------------------
`npm start`                     | Run development server on `http://localhost:4200/`
`npm run serve:sw`              | Run test server on `http://localhost:4200/` with service worker enabled
`npm run build [-- --configuration=production]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder
`npm test`                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
`npm run test:ci`               | Lint code and run unit tests once for continuous integration
`npm run e2e`                   | Run e2e tests using [Protractor](http://www.protractortest.org)
`npm run lint`                  | Lint code
`npm run translations:extract`  | Extract strings from code and templates to `src/app/translations/template.json`
`npm run prettier`              | Automatically format all `.ts`, `.js` & `.scss` files

When building the application, you can specify the target configuration using the additional flag
`--configuration <name>` (do not forget to prepend `--` to pass arguments to npm scripts).

The default build configuration is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Additional tools

Tasks are mostly based on the `angular-cli` tool. Use `ng help` to get more help or go check out the
[Angular-CLI README](https://github.com/angular/angular-cli).

## Code formatting

All `.ts`, `.js` & `.scss` files in this project are formatted automatically using [Prettier](https://prettier.io),
and enforced via the `test:ci` script.

A pre-commit git hook has been configured on this project to automatically format staged files, using
(pretty-quick)[https://github.com/azz/pretty-quick], so you don't have to care for it.

You can also force code formatting by running the command `npm run prettier`.

# What's in the box

The app template is based on [HTML5](http://whatwg.org/html), [TypeScript](http://www.typescriptlang.org) and
[Sass](http://sass-lang.com). The translation files use the common [JSON](http://www.json.org) format.

#### Tools

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and
[NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

- Optimized build and bundling process with [Webpack](https://webpack.github.io)
- [Development server](https://webpack.github.io/docs/webpack-dev-server.html) with backend proxy and live reload
- Cross-browser CSS with [autoprefixer](https://github.com/postcss/autoprefixer) and
  [browserslist](https://github.com/ai/browserslist)
- Asset revisioning for [better cache management](https://webpack.github.io/docs/long-term-caching.html)
- Unit tests using [Jasmine](http://jasmine.github.io) and [Karma](https://karma-runner.github.io)
- End-to-end tests using [Protractor](https://github.com/angular/protractor)
- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer),
  [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)
- Automatic code formatting with [Prettier](https://prettier.io)

#### Libraries

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex Layout](https://github.com/angular/flex-layout)
- [Material Icons](https://material.io/icons/)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)
- [Moment.js](https://momentjs.com)

#### Coding Practises

- Angular 
- TypeScript 
- Sass 
- HTML 
- Unit tests uides
- End-to-end tests 

#### Other Practises

- I18n guide 
- Working behind a corporate proxy 
- Updating dependencies and tools 
- Using a backend proxy for development
- Browser routing 

```
Architect
├─ .browserslistrc
├─ .editorconfig
├─ .git
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     └─ tags
├─ .gitignore
├─ .htmlhintrc
├─ .stylelintrc
├─ angular.json
├─ backend
│  ├─ .gitignore
│  ├─ config.json
│  ├─ controllers
│  │  └─ user.controller.js
│  ├─ index.js
│  ├─ LICENSE
│  ├─ models
│  │  └─ user.model.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ users
│  │  ├─ refresh-token.model.js
│  │  └─ user.functions.js
│  ├─ _helpers
│  │  ├─ db.js
│  │  ├─ role.js
│  │  └─ send-email.js
│  └─ _middleware
│     ├─ authorize.js
│     ├─ error-handler.js
│     └─ validate-request.js
├─ karma.conf.js
├─ LICENSE
├─ ngsw-config.json
├─ package-lock.json
├─ package.json
├─ proxy.conf.js
├─ README.md
├─ src
│  ├─ app
│  │  ├─ @core
│  │  │  ├─ core.module.ts
│  │  │  ├─ http
│  │  │  │  ├─ api-prefix.interceptor.spec.ts
│  │  │  │  ├─ api-prefix.interceptor.ts
│  │  │  │  ├─ error-handler.interceptor.spec.ts
│  │  │  │  └─ error-handler.interceptor.ts
│  │  │  ├─ index.ts
│  │  │  └─ route-reusable-strategy.ts
│  │  ├─ @shared
│  │  │  ├─ index.ts
│  │  │  ├─ loader
│  │  │  │  ├─ loader.component.html
│  │  │  │  ├─ loader.component.scss
│  │  │  │  ├─ loader.component.spec.ts
│  │  │  │  └─ loader.component.ts
│  │  │  ├─ popup
│  │  │  │  ├─ popup.component.html
│  │  │  │  ├─ popup.component.scss
│  │  │  │  ├─ popup.component.spec.ts
│  │  │  │  └─ popup.component.ts
│  │  │  └─ shared.module.ts
│  │  ├─ about
│  │  │  ├─ about-routing.module.ts
│  │  │  ├─ about.component.html
│  │  │  ├─ about.component.scss
│  │  │  ├─ about.component.spec.ts
│  │  │  ├─ about.component.ts
│  │  │  └─ about.module.ts
│  │  ├─ accounts
│  │  │  ├─ account-routing.module.ts
│  │  │  ├─ account.component.html
│  │  │  ├─ account.component.scss
│  │  │  ├─ account.component.ts
│  │  │  └─ account.module.ts
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ auth
│  │  │  ├─ auth-routing.module.ts
│  │  │  ├─ auth.module.ts
│  │  │  ├─ authentication.guard.spec.ts
│  │  │  ├─ authentication.guard.ts
│  │  │  ├─ authentication.service.mock.ts
│  │  │  ├─ authentication.service.spec.ts
│  │  │  ├─ authentication.service.ts
│  │  │  ├─ credentials.service.mock.ts
│  │  │  ├─ credentials.service.spec.ts
│  │  │  ├─ credentials.service.ts
│  │  │  └─ index.ts
│  │  ├─ clients
│  │  │  ├─ client-routing.module.ts
│  │  │  ├─ client.component.html
│  │  │  ├─ client.component.scss
│  │  │  ├─ client.component.ts
│  │  │  └─ client.module.ts
│  │  ├─ documents
│  │  │  ├─ docuement.module.ts
│  │  │  ├─ document-routing.module.ts
│  │  │  ├─ document.component.html
│  │  │  ├─ document.component.scss
│  │  │  └─ document.component.ts
│  │  ├─ home
│  │  │  ├─ home-routing.module.ts
│  │  │  ├─ home.component.html
│  │  │  ├─ home.component.scss
│  │  │  ├─ home.component.spec.ts
│  │  │  ├─ home.component.ts
│  │  │  └─ home.module.ts
│  │  ├─ hr
│  │  │  ├─ hr-routing.module.ts
│  │  │  ├─ hr.component.html
│  │  │  ├─ hr.component.scss
│  │  │  ├─ hr.component.ts
│  │  │  └─ hr.module.ts
│  │  ├─ i18n
│  │  │  ├─ i18n.module.ts
│  │  │  ├─ i18n.service.spec.ts
│  │  │  ├─ i18n.service.ts
│  │  │  ├─ index.ts
│  │  │  ├─ language-selector.component.html
│  │  │  ├─ language-selector.component.scss
│  │  │  ├─ language-selector.component.spec.ts
│  │  │  └─ language-selector.component.ts
│  │  ├─ material.module.ts
│  │  ├─ settings
│  │  │  ├─ settings-routing.module.ts
│  │  │  ├─ settings.component.html
│  │  │  ├─ settings.component.scss
│  │  │  ├─ settings.component.ts
│  │  │  └─ settings.module.ts
│  │  └─ shell
│  │     ├─ access.guard.ts
│  │     ├─ shell.component.html
│  │     ├─ shell.component.scss
│  │     ├─ shell.component.spec.ts
│  │     ├─ shell.component.ts
│  │     ├─ shell.module.ts
│  │     ├─ shell.service.spec.ts
│  │     ├─ shell.service.ts
│  │     └─ side-menu
│  │        ├─ side-menu.component.html
│  │        ├─ side-menu.component.scss
│  │        ├─ side-menu.component.spec.ts
│  │        └─ side-menu.component.ts
│  ├─ assets
│  │  └─ img
│  │     ├─ favicon.png
│  │     └─ gif
│  │        ├─ confuse.gif
│  │        ├─ error.gif
│  │        └─ ok.gif
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.scss
│  ├─ main.ts
│  ├─ manifest.webmanifest
│  ├─ polyfills.ts
│  ├─ robots.txt
│  ├─ test.ts
│  ├─ theme
│  │  ├─ custom.scss
│  │  ├─ theme-variables.scss
│  │  └─ theme.scss
│  └─ translations
│     ├─ bn-BD.json
│     └─ en-US.json
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.spec.json
└─ tslint.json

```
