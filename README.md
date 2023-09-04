Playing with RestfullApis


Adding Posts: Users can create and add new posts by entering a title and body text in a form and clicking the "Add Post" button. The component sends a POST request to the same API to create a new post with the entered title and body. Once the new post is successfully created, it is added to the top of the list of posts displayed on the page.

Displaying Posts: Existing posts are displayed in a list format, where each post shows its title and body text. Additionally, there is a "Delete" button next to each post (although the delete functionality is not implemented in the provided code).

Deleting Posts:
Users have the ability to delete existing posts. Each post displayed in the list includes a "Delete" button. When a user clicks the "Delete" button associated with a particular post, the component sends an HTTP DELETE request to the JSONPlaceholder API with the specific post ID using Axios. 

Updating Posts:
The component also supports updating posts. When a user clicks the "Update" button associated with a post, the component fetches the data for that post from the JSONPlaceholder API using an Axios GET request with the post's specific ID. This fetched data is then displayed in a modal, allowing the user to make changes to the post's title and body. After editing the content in the modal, the user can save the changes. When they click the "Save Changes" button, an Axios PUT request is sent to the API, updating the post with the new title and body. Once the API successfully updates the post, user can view the post.
![Screenshot](https://github.com/Harman-preet-singh13/RestfulApi/assets/63332289/ad967667-b55a-4548-993a-59018006cd22)

![Screenshot_1](https://github.com/Harman-preet-singh13/RestfulApi/assets/63332289/f3ebd2fc-e146-477a-b4c9-6946077661e7)
