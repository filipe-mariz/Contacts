import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class image1611170625920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'image',
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
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'contact_id', 
                    type: 'integer', 
                }
            ],

            foreignKeys: [
                {
                    name: 'contactImage',
                    columnNames: ['contact_id'],
                    referencedTableName: 'contact',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('image');
    }

}
