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
    <div className={`flex flex-col  w-full ${ menubar ? " lg:w-5/6 " :" lg:w-full " } bg-black overflow-y-auto relative`}>
     
      <div className={`bg-gray-400 text-center py-2 capitalize fixed top-0 w-full ${ menubar ? " lg:w-5/6 " :" lg:w-full " } flex  justify-between px-6`}><p>q</p><h1 className="text-4xl font-semibold text-red-800 ">Crud app</h1><p>w</p></div>

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

      <h1 className="">table of Users</h1>

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
      <div className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nesciunt, doloremque tenetur voluptates ipsam pariatur ullam delectus sint explicabo. Inventore qui, ad in quod doloremque voluptatum excepturi accusamus quam impedit exercitationem dignissimos obcaecati nostrum neque aliquam illum explicabo minima culpa aspernatur corrupti tempora consectetur architecto. Suscipit culpa totam quibusdam! Enim ea dignissimos soluta dolorum molestiae nisi impedit modi aperiam cupiditate temporibus tempore sunt, est perferendis perspiciatis neque expedita cumque qui, ratione eos corrupti. Neque eum soluta cum odit pariatur laboriosam? Ipsam laboriosam, esse reiciendis eius quaerat eaque sapiente quasi officia deserunt at facilis recusandae harum tempore eum error obcaecati quisquam, molestias quia quibusdam id! Temporibus ratione a ad ut repellendus vero laboriosam qui voluptatum facere dolores ex eligendi amet expedita saepe, veniam assumenda! Repellat cum magnam placeat minima necessitatibus inventore assumenda non, delectus vel! Modi, aperiam voluptates! Necessitatibus modi reiciendis molestiae voluptatem amet pariatur quia quis et id sit ratione eos mollitia recusandae nihil voluptatibus, quibusdam nobis quos officiis. Quibusdam ipsum dolor, earum vero minima dolorem eveniet quo esse. Fuga expedita est voluptatum illum deserunt tempore et minus ex provident corporis sequi aliquam, necessitatibus repellendus facilis ea amet excepturi placeat aut repudiandae officia quae itaque sunt magnam odit. Dicta voluptates velit delectus provident beatae quaerat accusamus dignissimos culpa assumenda id laboriosam nulla cupiditate nostrum minima distinctio praesentium minus esse eligendi, necessitatibus doloribus. Nam id quidem, nihil a iusto ex dolores illo accusamus pariatur voluptatibus rerum praesentium cupiditate nostrum mollitia error debitis ut voluptate. Commodi quaerat ratione autem aliquid exercitationem recusandae minima laudantium aspernatur vero, nesciunt eligendi tenetur dolore molestiae neque adipisci reiciendis tempora! Autem, facere! Temporibus, unde! Culpa provident quos dolorem quidem deleniti laboriosam adipisci, illum dolor, voluptates modi error consectetur voluptate eius vel, commodi esse! Vel rem hic pariatur fuga nisi dolor odit vero quibusdam velit aperiam alias est similique, sunt quo ad eum dignissimos itaque vitae optio illum nemo minus tempore quisquam ut! Tempore, nostrum tempora neque sint architecto adipisci beatae nesciunt similique corrupti voluptate in illum quod error harum necessitatibus. Minima provident facilis, dolores ad tempore similique quas iusto sapiente numquam soluta quae assumenda iure doloribus doloremque, eaque culpa rerum eum voluptate, quis nostrum exercitationem inventore asperiores dolorem? Consequuntur illo, fugiat vitae, quasi nostrum ipsum nemo temporibus aliquid harum eligendi cum facere molestias necessitatibus laudantium, quidem modi? Repellendus illum ea commodi perferendis. Quibusdam iusto culpa, accusantium consectetur expedita magni debitis tenetur. Cum quo accusantium, commodi molestiae facilis perspiciatis. Doloribus expedita similique provident quas nesciunt sint perferendis quaerat ratione, nihil qui et voluptatibus, placeat quidem amet, adipisci eveniet ipsum molestiae veritatis autem. Sed, voluptatibus! Aspernatur eius totam fuga dolore necessitatibus. Consectetur nulla, possimus error eaque iste quidem vel est adipisci aut aperiam cupiditate ut amet explicabo nam reiciendis culpa. Eum, ipsam velit porro voluptatibus aperiam harum. Dolorem autem consequatur delectus natus, hic ratione ut ea, non optio voluptatum reprehenderit provident, possimus fugit ab ducimus blanditiis atque praesentium nihil veniam quasi architecto numquam? Ratione vero voluptatibus, adipisci delectus sed in natus maxime explicabo excepturi nobis consectetur ex ipsum hic.</div>
    </div>
  );
}

export default Crud