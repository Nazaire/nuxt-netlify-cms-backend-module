# nuxt-netlify-cms-backend-module
A nuxt.js module that implements a backend server for Netlify CMS

This module runs file storage proxy server that Netlify CMS can use as a backend. It installs [Netlify CMS Proxy Server](https://www.npmjs.com/package/netlify-cms-proxy-server) as server middleware so it can be easily installed as a nuxt module.

### Install
```
npm install git+https://github.com/Nazaire/nuxt-netlify-cms-backend-module.git
```
```
//nuxt.config.js

/*
 ** Nuxt.js modules
 */
modules: [ 
  ...
  'nuxt-netlify-cms-backend-module'
  ...
],
/*
 ** cms backend configuration (optional)
 */
cms: {
  path: '/admin' // This is the default path, if you change this don't forget to change backend.proxy_url in your config.yml
},
```

Done! The cms backend runs at /admin/api/v1 by default.  
**You need to add auth middleware that protect the api yourself.**

### Setup
Point netlify CMS to the backend api
```
//config.yml

backend:
  name: proxy
  proxy_url: /admin/api/v1
  
 ...
```
 
 ## Using your content
 
 ### Nuxtent
 I recommend installing [nuxtent](https://github.com/nuxt-community/nuxtent-module) which provides a plugin you can use to access your CMS content.
 
 These templates were a good reference: https://github.com/nuxt-community/nuxtent-module/tree/master/examples
 
 Specify your content in the nuxtent.config.js file, and use the $content plugin to fetch your content. [Example.](https://nuxtent-module.netlify.com/guide/usage/)

 ### Configuring Netlify CMS
 
 The most common installation of netlify CMS is creating an admin folder in /static/admin that contain the index.html and config.yml. [See Netlify's guide.](https://www.netlifycms.org/docs/nuxt/)
 
 
