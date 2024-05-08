# Steam Clone

### Original Source

https://store.steampowered.com/app/892970/Valheim/

### Deployed Emulation

https://steamcloneproject.vercel.app/

# Application Overview

This document provides an overview of the technologies and components used in the React application.

## Technologies Used

- **React**: A JavaScript library for building user interfaces. The application utilizes React hooks such as `useState` and `useEffect`.
- **CSS**: Styling is applied using external CSS files, as evident from the import `./App.css`.
- **React Components**: The application is composed of several custom React components, including `Header`, `MainPage`, `Footer`, `TagsModal`, and `PreviewModal`.

## Component Details

- **Header, MainPage, Footer**: These components likely represent the main layout structure—header, content, and footer.
- **TagsModal and PreviewModal**: These are modal components used for displaying tags and previews, respectively.
- **Context.jsx**: Manages the application state and contexts with a custom hook `setContexts` which provides state management for tool tips and modal visibility.

## App Component

The main `App` component orchestrates the rendering and state management of the entire application. It uses the custom hook `setContexts` to manage various UI states related to tooltips and modal overlays.

### Functionality

- **Navigation and Layout**: The application handles responsive layouts with various div elements like `.responsive_page_frame` and `.responsive_page_menu_ctn`.
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

This React application is structured to be modular with a clear separation of components and concerns, employing modern React features like hooks for state and effect management, alongside CSS for styling.


![steam-1](https://github.com/Array-Architect/Steam-Clone/assets/143543147/226be7da-eacc-48f9-9cea-c725f68d0406)
![steam-2](https://github.com/Array-Architect/Steam-Clone/assets/143543147/fac8f579-90b6-4ff4-9b05-66299954e052)
![steam-3](https://github.com/Array-Architect/Steam-Clone/assets/143543147/a93fdab9-00ca-4d02-a265-428e1bc56869)
![steam-4](https://github.com/Array-Architect/Steam-Clone/assets/143543147/b05ed1de-22ca-4d85-912b-396967b8f795)
![steam-5](https://github.com/Array-Architect/Steam-Clone/assets/143543147/6bbf9897-0c71-4a69-b883-ff0ac60c1185)
![steam-6](https://github.com/Array-Architect/Steam-Clone/assets/143543147/510e6720-968a-4bb7-9dae-f47fa0b0ae0c)
![steam-7](https://github.com/Array-Architect/Steam-Clone/assets/143543147/e4c63182-1722-4a3d-b6be-54d315ca86e5)
![steam-8](https://github.com/Array-Architect/Steam-Clone/assets/143543147/0e9d5bd1-525b-4a59-a8fc-6994eeeb90f0)
![steam-9](https://github.com/Array-Architect/Steam-Clone/assets/143543147/c630682b-9903-4a6a-a349-da35f359c977)
