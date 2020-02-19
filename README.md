This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Google Authentication API

We are going to use [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/googlescopes). OAuth can be used for user identification in the app using outside service provider like Google, Linkedin or Facebook. User authorizes our app to access their information, and then the service provider tells us about the user.

Now with Google, you can access to different portion of your users' account with their agreement. For example, if you want to keep your users engaged and organised, you can explore [Google Calendar API](https://developers.google.com/calendar). The Calendar API lets you integrate your app with Google Calendar, creating new ways for you to engage your users. For more informations, visit [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/googlescopes).

To get our user's email and basic profile information, we are going to use a scope named [Email or Profile](https://developers.google.com/identity/).

### Steps for setting up OAuth

1. Create a new project at console.developers.google.com/
2. Set up an OAuth confirmation screen
3. Generate an OAuth Client ID
4. Install Google's API library
5. Initialize it with the OAuth Client ID

### Google Authentication Component

#### Gapi library

I use a Google Authentication Component. Make sure the libraries gapi get called any time the user clicks on 'Sign-In' button.

Any time that our component is rendered onto the screen we're going to try to load up that client portion of the library. 

When we load up that library it takes some amount of time for the library to reach over to Google servers and download some additional Javascript code. So we need to essentially get a callback of when that process is complete. 

So after we successfully load up the client library we're going to initialize our application with the OAuth Client ID, and specify the name of scope 'email' that we need in the app.

How to interact with gapi library ?
We are using getAuthInstance which returns the GoogleAuth object, that has different functions assigned to it that allow us to figure out if the user is signed in thanks to event listener. 
See more on [methods and classes available in gapi library](https://developers.google.com/identity/sign-in/web/reference)

Each time there is a change in OAuth status, we need to update the button to render, with the appropriate onClick events handlers.

#### Redux Architecture Design

The redux store contains a boolean flag OAuth status which is true if the user is signed in and false if not. We are using signIn() and signOut() actions creators to update that OAuth status. In that way,  Google OAuth Components and the other components can have access to that OAuth Status information. 

Make sure that you have installed redux and react-redux

For signIn action creator, I define a type 'SIGN_IN'.
For signOut action creator, I define a type 'SIGN_OUT'.
I import actions creators into GoogleAuth component.

I define authentication reducer with a switch statement depending to the type: if the type is 'SIGN_IN', I update state with the flag isSignedIn to true and if the type is 'SIGN_OUT', I update state with the flag isSignedIn to false. I use a function to get the state from authentication reducer.

## Handle Form Events

Make sure to install Redux form and to import into our reducers 

#### Form Component

I define a form component with some input elements to let our users subscribe. Each input has a value and onChange properties.


#### Redux Form library

The [Redux Form](https://redux-form.com/8.3.0/) Reducer is going to hold all the states of our different inputs of the form component. That can be the value of some input element or the selection of some dropdown or the current checkboxes.

In order to make sure that we can get the data from that Redux Store, I define a function that gets the state of the form.

Import Field and reduxForm into the Form component 

In order to use Field, we need to define how to render each field with a property called component.

I use handleSubmit to get all the values of the form. In order to check all the inputs, I define a validate function that is going to return an empty object if inputs are not filled, and it is going to return an object for each invalid field, the object returned is a key-value pair on the object with the name of the field and the error message.

## Modal

I insert a div with id modal into public source index.html file and use ReactDOM.createPortal.

## Context

I use React.createContext to define a default context.
I need to use Context.Provider from the component that should update the context according to user's actions. And all the children components use Context.Consumer to use that context value.


