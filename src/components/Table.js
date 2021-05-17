import React, { Component } from 'react'
import './main.css';

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: false,
      isError: false
    }
  }


  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('https://reqres.in/api/users?page=1')
    if (response.ok) {

      const temp = await response.json()
      const users = temp.data;
      // console.log(users)

      this.setState({ users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }
  render() {
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (

        <table className="table table-hover justify-content-center mt-5" id="table">
          <thead className="mb-5">
            <tr>
              <th scope="col">Owner</th>
              <th scope="col">End Date</th>
              <th scope="col">Profits</th>
              <th scope="col">Looss</th>
              <th scope="col">Phone</th>

            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}

          </tbody>
        </table>



      ) : (
        <div>
          No users.
        </div>
      )
  }


  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td> <img src={user.avatar} alt="Avatar" className="avatar" /> {user.first_name}
          </td>
          <td>1/1/12</td>
          <td className="text-success">{user.id}</td>
          <td className="text-danger">{user.last_name}</td>
          <td>{user.email}</td>



        </tr >
      )
    })
  }
}