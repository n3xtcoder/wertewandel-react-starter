# N3xtcoder WerteWandel workshop

PS. Sorry for favoring Mac users, but it's just less hassle.

For more information about setting up environment on different platforms look [HERE](https://facebook.github.io/react-native/docs/getting-started.html#content)

## Requirements
### Node and Watchman
```
brew install node
brew install watchman
```
### React Native CLI 
```
sudo npm install -g react-native-cli
```
### Android SDK (just SDK alone without Android Studio)
[https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html)
### Set ```JAVA_HOME``` and ```ANDROID_HOME``` environmental variables
```
echo 'export JAVA_HOME=$(/usr/libexec/java_home)' >> ~/.bashrc
echo 'export ANDROID_HOME=<PATH TO YOUR ANDROID SDK>' >> ~/.bashrc
source ~/.bashrc
```
### Android emulator (if you don't have an Android device to test app on)
Go to [https://www.genymotion.com/account/create/](https://www.genymotion.com/account/create/), create an account and download Genymotion emulator

## Development
### Download project and install dependencies
```
git clone git@github.com:jimmyweb/wertewandel-react-starter.git
cd wertewandel-react-starter
npm install
```
### Run project on android device or emulator
Run Genymotion and start Android device instance or attach Android device via USB (make sure you have USB debugging enabled on the device >> [READ INSTRUCTIONS](https://www.google.com/search?q=android+Enable+USB+debugging)).
Check if android device is available by running
```
adb devices
```
Install and launch app on the device/emulator
```
react-native run-android
```


