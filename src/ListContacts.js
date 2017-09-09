import React from 'react';
import PropTypes from 'prop-types';

function ListContacts (props) {
	return (
		<ol className="contact-list">
		{props.contacts.map((contact =>
			<li className="contact-list-item" key={contact.id}>
				<div className="contact-avatar" style={{
					backgroundImage: `url(${contact.avatarURL})`
				}} />
				<div className="contact-details">
					<p>{contact.name}</p>
					<p>{contact.email}</p>
				</div>
				<button onClick={() => props.onDeleteContact(contact)} className="contact-remove">Remove</button>
			</li>
		))}
	</ol>
	)
}

ListContacts.propTypes = {
	onDeleteContact: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired
}

export default ListContacts;
