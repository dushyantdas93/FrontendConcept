import React, { useState } from 'react'
import Home from './Home'
import Sidebar from './Sidebar'


const Crud = () => {
  const [user, setUser] = useState({ name:"", email:"" })
  const [users, setusers] = useState([])
  const [editUser,setEditUser] = useState(null)
  
  const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editUser == null) {
   setusers([...users, user]);
    } else {
      users[editUser] = user
      setEditUser(null)
}

    
    setUser({ name: "", email: "" })
  }

console.log(editUser)
  return (
    <>
      <Sidebar />
      <h1 className="text-4xl">Crud app</h1>

      <form onSubmit={handleSubmit} >
        <input type="text" name='name' value={user.name}  placeholder="Enter Your name" onChange={handleChange} />
        <input type="text" name='email' value={user.email}  placeholder="Enter Your name" onChange={handleChange} />
        <button>{editUser == null ? "Add" : "Update"}</button>
      </form>

      <h1>table of Users</h1>

      {users.length == 0 ? (
        <p>Users not found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>sno</th>
              <th>name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
              {users.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => {
                      setEditUser(idx)
                      setUser({ name: item.name, email: item.email });
                    }}>update</button>
                    <button
                      onClick={() =>
                        setusers(users.filter((user, index) => index != idx))
                      }
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Crud