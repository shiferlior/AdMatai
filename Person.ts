import sequelize = require('sequelize');

export class Person
{

    private _person;
    constructor(private _sequelize:Sequelize){
        this._person = sequelize.define('person', {
                name: {
                    type: Sequelize.STRING
                },
                phoneNumber: {
                    type: Sequelize.STRING
                },
                description: {
                    type: Sequelize.Text
                }
        });
    }

    public createPerson(name: string, phoneNumber:string,desc:string){
        this._person.create({
            'name' : name,
            'phoneNumber' : phoneNumber,
            'description': desc
        });
    }
}