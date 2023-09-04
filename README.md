Playing with RestfullApis


Fetching Posts: When the component mounts, it sends a GET request to an external API (https://jsonplaceholder.typicode.com/posts) to retrieve a list of posts limited to 10 items. These posts are then displayed in the component.

Adding Posts: Users can create and add new posts by entering a title and body text in a form and clicking the "Add Post" button. The component sends a POST request to the same API to create a new post with the entered title and body. Once the new post is successfully created, it is added to the top of the list of posts displayed on the page.

Displaying Posts: Existing posts are displayed in a list format, where each post shows its title and body text. Additionally, there is a "Delete" button next to each post (although the delete functionality is not implemented in the provided code).
![Screenshot](https://github.com/Harman-preet-singh13/RestfulApi/assets/63332289/ad967667-b55a-4548-993a-59018006cd22)
