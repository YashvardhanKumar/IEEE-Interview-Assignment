# Meeting Scheduler Site


> Submitted to **IEEE Interview for Website Handling** as **Assignment**
## Welcome Visitors

---------------
### In this project meeting handling project
- We can add users by going to `/users/new` route or simply by going to the home page and click on **`Add New Users`** from the Nav Bar

- After filling the required fields, when you submit, it redirects to the `/users/:id`, where **`id`** is the UID of the users which is autogenerated from Mongo DB.

- Then in `/users/all` or simply by going to the home page and click on **`Show all Users`** from the Nav Bar we can see all the details of the Users with their UIDs

- Then we can also add meeting schedules between 2 people on a particular time by going to the route `/meetings/new`  or simply by going to the home page and click on **`Add new Meetings`**. They will be provided the `meetID` and after creating a meeting, it redirects you to the show page, where it it shows what is entered

- Then we can also view all the meeting schedules at one place by going to the route `/meetings/all`  or simply by going to the home page and click on **`Show all Meetings`** which includes the `meetID`, `UID1` and its `username` and `UID2` and its `username`.


# Motivation behind using node.js packages

- ## **Express**
    ---
    - `Express` is used to make routing more flexible and efficient. 
    - It provides robust set of features to develop web and mobile apps.
    - The main use is to create a JSON APIs, Handle various HTTP Requests such as **`POST`, `GET`, `PATCH`, `PUT`, `DELETE`**, etc.

- ## **Mongoose**
    ---
    - `Mongoose` is used to connect Mongo DB with Node.js.
    - It provides some functions which helps in writing into the database.
- ## **Path**
    ---
    - `Path` is used to specify a particular file path from anywhere in the file, irrespective of which directory it belongs to.
    - It makes easier to just write the file name instead of specifying the path again and again everywhere.
    - It allows you to just specify the path where those path are located and then you are good to go.
- ## **Dotenv** 
    ---
    - `Dotenv` is also one of the many packages wherein we specify some of the environment variables in it, such as **`PORT`** and **`DATABASE LINKS`**.


# Some Processes Explained in Detail

- ## **Use of EJS (Embedded JavaScript)**
    ---
    - `EJS` is a view engine which is used to create a template of HTML file, wherein we can easily add data received from backend and show it on the screen of the user. 
    - Here I used `for` loop for showing all the users and meeting details in the `/users/all` and `/meeting/all` to show up. 
    - This makes the HTML code simpler to understand by a developer and is very efficient.
    - I made `views` and stored in the `/views` directly

        > ```javascript
        > app.set("view engine", "ejs");
        > app.set("views", path.join(__dirname, "/views"));
        > ```

- ## **How is data is stored in database**
    ---
    - When user fills a form, the data is not in `JSON` form, to parse it, we use the following piece of code, which is a middleware provided by the `Express` package.

        > ```javascript
        > app.use(express.json());
        > app.use(express.urlencoded({ extended: true }));
        > ```
    - Then after getting parsed into `JSON` format, it can be converted in `BSON` format which is similar to `JSON` but is efficient and more datatypes exists. `BSON` format is to add the data to MongoDB through some MongoDB methods.
    - Then to retrieve the data, BSON is again converted to JSON format and then returned.
- ## **Why `API` calls are made**
    ---
    - `API` calls used in this project are **`POST`** and **`GET`** request.
    - **`POST`** request is used to return the **Body** the data which is parsed into `JSON` later on, to be add or store something.
    - **`GET`** request is used to return the **Query** string, but is not secure enought to use as adding the data especially the data which contains **Password** related things.
---
> ## Thank You For visiting my Repository!
---