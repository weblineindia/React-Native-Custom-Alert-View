# React Native Custom Alert View Component

A pure JavaScript React Native component for Custom Alerts view. This component will generate same UI for both Android and iOS.

## Getting Started

- [Installation](#installation)
- [Supported versions](#supported-versions)
- [Usage](#usage)
- [Method](#method)
- [Want to Contribute?](#want-to-contribute?)
- [Need Help?](#need-help?)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#keywords)

## Installation

`$ npm install rn-weblineindia-custom-alert-view --save`

## Supported versions

ReactNative 0.60 - 0.62.5 is supported for v1.0.0 of this component.

## Usage

```js
showAlertView() {
    let object = {
      // Options put here...     
      title: 'Custom Dailog',
      message: 'This is Custom Alert Dialog.',
      arrAlertItems: ['OK'],
      buttonFlow: 'row'
    }
    this.props.showAlertView(object, (index) => {
      if (index === 0) {
        // callback actions here...
      } 
    })
  }
```

```javascript
<TouchableOpacity onPress={() => this.showAlertView()}>
  <Text>Try me</Text>
</TouchableOpacity>
}

```

## Using Higher-Order Components

Enabling any component for custom alert is very easy. Take a look at the code:

```js
/* @flow */

import CustomAlerts from 'rn-weblineindia-custom-alert-view';

class App extends Component{
        // code here...
}

export default CustomAlerts(App)
```

## Method

Use `this.props.showAlertView` to access this method.

| **Method**    | **Parameter**        |
|---------------|----------------------|
| showAlertView | \(Object,Callback\)  |

### Options of Object

| **Options**         | **Type** | **Description**                                                     |
|---------------------|----------|---------------------------------------------------------------------|
| title               | `string` | Title to be displayed in the alert                                  |
| message             | `string` | Message to be displayed                                             |
| arrAlertItems       | `array`  | Array of the string to be displayed in the button label             |
| arrDestructiveItems | `array`  | Array of the string to be displayed in the destructive button label |
| buttonFlow          | `string` | There are two options to be displayed buttons 'column' and 'row'    |

### Callback

```javascript
this.props.showAlertView(object, (index) => {
      if (index === 0) {
        // callback actions here...
      } 
    })
```

-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Need Help? 

We also provide a free, basic support for all users who want to use this React Native Custom Alert View component in their software project. In case you want to customize this Custom Alert View component to suit your development needs, then feel free to contact our [ReactNative developers](https://www.weblineindia.com/hire-react-native-developers.html).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/React-Native-Custom-Alert-View/blob/master/LICENSE

### Keywords

 rn-weblineindia-custom-alert-view, react-native-custom-alert-view, custom-alert-view, react-native

<!-- ### Keywords

[react-native](https://www.npmjs.com/search?q=keywords:react-native) [custom](https://www.npmjs.com/search?q=keywords:custom) [alerts](https://www.npmjs.com/search?q=keywords:alerts) [dialog](https://www.npmjs.com/search?q=keywords:custom) [dialog](https://www.npmjs.com/search?q=keywords:custom) [modal](https://www.npmjs.com/search?q=keywords:modal) [popup](https://www.npmjs.com/search?q=keywords:popup) [ios](https://www.npmjs.com/search?q=keywords:ios) [android](https://www.npmjs.com/search?q=keywords:android) -->
