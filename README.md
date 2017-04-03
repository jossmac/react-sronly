# react-sronly

Improve accessibility by providing text to Screen Readers that would otherwise be derived from the surrounding interface.

### Installation

```bash
npm i --save react-sronly

# or

yarn add react-sronly
```

### Use

```JSX
import React from 'react';
import AccessibleText from 'react-sronly';
 
export default class Sample extends React.Component {
  ...
  render() {
    return (
      <span className="some-icon not-helpful-for-screenreaders" />
      <AccessibleText>Accessible text only visible to Screen Readers</AccessibleText>
    );
  }
}
```
