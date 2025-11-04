# Password Generator

A sleek, modern React-based password generator with customizable options for creating secure passwords.

## Features

- **Customizable Length**: Generate passwords between 6-32 characters
- **Numbers**: Toggle inclusion of numeric characters (0-9)
- **Special Characters**: Add symbols for enhanced security (₹~`!@#$%^&*()_-+={}[]|)
- **One-Click Copy**: Copy generated passwords to clipboard with visual feedback
- **Real-time Generation**: Automatically generates new passwords when options change
- **Responsive Design**: Clean, centered UI with orange and black theme

## Installation

1. Clone or download this component
2. Ensure you have React installed in your project
3. Import and use the component:

```jsx
import App from './App';

function Main() {
  return <App />;
}
```

## Usage

The password generator provides an intuitive interface:

1. **Adjust Length**: Use the slider to set password length (6-32 characters)
2. **Toggle Options**: 
   - Check "Numbers" to include digits
   - Check "Symbols" to include special characters
3. **Generate**: Click "Generate" button to create a new password
4. **Copy**: Click "Copy" to copy the password to your clipboard

## Technologies Used

- **React** (with Hooks: useState, useEffect, useCallback, useRef)
- **Tailwind CSS** for styling
- **Clipboard API** for copy functionality

## Component Structure

- Uses `useCallback` for optimized password generation and copy functions
- `useRef` for direct DOM manipulation during copy operation
- `useEffect` to regenerate password when dependencies change
- Controlled components for all inputs

## Customization

You can easily customize:
- **Colors**: Modify Tailwind classes (currently orange/black theme)
- **Character Set**: Edit `charUse` string in `passwordGenerator` function
- **Length Range**: Adjust `min` and `max` values on the range input
- **Copy Feedback**: Customize timeout duration and button states

## Browser Compatibility

Requires a browser that supports:
- ES6+ JavaScript
- Clipboard API
- Modern React (16.8+)

## License

Free to use and modify for personal or commercial projects.

---

