# Todo App - React Native with Expo SDK 53

A beautiful and modern todo application built with React Native and Expo SDK 53. This app features a clean, intuitive interface with full CRUD functionality for managing your daily tasks.

## Features

### ✨ Core Functionality
- **Add Todos**: Create new todo items with a simple input field
- **Mark Complete**: Tap on any todo to mark it as completed
- **Edit Todos**: Inline editing with save/cancel options
- **Delete Todos**: Remove todos with confirmation dialog
- **Progress Tracking**: See how many todos are completed vs total

### 🎨 Modern UI/UX
- **Clean Design**: Modern iOS-style interface with smooth animations
- **Responsive Layout**: Works perfectly on different screen sizes
- **Visual Feedback**: Clear visual indicators for completed items
- **Empty State**: Beautiful empty state when no todos exist
- **Keyboard Handling**: Proper keyboard avoidance for better UX

### 🔧 Technical Features
- **React Native**: Built with the latest React Native
- **Expo SDK 53**: Uses the latest Expo SDK for easy development
- **Vector Icons**: Beautiful icons from Expo Vector Icons
- **State Management**: Efficient state management with React hooks
- **Platform Optimized**: Optimized for both iOS and Android

## Screenshots

The app features:
- A beautiful blue header with progress counter
- Clean input field with add button
- Card-based todo items with checkboxes
- Edit and delete buttons for each todo
- Smooth animations and transitions

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd TodoApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

### Running the App

After starting the development server, you can run the app on:

- **Android**: `npm run android`
- **iOS**: `npm run ios` (requires macOS)
- **Web**: `npm run web`
- **Expo Go**: Scan the QR code with the Expo Go app on your phone

## Usage

### Adding a Todo
1. Type your todo in the input field at the top
2. Press the "+" button or hit Enter to add it

### Completing a Todo
- Tap on any todo item to mark it as completed
- Completed todos show a checkmark and strikethrough text

### Editing a Todo
1. Tap the pencil icon next to any todo
2. Modify the text in the inline editor
3. Tap the checkmark to save or X to cancel

### Deleting a Todo
1. Tap the trash icon next to any todo
2. Confirm the deletion in the dialog

## Project Structure

```
TodoApp/
├── App.js              # Main application component
├── package.json        # Dependencies and scripts
├── app.json           # Expo configuration
├── assets/            # Images and static assets
└── README.md          # This file
```

## Dependencies

- **expo**: ~53.0.15 - Expo SDK for React Native development
- **react**: 19.0.0 - React library
- **react-native**: 0.79.4 - React Native framework
- **@expo/vector-icons**: Latest - Icon library
- **expo-status-bar**: ~2.2.3 - Status bar management

## Future Enhancements

Potential features that could be added:
- **Persistent Storage**: Save todos using AsyncStorage
- **Categories**: Organize todos by categories
- **Due Dates**: Add due dates and reminders
- **Priority Levels**: Mark todos as high/medium/low priority
- **Search**: Search through todos
- **Dark Mode**: Toggle between light and dark themes
- **Cloud Sync**: Sync todos across devices

## Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, please:
1. Check the Expo documentation
2. Review the React Native documentation
3. Create an issue in the project repository

---

**Built with ❤️ using React Native and Expo SDK 53** 