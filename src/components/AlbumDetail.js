import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	//thumbnail_image: URL com problema
	const { title, artist, thumbnail_image, image, url} = album;

	const goToLink = (link) => {
		console.log(link);
	}

	return (



		<Card>
			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image 
						style={styles.thumbnailStyle}
						source={{uri: image}} />
				</View>
				<View style={styles.headerContainerStyle}>				
					<Text style={styles.headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image 
					style={styles.imageStyle}
					source={{uri: image}} />
			</CardSection>
			<CardSection>
				<Button onPress={() => {Linking.openURL(url)}}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContainerStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	}
}

export default AlbumDetail;