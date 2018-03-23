import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

// View
export const ViewStyles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    horizontalCenter: {
        flex: 1,
        alignItems: 'center'
    }
})

// Input
export const InputStyles = StyleSheet.create({
    basic: {
        fontSize: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 0
    }
})

export const TextStyles = StyleSheet.create({
    timer: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 30
    }
})