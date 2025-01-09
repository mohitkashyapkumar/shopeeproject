This is the readme file for ShoppeStore Project By Mohit KUmar

- First of all run command: npm intsall 			//It will install all node modules to run the app
-Then Run:  npm run dev						// It will initiate the dev mode and make a Local port Url to preview



If neccessary Tailwind :
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



@tailwind base;
@tailwind components;
@tailwind utilities;

npm run dev


https://github.com/mohitkashyapkumar/TODOlist.git