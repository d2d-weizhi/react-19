import { Form, useFetcher } from "react-router";
import { getContact, updateContact } from "../data";
import type { Route } from "./+types/Contact";

import type { ContactRecord } from "../data";

export async function loader({ params }: Route.LoaderArgs) {
	const contact = await getContact(params.contactId);
	if (!contact) {
		throw new Response("Not found", { status: 404 });
	}
	
	return { contact };
}

export async function action({ params, request }: Route.ActionArgs) {
	const formData = await request.formData();
	return updateContact(params.contactId, {
		favourite: formData.get("favourite") === "true",
	});
}

export default function Contact({ loaderData }: Route.ComponentProps) {
	const { contact } = loaderData;
	
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
					<Favourite contact={contact}/>
				</h1>
				
				{contact.twitter ? (
					<p>
						<a href={`https://twitter.com/${contact.twitter}`} rel="noopener noreferrer">
							{contact.twitter}
						</a>
					</p>
				) : null}
				
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
	const fetcher = useFetcher();
	const favourite = fetcher.formData
		? fetcher.formData.get("favourite") === "true"
		: contact.favourite;
	
	return (
		<fetcher.Form method="post">
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
		</fetcher.Form>
	);
}