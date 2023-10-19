import React, { useState, useEffect } from 'react';
import ShowAlbum from './ShowAlbum';
import ShowPhotos from './ShowPhotos';

function ShowUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUserIdAlbum, setSelectedUserIdAlbum] = useState();

  const [buttonTextAlbum, setbuttonTextAlbum] = useState('Get Album');

  const [buttonTextPic, setbuttonTextPic] = useState('Get Picture');
  const [selectedUserIdPic, setSelectedUserIdPic] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);


  const handleAlbumButtonClick = (userId) => {
    setSelectedUserIdAlbum(userId);

    if (buttonTextAlbum === 'Get Album')
      setbuttonTextAlbum('Delete Album');
    else {
      setbuttonTextAlbum('Get Album');
      setSelectedUserIdAlbum(0);
    }
  };

  const handlePictureButtonClick = (userId) => {
    setSelectedUserIdPic(userId);

    if (buttonTextPic === 'Get Picture')
      setbuttonTextPic('Delete picture');

    else {
      setbuttonTextPic('Get Picture');
      setSelectedUserIdPic(0);
    }
  }

  return (

    <div>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleAlbumButtonClick(user.id)}>
                  {buttonTextAlbum}
                </button>
                <button className='btn btn-primary' onClick={() => handlePictureButtonClick(user.id)}>
                  {buttonTextPic}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUserIdAlbum && <ShowAlbum userId={selectedUserIdAlbum} />}
      {selectedUserIdPic && <ShowPhotos userId={selectedUserIdPic} />}
    </div>

  );
}

export default ShowUsers;