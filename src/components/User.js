import React from "react";
import AddUser from "./AddUser";
import {RiDeleteBin6Line, RiToolsFill} from "react-icons/ri"


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }        
    user = this.props.user
    render() {
      return (
        <div className="user">
                    <RiDeleteBin6Line onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                    <RiToolsFill onClick={() => {
                        this.setState({
                            editForm: !this.state.editForm
                        })
                    }} className="edit-icon" />
                    <img src={this.user.avatar} alt="Фото" />
                    <h3>{this.user.first_name} {this.user.last_name}</h3>
                    <p>{this.user.email}</p>
                    <b>{this.user.isHappy ? "Счастлив :)": "Не особо :("}</b>

                    {this.state.editForm && <AddUser user ={this.user} onAdd={this.props.onEdit} />}
                </div>)
    }
  }

  export default User