# G4B4_ReactJS_GradedProject4

##To run db.json file on server:
###  1. Install: 
          npm i json-server
###  2. Add the following to package.json file
          "scripts": {
		            "start": "json-server data.json --port=5700"
	        }
      
## Now to utilize REACT:
###  1. Create React app:  
           npx create-react-app movies-on-the-tip --template=typescript
###  2. Add React Bootstrap package:
           npm i react-bootstrap bootstrap
###  3. To utilize Font-Awesome Icons:
####           a. Add SVG Core
                    npm i --save @fortawesome/fontawesome-svg-core
####           b. Add Icon Packages
                    npm i --save @fortawesome/free-solid-svg-icons
                    npm i --save @fortawesome/free-regular-svg-icons
####           c. Add the React Component
                    npm i --save @fortawesome/react-fontawesome@latest
####           d. Add
		    npm i @fortawesome/fontawesome-free
###  4. Fetch data from backend using API:
           npm i axios
###  5. Create Routes:
           npm i react-router-dom @types/react @types/react-router-dom
