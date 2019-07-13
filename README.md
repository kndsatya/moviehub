#moviehub
website Link: https://moviehub-client.herokuapp.com/

Users:
----------
This website has two users Critic, AUDIENCE. Critics can read, write, update and delete the reviews. AUDIENCE can like an unlike a movie. Users can follow/unfollow each other and can visit their profiles.

There is one more user called anonymus user who has a functionality to browse through the site content, can search for movies and view user's profile. But can not write/edit/delete reviews, like/unlike movies and follow/unfollow users.

List of pages in the web application:

Home Page:
----------

This site shows a list of liked movies(for a normal user) / list of reviewed movies(for a critic) followed by a list of movies present in our local database.

Search Page:
--------------

Search Page has a search bar where you can enter a keyword like a movie name/genre etc... and click on the search button for the results. Then a call will be made to 3rd party open source APIs 'OMDB' and 'TMDB' obtain search results, movie related data and displays the results on the page along with saving them in local database.

Signup:
-----------

Helps a user to register.

Sign In:
----------

Helps a user to login.

Profile:
---------

Profile page contains personal details such as email, contact number etc...

Existing users:
----------------
AUDIENCE:
-----------
user name: alice password: alice

CRITIC:
--------------
user name: bob password: bob
