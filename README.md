[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/atherdon/react-sendgrid-form)

# react sendgrid forms
![photo_2020-12-15_05-53-43 (2)](https://user-images.githubusercontent.com/1469198/102169513-10f0c680-3e9b-11eb-987e-70da1b46a9b1.jpg)
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

## Forms
1. Name: Old 2019 version  
Template ID: d-dc18336cd62d40fba8820bccb351aa8f 

`no variables`

![image](https://user-images.githubusercontent.com/1469198/101905625-6a69a480-3bc0-11eb-9dbd-01dfce1255c6.png)

---

2. Name: BAA Credits Finished #sponsors  
Template ID: d-5ae6d711deb14a8485a60d7f247cd117  

variables
`{
    "first_name": string
}`

![image](https://user-images.githubusercontent.com/1469198/102218436-9e0d3d00-3ee6-11eb-93a8-3e31124ad936.png)

---

3. Name: got flagged as BAA #sponsors  
Template ID: d-722b54a3b56a497a9c9124d273b7f641  

variables  
`{
    "first_name":"string", 
    "article_link":"string",
    "article_title":"string", 
    "brand":"string"
}`

![image](https://user-images.githubusercontent.com/1469198/103174216-f6d6c100-4868-11eb-8bd7-8c2b597812b9.png)


---

4. Name: promotional story detected #writers  
Template ID: d-87d998d5e4064de1be6dc56b0790b9fb   

variables  
`{
    "full_name": "string", 
    "url":"string", 
    "time":"string"
}`

![image](https://user-images.githubusercontent.com/1469198/102233730-3f04f380-3ef9-11eb-84a9-0f7dbff49164.png)

---

5. Name: Brand As Author Credits Purchased V1  
Template ID: d-1b0b9282b2bb4b18b5056a22aa25f8fb   


`no variables`


![image](https://user-images.githubusercontent.com/1469198/103173676-25eb3380-4865-11eb-8a34-44bf0014a1cc.png)


---

6. Name: Brand as Author Story Submitted #sponsors  
Template ID: d-1b9ad22192214fb48ed3134fca11ea7a  

variables  
`{
  "handle": "string",
  "storyTitle": "string",
  "hasCredits": boolean
}`

<!-- ![image](https://user-images.githubusercontent.com/1469198/102238724-c3a64080-3efe-11eb-9954-ea911b2c83b8.png) -->

![image](https://user-images.githubusercontent.com/1469198/103173784-fab51400-4865-11eb-8a84-869ceee8248a.png)

---

7. Name: Hacker Noon Enquiry Form

---


8. About Your Hacker Noon Story: BAA
Template ID: d-61b15100fada4f8abc440dcd067c6e20

variables `none`

![image](https://user-images.githubusercontent.com/1469198/103173575-92196780-4864-11eb-9bce-c12115d467a2.png)

---

#### 9. Plagiarism on Hacker Noon
Template ID: d-c9c2606f81064defb31d2c221c078ffd

variables `none`

![image](https://user-images.githubusercontent.com/1469198/104133624-77c7a980-538d-11eb-9cd4-0c2217e55ea8.png)

---




Code samples:

-   https://stackoverflow.com/questions/56109870/how-to-send-email-with-reactjs-and-sendgrid
-   https://medium.com/swlh/how-to-use-sendgrid-to-send-emails-76c514c56782
-   https://www.twilio.com/blog/gatsby-email-contact-form-react-serverless




Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).


![photo_2020-12-15_05-53-43 (2)](https://user-images.githubusercontent.com/1469198/102169513-10f0c680-3e9b-11eb-987e-70da1b46a9b1.jpg)
