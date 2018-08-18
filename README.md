# rn-inputaccessoryview-helper
 Helper context/provider to make InputAccessoryView more useful
 
 ## Install
 
```
npm i rn-inputaccessoryview-helper
```

## Useage

### Wrap your app in the provider

```javascript
// App.js
import {InputAccessoryProvider} from 'rn-inputaccessoryview-helper';
import FormAccessory from './FormAccessory';

export default class App {
  render(){
    return (
      <InputAccessoryProvider>
        {// rest of app goes here}
        <FormAccessory />
      </InputAccessoryProvider>
    )
  }
}
```

### Use withInputAccessory to set up and use function

withInputAccessory allows you to define functions in a component, and fire them from the InputAccessoryView. Below is a simple example (that doesn't make a lot of sense). See this snack for a better example of how this can be super handy: https://snack.expo.io/@buishi/inputaccessory-demo

```javascript
// SomeForm.js
import {Keyboard, View, TextInput} from 'react-native';
import {withInputAccessory} from 'rn-inputaccessoryview-helper';

@withInputAccessory
export default class SomeForm {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // pass function name and function reference
    this.props.setAccessoryFunction('done', this.done);
  }

  done() {
    Keyboard.dismiss()
  }

  render() {
    const {setAccessoryFunction} = this.props;
    return (
      <View>
        <TextInput
          style={styles.input}
          inputAccessoryViewID="form"
        />
        <TextInput
          style={styles.input}
          inputAccessoryViewID="form"
        />
        <TextInput
          style={styles.input}
          inputAccessoryViewID="form"
        />
      </View>
    )
  }
}
```

Note: deviceID has to match inputAccessoryViewID if you want it to open when you focus a textinput. `deviceID` can't be dynamic.

```javascript
// FormAccessory
import {InputAccessoryView, StyleSheet} from 'react-native';
import {withInputAccessory} from 'rn-inputaccessoryview-helper';

export default class FormAccessory {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    return (
      <InputAccessoryView style={styles.inputAccessory} deviceID="form">      
        <View style={styles.wrapper}>
           <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => this.props.done()}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </InputAccessoryView>
    )
  }
}

const styles = StyleSheet.create({
  inputAccessory: {
    width: Dimensions.get('window').width,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    paddingLeft: 5,
    height: 40,
  },
  wrapper: { 
    flexDirection: 'row', 
    width: '100%',
  }
})
```
