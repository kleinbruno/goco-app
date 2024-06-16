# GoCo APP

### Project Details

This project uses vanilla React Native (version 0.74.2) instead of a framework like Expo. This approach provides more flexibility and control over native code, which can be beneficial for certain types of applications. It was decided to proceed with JavaScript instead of TypeScript due to the available time for coding the application.

### Libraries and Tools Used
- React Native Vector Icons: Used instead of images to keep the application lightweight.
- Context API: Used for managing authentication and theme state.
- React Navigation: Used for creating the tab footer and handling navigation within the app.
- React Native WebView: Used for displaying the company's website.

### Test User

To log in to the application, use the following credentials:
```bash
Username: admin
Password: admin
```

# Getting Started

### Requirements

To run this project, you will need:

- Node.js (v18 or later)
- npm (v6 or later)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Install Node.js and npm**:
   - Download and install from [Node.js](https://nodejs.org/).

2. **Install React Native CLI**:
   ```bash
   npm install -g react-native-cli

3. **Install Xcode (for macOS users)**:

Download and install from the Mac App Store.

4. **Install Android Studio**:

Download and install from Android Studio.
Ensure you have the Android SDK installed and configured.

### Project Setup

1. **Install dependencies:**
npm install

2. **Start the Metro Server:**

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

3. **Start your Application**

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For iOS

```bash
# using npm
npm run ios
```

### For Android

```bash
# using npm
npm run android
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.