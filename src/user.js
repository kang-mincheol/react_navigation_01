import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


class UserScreen extends Component {
    headerStyle = () => {
        this.props.navigation.setOptions({
            title: 'Customizing',
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'green'
            }
        })
    }
    render () {
        this.headerStyle();
        const { params } = this.props.route;
        const userIdx = params ? params.userIdx : null;
        const userName = params ? params.userName : null;
        const userLastname = params ? params.userLastname : null;
        return (
            <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>User Screen</Text>
                <Button
                    title="To Home Screen"
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                />

                <Text>User Idx: {JSON.stringify(userIdx)}</Text>
                <Text>User Name: {JSON.stringify(userName)}</Text>
                <Text>User Lastname: {JSON.stringify(userLastname)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default UserScreen;
