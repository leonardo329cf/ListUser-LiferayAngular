# ListUser-LiferayAngular
Two Liferay Widget based in angular 8 and 12 accessing a jax-rs endpoint to fetch user list. Used to show that two Widget with different versions of angular can coexist in liferay.

## How to create a Angular Widget

### Installing tools
  Install Yeoman:
  
  npm install -g yeoman

  Install the Liferay JS Generator:
  
  npm install -g generator-liferay-js

## Generating the portlet:
  yo liferay-js
  
    For the options yuo can use this:
    
      ? What type of project do you want to create? Angular Widget
      
      ? What name shall I give to the folder hosting your project? angular12
      
      ? What is the human readable description of your project? Angular12
      
      ? Do you want to add localization support? No
      
      ? Do you want to add configuration support?
      
        💡 Needs Liferay DXP/Portal CE 7.1 with JS Portlet Extender 1.1.0 or
        
           Liferay DXP/Portal CE 7.2+.
           
       Yes
       
      ? Under which category should your widget be listed? angular
      
      ? Do you have a local installation of Liferay for development? Yes
      
      Where is your local installation of Liferay placed? {full path to your liferay/bundles fodler}
      
      ? Do you want to generate sample code? Yes

### For angular 12
  Copy the dependencies used in the angular 12 module:
  
  https://github.com/leonardo329cf/ListUser-LiferayAngular/blob/7c74f3cd6a68b20cca8cd174d0fec450f68a9700/modules/angular12/package.json

### For angular 8
  Copy the dependencies used in the angular 8 module:
  
  https://github.com/leonardo329cf/ListUser-LiferayAngular/blob/7c74f3cd6a68b20cca8cd174d0fec450f68a9700/modules/angular8/package.json

  Add to src/polyfills.ts:
  
  // this is required for Angular Dependency Injection to work properly.
  
  import 'core-js/proposals/reflect-metadata'; 
