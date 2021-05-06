import "dotenv/config";
import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
	withItemData,
	statelessSessions,
} from "@keystone-next/keystone/session";
import {
	BikeImage,
	Bike,
	Brand,
	User,
	Publication,
	PublicationImage,
	Weight,
	Review,
} from "./schemas/index";

import { insertSeedData } from "./seed-data";

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
	maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
	secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
	listKey: "User",
	identityField: "email",
	secretField: "password",
	initFirstItem: {
		fields: ["name", "email", "password"],
		// TODO: - add initial roles
	},
});

export default withAuth(
	config({
		// @ts-ignore
		server: {
			cors: {
				origin: [process.env.FRONTEND_URL],
				credentials: true,
			},
		},
		db: {
			// adapter: 'knex',
			adapter: "mongoose",
			url: databaseURL,
			// schemaName: 'public',
			// dropDatabase: false,
			async onConnect(keystone) {
				console.log("Connected to the database!");
				if (process.argv.includes("--seed-data")) {
					await insertSeedData(keystone);
				}
			},
		},
		lists: createSchema({
			User,
			Bike,
			BikeImage,
			Brand,
			Publication,
			PublicationImage,
			Weight,
			Review,
		}),
		ui: {
			// Show the UI only for poeple who pass this test
			isAccessAllowed: ({ session }) => {
				console.log(session);
				return !!session?.data;
			},
		},
		session: withItemData(statelessSessions(sessionConfig), {
			User: "id",
		}),
	})
);
