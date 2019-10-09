# Badge Icon as a HOC High Order Component
Icon Badge is a component for React Native that works on Android and iOS when you need inform to the user for the number of unread alerts for specific section or feature of your app. 

>**Its a HOC, so it wraps in any other component like Text, Icon or whatever you want.**

### Usage

Install react-native-elements as dependency in your project and import the component in your screen:

```javascript
npm i react-native-elements --save
```

```javascript
import withBadge from "./component/withBadge";
```
Use it easy:

```javascript
  const NewComponent = withBadge(number, {options})(Component);
```
Like this:

*For Text Component:*
```javascript
 const TextWithBadge = withBadge(2, {
      right: 0,
      top: 0
    })(Text);
```

*For Icons, in this case I use Vector Icons, you need to install it as dependency in your package.json. *

```javascript
npm i @expo/vector-icons --save
```
and Import to your screen: 
```javascript
import { Ionicons } from "@expo/vector-icons";
```
Creat new wrapped component: 
```javascript
 const IconWithBadge = withBadge(4)(Ionicons);
```
And also you can add props to your new icon component, for example: 

```javascript
 <IconWithBadge
          name="ios-person"
          type="Ionicons"
          color="gray"
          size={32}
        />
```

**Use it and share it!.**
