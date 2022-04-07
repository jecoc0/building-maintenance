const db = require('../config/connection');

const { Facility } = require('../models');
const { create } = require('../models/Facility');

console.log(Facility, "hi")

db.once('open', async () => {
    await Facility.deleteMany({});

    let facilityName = "City Offices";
    let address = "1234 Street";
    let photoName = "../../assets/city-office.jpg"

    console.log("Creating faciliy");

    let createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Senior Center";
    address = "456 Main Street"
    photoName = "../../assets/senior-center.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Fairgrounds";
    address = "55656 Main Street"
    photoName = "../../assets/Fairgrounds.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Justice Center";
    address = "456 Main Street"
    photoName = "../../assets/justice-center.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Library";
    address = "9887 Main Street"
    photoName = "../../assets/Library.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Fire Station";
    address = "12356 Main Street"
    photoName = "../../assets/Fire-Station.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })


    console.log(createdFacility);

    console.log('Seeding complete');
    process.exit(0)
})

