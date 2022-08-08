# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Brief explanation of what I have done
## [Front](https://github.com/martinalbrnz/itc-challenge-front)
- [Redux](https://github.com/martinalbrnz/itc-challenge-front/commit/987814d951ee2bf45031bbd66a7511c5905c1bbc):
I started to configurate redux to handle state, so I don't have problems later when the app becomes bigger.
It may be an overkill but I found it better than state and props.

- [Router](https://github.com/martinalbrnz/itc-challenge-front/commit/a9f24296c2b7145a5bbbf90f08e16eac06ca01eb):
Add react-router-dom v6 to manage routing.
Add a Header to hold all the nav links.
Add bootstrap and styled the header a little, it worked.

- [Wrong name](https://github.com/martinalbrnz/itc-challenge-front/commit/c275e53f5b7a1c1fdf2b616cc2933580b1b3125f):
Here I realized that the reducer was called Articles instead of Products.
Fix my error to mantain consistence with backend.
Also I showed the store data on my components and it worked.
Seems like a big commit but there were just small name corrections (mostly).

- [Product list and modal](https://github.com/martinalbrnz/itc-challenge-front/commit/50b72dbcd0be4801eef16936fe789fe56148e582):
Add a modal and a DetailedView component to show a Product detailed view.
It works storing an id value on state and using a find on the products store array, then passing it to DetailedView.
Add a price formatter using Intl to show price as $ X.XXX,XX

- [Add product](https://github.com/martinalbrnz/itc-challenge-front/commit/6907e2e1a8a94ed146b444547e6f4ef4b3f6bc04):
Here I spent a long time styling with bootstrap (I was kinda rusty and used to vanilla css).
Add redux logic to add products.
Maybe this could have been two different commits.

- [Form to add](https://github.com/martinalbrnz/itc-challenge-front/commit/ad5e935d4401ce8bb0b0a574d35735ca37abb5da):
Add react-hook-form to handle the add product, joi to handle validations and the resolvers to use everything.
Add a link to header so I can navigate to the Product creation page.
Add Joi validations (almost equal to backend) and error messages.
Fix create Product because I forgot to include body and headers.

- [Pagination](https://github.com/martinalbrnz/itc-challenge-front/commit/c817700e413b5753d6581d0fc6a6be7487b91af1):
Add pagination, showing 3 items per page.
It works slicing the products array, according to a currentPage value stored on local state.
currentPage is an integer, greater or equal than 1.
Slice starts on (currentPage - 1) * itemsPerPage, ends on currentPage * itemsPerPage.
```
E.G.:
currentPage = 1 -> [0, 1, 2]
currentPage = 3 -> [6, 7, 8]
```
Add buttons to show products from different pages.
## [Back](https://github.com/martinalbrnz/itc-challenge-back)
### [Deploy](https://itc-challenge-back.vercel.app/)
- [Setup](https://github.com/martinalbrnz/itc-challenge-back/commit/d4da5a0a95c2bf8d0cf78fbfeee77372411d7137):
Add eslint so I enforce my code writing and readability, used airbnb rules.
Add .gitignore so I don't share .env or upload node_modules.
Add README with instructions to run locally and .env requirements.
Add babel configuration so I can use ES6 with no problems.
Add mongodb and mongoose, I choosed a non relational database because I feel more comfortable with it.
Add dotenv to use .env with no problem.

- [Get All](https://github.com/martinalbrnz/itc-challenge-back/commit/24fc692ce2700ed011c7425954ffd0641bf90932):
Add products mongoose model.
Add getAll controller
Add routes index so I can add centralize and export all routes.
Add products route with GET method associated to getAll controller.

- [Create product](https://github.com/martinalbrnz/itc-challenge-back/commit/3b6f24a02db1e389a74651fc1892ee1326738f21):
Add getById to routes and controllers.
Add create product endpoint with POST method.
Normalized API response structure to:
```
{
	message: <string>, // Text with information about the request/response
	data: <object/array/string>, // Fetched data or error details
	error: <boolean>, // true if error, false if not
}
```

- [Complete CRUD](https://github.com/martinalbrnz/itc-challenge-back/commit/98fdd82797a4ed9ba6197ff9cee93c05df14c2ed):
Add return statement that forgotted before so server doesn't crash if there is an error.
All controllers logic are inside a trycatch statement to prevent server failures.
Used http status according to best practices
```
200 -> GET/PUT
201 -> POST
204 -> DELETE
400 -> REQ ERROR
404 -> NOT FOUND
```

 -[Validations](https://github.com/martinalbrnz/itc-challenge-back/commit/b544b609d2302c13533f4fe7553fcb8eeb37da0d):
 Add Joi validations to create, and update as a middleware.
 Add API docs with postman.

 - [Brand model](https://github.com/martinalbrnz/itc-challenge-back/commit/c92daecbf4c721f025c516189f3f1af10f60fbaf):
 Add brand model according to requirements and linked to Products.
 Add validations to create an update a brand.
 Add brands endpoints to routes index.
 Add endpoints to routes.
 Add populate to Products so they show brand name and logo_url.
 Update Products validation to accept (and require) brand id field.

 -[Setup for deploy](https://github.com/martinalbrnz/itc-challenge-back/commit/254de72329082bc3b8e755d415415c8c64684986): 
Add vercel.json file to deploy.
Add engines to package.json.