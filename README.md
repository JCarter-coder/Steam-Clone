# Steam Clone

### Original Source

https://store.steampowered.com/app/892970/Valheim/

### Deployed Emulation

https://steamcloneproject.vercel.app/


### Screenshots

![Screenshot 1](https://github.com/JCarter-coder/Steam-Clone/assets/104329744/59b25a0a-9cfb-4d12-9cd1-1c98069f0a89)

![Screenshot 2](https://github.com/JCarter-coder/Steam-Clone/assets/104329744/3c3306ec-ebda-4f51-846c-06c3c1d13eb2)


# Application Overview

This document provides an overview of the technologies and components used in this front-end project React application.

## Technologies Used

- **React**: A JavaScript library for building user interfaces. This application utilizes React hooks such as `useState` and `useEffect`.
- **CSS**: Styling is applied using external CSS files `./App.css`.
- **React Components**: The application is composed of several custom React components, including `Header`, `MainPage`, `Footer`, `TagsModal`, and `PreviewModal`.

## Component Details

- **Header, MainPage, Footer**: These components represent the main layout structure—header, content, and footer.
- **TagsModal and PreviewModal**: These are modal components used for displaying tags and previews, respectively.
- **Context.jsx**: Manages the application state and contexts with a custom hook `setContexts` which provides state management for tool tips and modal visibility.

## App Component

The main `App` component orchestrates the rendering and state management of the entire application. It uses the custom hook `setContexts` to manage various UI states related to tooltips and modal overlays.

### Functionality

- **Navigation and Layout**: The application handles responsive layouts with various div elements.
- **Tool Tips**: Dynamically displayed tooltips for reviews (full review, customer review, recent review) using context state.
- **Modals**: Conditionally renders `TagsModal` and `PreviewModal` based on their respective display states.

## CSS and Style Management

- External CSS for styling.
- Inline styles are used dynamically within the components for tooltips, demonstrating advanced positioning and visibility control.

## File Structure

- **App.css**: Main stylesheet.
- **Components**: This directory contains all the reusable components like `Header`, `MainPage`, `Footer`, etc.
- **Context.jsx**: Contains React context for state management across the application.

## Summary

This React application is structured to be modular with a clear separation of components, employing modern React features like hooks for state and effect management, alongside CSS for styling.

