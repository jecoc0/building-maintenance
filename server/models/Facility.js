const { Schema, model } = require('mongoose');

const facilitySchema = new Schema(
    {
        facilityName: {
            type: String,
            required: 'Name is required',
            minlength: 1,
            maxlength: 500
        },
        address: {
            type: String,
            required: 'Address is required',
            minlength: 1,
            maxlength: 500
        },
        photoName: {
            type: String,
            required: 'Photo name is required',
            minlength: 1,
            maxlength: 500
        },
        issues: {
            type: Array,            
        }
    }
);

const Facility = model('Facility', facilitySchema);

module.exports = Facility;