import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps99543Navigator from '../features/Maps99543/navigator';
import Add-Item99542Navigator from '../features/Add-Item99542/navigator';
import Maps99538Navigator from '../features/Maps99538/navigator';
import UserProfile99534Navigator from '../features/UserProfile99534/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps99543: { screen: Maps99543Navigator },
Add-Item99542: { screen: Add-Item99542Navigator },
Maps99538: { screen: Maps99538Navigator },
UserProfile99534: { screen: UserProfile99534Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
