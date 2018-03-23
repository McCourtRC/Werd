import { StackNavigator, TabNavigator } from 'react-navigation';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import GameController from '../screens/GameController';
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
    GameController: {
        screen: GameController, 
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