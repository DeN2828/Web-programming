import React, { useState, useEffect } from 'react';

function ShowPhotos({userId})
{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
          .then((res) => res.json())
          .then((data) => setUsers(data))
          .catch((error) => console.error(error));
      }, [userId]);

      return(

        <div>
            {users.map((user) => (
                <img src={user.thumbnailUrl} alt={user.title}></img>
            ))}
        </div>

      );
}

export default ShowPhotos;