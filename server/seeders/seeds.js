const db = require('../config/connection');

const { Facility } = require('../models');
const { create } = require('../models/Facility');

console.log(Facility, "hi")

db.once('open', async () => {
    await Facility.deleteMany({});

    let facilityName = "City Offices";
    let address = "40 S Main St, Spanish Fork";
    let photoName = "../../assets/city-office.jpg"

    console.log("Creating faciliy");

    let createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Senior Center";
    address = "167 W Center St, Spanish Fork"
    photoName = "../../assets/senior-center.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Fairgrounds";
    address = "475 S Main St, Spanish Fork"
    photoName = "../../assets/Fairgrounds.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Justice Center";
    address = "775 W Center St, Spanish Fork"
    photoName = "../../assets/justice-center.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Library";
    address = "49 S Main St, Spanish Fork"
    photoName = "../../assets/Library.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })

    facilityName = "Fire Station";
    address = "370 N Main St, Spanish Fork"
    photoName = "../../assets/Fire-Station.jpg"

    createdFacility = await Facility.create({ facilityName, address, photoName })


    console.log(createdFacility);

    console.log('Seeding complete');
    process.exit(0)
})

