import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from '@react-router/dev/routes';

export default [
	index("routes/Home.tsx"),
	route("contacts/:contactId", "routes/Contact.tsx"),
	route("about", "routes/About.tsx"),
] satisfies RouteConfig;
