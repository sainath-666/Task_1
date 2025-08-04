# Penny Wegman Campaign Website

A React-based campaign website for Penny Wegman, Candidate for Kane County Treasurer.

## Features

- Modern, responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Contact form functionality
- News and events sections
- Campaign information and endorsements

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for deployment on Vercel. The following fixes have been applied to ensure proper image loading:

### Image Path Fixes

- Changed relative paths like `"../../public/image.png"` to absolute paths like `"/image.png"`
- Updated image references in `src/components/Info.jsx` and `src/components/News.jsx`

### Vercel Configuration

- Added `vercel.json` with proper routing and asset handling
- Updated `vite.config.js` with optimized build settings

### Static Assets

- Images in the `public/` folder are automatically served from the root path
- All images are properly copied to the build output

## File Structure

```
public/          # Static assets (images, favicon)
src/
  components/    # React components
  assets/        # Source assets
  App.jsx        # Main app component
  main.jsx       # Entry point
```

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
