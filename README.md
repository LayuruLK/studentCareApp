# Student_Care_App


## Overview

This project is a React Native application designed to provide a student management system for university students. It enables students to log in, view their profiles, check course details, add and view subjects with marks, and calculate the average marks.

---

## Features

- **Login Functionality**: Username and password-based authentication.
- **Profile Management**: Dynamic display of student information including contact details and profile picture.
- **Course Information**:Display static course details.
- **Subjects Management**: Add, view, and calculate average marks for subjects.
- **Responsive Design**: Clean and responsive UI for various devices.

---

## Technologies Used

- **React Native**: Framework for building mobile applications.
- **React Navigation**: Manages navigation between screens.
- **React Native Paper**: Provides UI components like Button, TextInput, Divider, etc.
- **Expo**: Simplifies React Native development and testing.


---

## Setup and Installation

### Prerequisites

1. **Node.js** (Version 14 or above): Download from [Node.js Official Website](https://nodejs.org/).
2. **React Native CLI**: Follow the [React Native Environment Setup Guide](https://reactnative.dev/docs/environment-setup).
3. **Expo Go App** (Optional): For testing on physical devices.

### Steps


1. **Creates a new Expo project named StudentCareApp using the blank template.**
    ```bash
    npx create-expo-app StudentCareApp --template blank
    ```


2. **Changes the current directory to the newly created StudentCareApp project directory.**
   ```bash
   cd StudentCareApp
   ```


3. **Installs dependencies required for running the app on the web using Expo.**
    ```bash
    npx expo install react-dom react-native-web @expo/metro-runtime
    ```


4. **Start the development server**
   ```bash
   npx expo start
   ```
   or

   **To run the app if mobile and pc have different network or virtual environment (use tunnel mode)**

   ```bash
   npx expo start --tunnel
    ```


5.  **Open in a web browser**

    type "w"

     ```bash
    w
    ```


6. **Installs the React Native Paper library.(This is a UI component library that provides Material Design components for React Native.)**
    ```bash
    npm install react-native-paper
    ```


7. **Installs the react-native-safe-area-context library.(This library manage safe areas in a React Native app.)**
    ```bash
    npm install react-native-safe-area-context
    ```

    
8. **Installs the react-native-vector-icons library.(This provides customizable icons to use within the app.)**
    ```bash
    npm install react-native-vector-icons
    ```

---

## Project Structure

```

├── components
│   ├── Login.js             # Login screen component where students enter their credentials
│   ├── Profile.js           # Profile screen component displaying student information
│   ├── Course.js            # Course information screen component
│   ├── Subjects.js          # Subject and marks input and display component
├── assets
│   └── profilepic           # Images used in the app
├── App.js                   # Root component that sets up navigation and routing
├── data
│   └── StudentsDb.js        # A mock database of student data (e.g., usernames, passwords, profiles)
├── package.json             # Project dependencies and configuration
├── README.md                # Documentation for the project, describing its functionality and setup


```


## Future Improvements


- Enhance User Interface and Experience
- Navigation Enhancements
- Authentication Features
- Profile and Data Management




## Contribution

Contributions are welcome! Feel free to fork the repository and create a pull request with your improvements.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- React Native documentation and community.
- React Native Paper for providing pre-built UI components.

---

## Author

GitHub: [GitHub Profile](https://github.com/LayuruLK)

Email: layurulakvidukarunathilaka@gmail.com
