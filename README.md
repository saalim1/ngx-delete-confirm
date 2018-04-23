# ngx delete confirm
[![Build Status](https://travis-ci.org/sijpesteijn/ngx-delete-confirm.svg?branch=master)](https://travis-ci.org/sijpesteijn/ngx-delete-confirm)
[![codecov](https://codecov.io/gh/sijpesteijn/ngx-delete-confirm/branch/master/graph/badge.svg)](https://codecov.io/gh/sijpesteijn/ngx-delete-confirm)
[![npm version](https://badge.fury.io/js/ngx-delete-confirm.svg)](http://badge.fury.io/js/ngx-delete-confirm)
[![devDependency Status](https://david-dm.org/sijpesteijn/ngx-delete-confirm/dev-status.svg)](https://david-dm.org/sijpesteijn/ngx-delete-confirm?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/sijpesteijn/ngx-delete-confirm.svg)](https://github.com/sijpesteijn/ngx-delete-confirm/issues)
[![GitHub stars](https://img.shields.io/github/stars/sijpesteijn/ngx-delete-confirm.svg)](https://github.com/sijpesteijn/ngx-delete-confirm/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/sijpesteijn/ngx-delete-confirm/master/LICENSE)

## [Demo](https://sijpesteijn.github.io/ngx-delete-confirm/standalone_demo)

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ngx-delete-confirm
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxDeleteConfirmModule } from 'ngx-delete-confirm';

@NgModule({
  imports: [
    NgxDeleteConfirmModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<delete-confirm></delete-confirm>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/sijpesteijn/ngx-delete-confirm/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-delete-confirm/bundles/ngx-delete-confirm.umd.js"></script>
<script>
    // everything is exported ngxDeleteConfirm namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://sijpesteijn.github.io/ngx-delete-confirm/docs/

## License

MIT
