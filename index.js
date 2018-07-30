/** @format */

/*import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);*/


//Import a library to help create a component
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//Create a component
const App = () => {
	//<View sytle={flex: 1}>: soluciona problema com
	// ScrollView de nao ir ate o final da lista
	return (
		<View style={{flex: 1}}>
			<Header headerText={'Album!!'}/>
			<AlbumList />
		</View>
	);
};


//Render it to the device - somente o Root Component usa o Appregistry
AppRegistry.registerComponent('albums', () => App);
