import React from 'react';
import {View, Text, Dimensions, Image, ImageBackground} from 'react-native';
import {Form, Item, Label, Input, Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class Signin extends React.Component{
    state = {
        email: "", 
        password: ""
    }

    logIn = () =>{

    }


    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={myBackground} style={styles.backgroundImage}>
                    <View style={{}}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input 
                                    style={{}}
                                    autoCorrect={false}
                                    onChangeText={(email)=>this.setState({email})}
                                    />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input 
                                    style={{}}
                                    autoCorrect={false}
                                    onChangeText={(password)=>this.setState({password})}
                                    secureTextEntry
                                    />
                            </Item>
                        </Form>
                        <View style={{marginTop: 10}}>
                            <Button 
                                primary
                                block
                                onPress={this.login}
                                >
                                    <Text>Sign In/Sign Up</Text>
                            </Button>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            width: width,
            height: height
    }
}

export default Signin;