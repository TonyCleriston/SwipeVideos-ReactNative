import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/home'
import New from '../pages/new'
import Inbox from '../pages/inbox'
import Profile from '../pages/profile'
import Search from '../pages/search'
import { Ionicons } from '@expo/vector-icons'
import ButtonNew from '../components/ButtonNew'

const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator
        screenOptions={{headerShown: false, tabBarActiveTintColor: '#fff', tabBarShowLabel:false, tabBarStyle: {backgroundColor: '#000', borderTopWidth: 0}}}

        >
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused) {
                    return <Ionicons name="home" size={size} color={color} />
                } else {
                    return <Ionicons name="home-outline" size={size} color={color} />
                }
            }}} />
            <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused) {
                    return <Ionicons name="search" size={size} color={color} />
                } else {
                    return <Ionicons name="search-outline" size={size} color={color} />
                }
            }}} />
            <Tab.Screen name="New" component={New}options={{tabBarIcon: ({size}) => {
                return <ButtonNew size={size}/>
            }}}  />
            <Tab.Screen name="Inbox" component={Inbox} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused) {
                    return <Ionicons name="ios-chatbubble-ellipses" size={size} color={color} />
                } else {
                    return <Ionicons name="ios-chatbubble-ellipses-outline" size={size} color={color} />
                }
            }}} />
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused) {
                    return <Ionicons name="person" size={size} color={color} />
                } else {
                    return <Ionicons name="person-outline" size={size} color={color} />
                }
            }}} />
         
        </Tab.Navigator>
    )
}