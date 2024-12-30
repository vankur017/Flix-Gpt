    # Important Notice Before Using Deployed URL

    ####### IMP NOTICE ######

    1. Get Software from "https://one.one.one.one" and install it to avoid network provider issues with API calls

    2. Open Warp App by Cloudflare and enable it before proceeding

    These steps are mandatory for proper functionality of the application.
    # Flix GPT - Streaming Platform with AI Integration

    ## Important Pre-requisites
    Before using the deployed application, please complete these mandatory steps:
    1. Install the DNS resolver from [Cloudflare](https://one.one.one.one) to prevent API connectivity issues
    2. Download and activate the Warp App by Cloudflare

    ## Quick Start
    ```bash
    # Start Development Server
    npm run start

    # Create Production Build
    npm run build
    ```

    ## Development Journey
    1. **Initial Setup**
        - Created React application using Create React App
        - Configured Tailwind CSS
        - Implemented routing architecture

    2. **Authentication**
        - Built Login/Signup forms with validation
        - Integrated Firebase authentication
        - Implemented protected routes
        - Added user state management with Redux

    3. **Core Features**
        - TMDB API integration
        - Custom hooks for movie data
        - Main container with auto-playing trailers
        - Movie recommendations
        - Multi-language support

    4. **GPT Integration**
        - Search functionality
        - AI-powered recommendations
        - Multilingual search support

    ## Architecture
    ### Pages
    - **Authentication Page**
      - Login/Signup forms
      - Form validation
      - Redirect handling

    - **Browse Page**
      - Header component
      - Featured movie with trailer
      - Scrollable movie lists
      - Recommendation sections

    - **GPT Search**
      - Intelligent search bar
      - Dynamic movie suggestions
      - Multi-language interface

    ## Technical Stack
    - React.js
    - Redux Toolkit
    - Firebase Auth
    - Tailwind CSS
    - TMDB API
    - GPT Integration

    ## Deployment
    Application is deployed and ready to use after completing the pre-requisite steps mentioned above.