import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
	static propTypes = {
		onDeleteContact: PropTypes.func.isRequired,
		contacts: PropTypes.array.isRequired
	}

	render () {
		return (
			<ol className="contact-list">
			{this.props.contacts.map((contact =>
				<li className="contact-list-item" key={contact.id}>
					<div className="contact-avatar" style={{
						backgroundImage: `url(${contact.avatarURL})`
					}} />
					<div className="contact-details">
						<p>{contact.name}</p>
						<p>{contact.email}</p>
					</div>
					<button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove">Remove</button>
				</li>
			))}
		</ol>
		)
	}
}

export default ListContacts;
