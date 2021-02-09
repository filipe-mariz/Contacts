import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class contact1611168423875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'contact',
            columns: [
                {
                   name: 'id', 
                   type: 'integer',
                   unsigned: true,
                   isPrimary: true,
                   isGenerated: true,
                   generationStrategy: 'increment'
                },

                {
                    name: 'firstName',
                    type: 'varchar'
                },

                {
                    name: 'secondName',
                    type: 'varchar'
                },

                {
                    name: 'ddd',
                    type: 'integer'
                },

                {
                    name: 'number',
                    type: 'varchar'
                },

                {
                    name: 'email',
                    type: 'varchar'
                },

                {
                    name: 'adress',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contact');
    }

}
