import { pgTable } from "drizzle-orm/pg-core";
import test from "node:test";

export const workspaces = pgTable( 'workspaces', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode:'string',
    }),
    workspaceOwner: uuid('workspace_owner').noNull(),
    title: text('title').notNull(),
    iconID: text('icon_id').notNull(),
    data: text('data'),
    inTrash: text('in_trash'),
    bannerUrl: text('banner_url'),
    workspaceId: uuid('workspace_id')
    
});
