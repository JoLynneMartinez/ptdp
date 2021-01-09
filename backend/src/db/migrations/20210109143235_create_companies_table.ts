import * as Knex from "knex";
import { Tables } from '../constants';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(Tables.companies, (table) => {
        table.increments();
        table.timestamps(true, true)

        table.string('name');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable(Tables.companies);
}

