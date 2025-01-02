import { Form } from "react-router";

import type { ContactRecord } from "../data";

export default function Contact() {
	const contact = {
		first: "Your",
		last: "Name",
		avatar: "https://placecats.com/200/200",
		twitter: "your_handle",
		notes: "Some notes",
		favourite: true,
	};
	
	return (
			<div id="contact">
				<div>
					<img
						alt={`${contact.first} ${contact.last}`}
						key={contact.avatar}
						src={contact.avatar}
					/>
				</div>
				
				<div>
					<h1>
						{contact.first || contact.last ? (
								<>
									{contact.first} {contact.last}
								</>
						) : (
								<i>No Name</i>
						)}
						<Favourite contact={contact} />
					</h1>
					
					{contact.twitter ? (
							<p>
								<a href={`https://twitter.com/${contact.twitter}`} rel="noopener noreferrer"
								>
									{contact.twitter}
								</a>
							</p>
					) : null }
					
					{contact.notes ? <p>{contact.notes}</p> : null}
					
					<div>
						<Form action="edit">
							<button type="submit">Edit</button>
						</Form>
						
						<Form
							action="destroy"
							method="post"
							onSubmit={(e) => {
								const response = confirm("Please confirm you want to delete this record.");
								if (!response) {
									e.preventDefault();
								}
							}}
						>
							<button type="submit">Delete</button>
						</Form>
					</div>
				</div>
			</div>
	);
}

function Favourite({ contact }: { contact: Pick<ContactRecord, "favourite"> }) {
	const favourite = contact.favourite;
	
	return (
			<Form method="post">
				<button
					aria-label={favourite
						? "Remove from favourites"
						: "Add to favourites"
					}
					name="favourite"
					value={favourite ? "false" : "true"}
				>
					{favourite ? "★" : "☆"}
				</button>
			</Form>
	);
}