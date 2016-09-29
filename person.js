"use strict";
const sequelize = require('sequelize');
class Person {
    constructor(_sequelize) {
        this._sequelize = _sequelize;
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
    createPerson(name, phoneNumber, desc) {
        this._person.create({
            'name': name,
            'phoneNumber': phoneNumber,
            'description': desc
        });
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map