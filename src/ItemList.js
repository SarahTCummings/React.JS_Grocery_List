import React, { Component } from 'react';


class ContactCard extends Component {

    render() {
        // Here we added a delete button. When clicked, it directly calls the
        // function that was passed to us via onDelete=....
        return (
            <div className="ContactCard">
                <div className="ContactCard__img-container">
                    <img className="ContactCard__img" src={this.props.contact.imgUrl} alt="profile pic" />
                </div>
                <div className="ContactCard__name">{this.props.contact.name}</div>
                <div className="ContactCard__email">{this.props.contact.email || "No Email"}</div>
                <button className="ContactCard__delete-button"
                        title={"Delete " + this.props.contact.name}
                        onClick={this.props.onDelete}>
                    <i className="fa fa-trash fa-lg"></i>
                </button>
            </div>
        );
    }
}
































export default ItemList;
