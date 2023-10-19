import React, { useState, useEffect } from 'react';

function ShowAlbum({userId})
{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
          .then((res) => res.json())
          .then((data) => setUsers(data))
          .catch((error) => console.error(error));
      }, [userId]);

      return(
        <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );

}

export default ShowAlbum; 