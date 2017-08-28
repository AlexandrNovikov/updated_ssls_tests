
'use strict';

class Datagenerator extends Helper {

    userCredentials(email,password){
        return {
            email,
            password
        }
    }
}

module.exports = Datagenerator;
