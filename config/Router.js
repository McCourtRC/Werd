import { StackNavigator, TabNavigator } from 'react-navigation'

import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

import Home from '../screens/Home'
import GameController from '../screens/GameController'
import Profile from '../screens/Profile'

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
})

const HomeNav = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
            headerBackTitle: "Quit"
        }
    },
    GameController: {
        screen: GameController,
        navigationOptions: {
            gestureEnabled: false,
            headerVisible: true,
        }
    }
}, {
    headerMode: 'screen'
})

export const SignedIn = TabNavigator({
    HomeNav: {
        screen: HomeNav, 
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

