import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Logger from './screens/Logger';
import Documents from './screens/Documents';
import Menu from './screens/Menu';

import TabComponent from './components/Tab';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => <TabComponent label="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="Logger"
          component={Logger}
          options={{
            tabBarButton: (props) => <TabComponent label="logger" {...props} />,
          }}
        />
        <Tab.Screen
          name="Documents"
          component={Documents}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="documents" {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarButton: (props) => <TabComponent label="menu" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
