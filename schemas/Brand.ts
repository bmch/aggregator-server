import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Brand = list({
	fields: {
		name: text({ isRequired: true }),
		bike: relationship({
			ref: "Bike.brand",
			many: true,
		}),
	},
});
