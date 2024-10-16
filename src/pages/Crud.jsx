import React, { useState } from 'react'
import Home from './Home'
import Sidebar from './Sidebar'


const Crud = ({menubar}) => {
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
    <div
      className={`flex flex-col  w-full ${
        menubar ? " lg:w-5/6 " : " lg:w-full "
      }  overflow-y-auto relative`}
    >
      <div
        className={`bg-gray-400 text-center py-2 capitalize fixed top-0 w-full ${
          menubar ? " lg:w-5/6 " : " lg:w-full "
        }  px-6`}
      >
        <h1 className="text-4xl font-semibold text-red-800 ">Crud app</h1>
      </div>

      <form onSubmit={handleSubmit} className="pt-20">
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter Your name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter Your name"
          onChange={handleChange}
        />
        <label htmlFor=""> gender</label>
        <input type="checkbox" name="" id="" />
        <input type="checkbox" name="" id="" />
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
                    <button
                      onClick={() => {
                        setEditUser(idx);
                        setUser({ name: item.name, email: item.email });
                      }}
                    >
                      update
                    </button>
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
    </div>
  );
}

export default Crud