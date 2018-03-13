import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

export const SignedOut = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login"
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up"
        }
    }
});

export const SignedIn = TabNavigator({
    Home: {
        screen: Home, 
        navigationOptions: {
            title: "Home"
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: "Profile"
        }
    }
})