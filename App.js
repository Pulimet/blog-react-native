import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import ShowScreen from "./src/screens/ShowScreen";
import {Provider} from "./src/context/BlogContext"

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="Index" component={IndexScreen} options={{title: 'Blogs'}}/>
                <Stack.Screen name="Create" component={CreateScreen} options={{title: 'Create Screen'}}/>
                <Stack.Screen
                    name="Edit"
                    component={EditScreen}
                    options={{title: 'Edit Screen'}}
                />
                <Stack.Screen
                    name="Show"
                    component={ShowScreen}
                    options={({route}) => ({title: 'Post: ' + route.params.id})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return <Provider><App/></Provider>;
};
