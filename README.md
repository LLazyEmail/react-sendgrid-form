# react sendgrid forms
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## npm commands
`npm run dev` - starts development server  
`npm run build` - make build and HMTL build in `out/` folder  
`npm run lint` - eslint auto fix   
## Main file structure
`components/` - Folder with components  
`components/Layout` - Main layout component  
`components/Layout/Nav` - Navigation component with all form routes   
`pages/api/send-email.js` - email sending function  
`pages/baa/[forms].js` - dynamic route for email forms    
`pages/_app.js` - component for initialize pages     
`pages/index.js` - Template routing!  

## Forms samples

Code samples:

-   https://stackoverflow.com/questions/56109870/how-to-send-email-with-reactjs-and-sendgrid
-   https://medium.com/swlh/how-to-use-sendgrid-to-send-emails-76c514c56782
-   https://www.twilio.com/blog/gatsby-email-contact-form-react-serverless



