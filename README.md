## Project installation ##
In order to setup your dev environment please follow the rules gievn at the React-Mative [Getting started doc](https://facebook.github.io/react-native/docs/getting-started.html).

```
# Clone this repo :
git clone --recursive https://github.com/radiSaclay/radiClient.git

# Install dependencies :
npm install

# Connect a device or start an emulator and run the project :
react-native run-android
```

## Application testing ##
The app is tested with [Jest](https://facebook.github.io/jest/docs/getting-started.html). The test are run on GitHub by [CircleCI](https://circleci.com/) everytime a Pull Request is opened or updated.

In order to run the tests locally run the command :
```
npm test
```

## Android application building ##
In order to build a signed APK run the command :
```
npm run build-android
```
Run the release version to verify that the release you've just built is ready for production:
```
react-native run-android --variant=release
```
In case of trouble, please refer to the React-Native [Generating Signed APK doc](https://facebook.github.io/react-native/docs/signed-apk-android.html#generating-signed-apk)

The generated APK can be found under `android/app/build/outputs/apk/app-release.apk`, and is ready to be distributed
