/** @format */

/*import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);*/


//Import a library to help create a component
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';
//Create a component
const App = () => {
	return (
		<Header headerText={'Album!!'}/>
	);
};


//Render it to the device - somente o Root Component usa o Appregistry
AppRegistry.registerComponent('albums', () => App);
