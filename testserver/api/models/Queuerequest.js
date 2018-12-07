/**
 * Queuerequest.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //Quang Truong 3/12/2018 add
    customName: {
      type: 'string'
    },
    customPhone: {
      type: 'number'
    }, 
    customEmail: {
      type: 'string'
    } 
  },
  datastore: 'dbsdclv' 
  //Quang Truong 3/12/2018 end add
};

