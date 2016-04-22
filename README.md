# ShackingBlog
Configurable blog web app built with Mantra.

## Description
- this is a: web app
- used as: official web site or blog for organization or personal use
- built with: Meteor, React, Mantra ...
- target: configurable (for use), clear code (for communication and learning)
- welcome: any helps, issues, shares and suggestions

## Get Started

### Install
- install npm and meteor
- clone this repo and run `npm i` and `meteor`
- open `http://localhost:3000` on your browser

### Manage Admin User
Now you can see nearly nothing. You will want to config yours site. But before that, you need to create an admin user.

- goto `/signup` page, and create a user
- find this user in mongodb and add field `"roles": {"__global_roles__": ["Admin"]}`

Now you have an admin user. You can login through `/login` page, logout through `/logout` page, and change password
through `/change-password` page.

Note: If you lost a user, you have to remove it from db and create a new one.

### Manage System
With admin user logged in, you can manage the system (site, app, whatever) through `/admin` page.

Note: by now, most of the settings are json objects or arrays of json objects. If you are not familiar with json,
you should have a quick learning.

Here is a list of what you can set: todo

### Manage Posts
You can create, update, publish/unpublish, remove posts through `/blog/admin` page.

Note: to make this app 'lite', it doesn't support file storage by now. So you will need to save your images and videos
in some other places, and refer to them through url in your posts. Though you may use base64 to embed image into text,
I think it's a bad idea unless the image is small enough.

## Todo
- deploy a demo site
- upload more docs
- plan and develop more features
- add settings doc

- support some chinese social comment system
- support tag, sort, featured image, search
- with featured image, index page can auto-generate content
- optimize style
- use a single style file to make override convenient
- support upload image

## License
MIT
