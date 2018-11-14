###•Design and developing the API
###•Testing the API
###•Maximizing server utilization

- Data
- Representation
- Resources

#### The representation
 - What do we want our users to know?
     - Get notes for a particular user?
     - Insert or delete individual notes?
     - Update the content of a note?

-  Our users should be able to:
     - Move notes to another account
     - move a note to another friend
     
- The Resources
    - Collection resource:/friends/:friend_id/notes
     GET - Get a friend's notes-

- Element resource:/friends/:friend_id/notes/:note_id
