import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from '@react-router/dev/routes';

export default [
	layout("layouts/SideBar.tsx", [
		index("routes/Home.tsx"),
		route("contacts/:contactId", "routes/Contact.tsx"),
		route(
			"contacts/:contactId/edit",
			"routes/EditContact.tsx"
		),
	]),
	route("contacts/:contactId/destroy", "routes/DestroyContact.tsx"),
	route("about", "routes/About.tsx"),
] satisfies RouteConfig;
