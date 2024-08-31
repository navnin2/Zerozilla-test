const Agency = require('../models/agency');
const Client = require('../models/client');

exports.createAgencyAndClient = async (req, res) => {
    try {
        const { agency, client } = req.body;

        // Validate required fields for agency
        if (!agency.name || !agency.address1 || !agency.state || !agency.city || !agency.phoneNumber) {
            return res.status(400).json({ message: 'Missing required fields in agency' });
        }

        // Validate required fields for client
        if (!client.name || !client.email || !client.phoneNumber || !client.totalBill) {
            return res.status(400).json({ message: 'Missing required fields in client' });
        }

        const isagency = await Agency.findOne({ name: agency.name });
        let agent_id;
        if (!isagency) {
            const newAgency = new Agency(agency);
            const savedAgency = await newAgency.save();
            agent_id = savedAgency._id
        } else {
            agent_id = isagency._id
        }

        const newClient = await new Client({ ...client, agencyId: agent_id });
        await newClient.save();

        res.status(201).json({ message: 'Agency and Client created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

exports.getAgencyWithTopClient = async (req, res) => {
    try {
        const clients = await Client.find().sort({ totalBill: -1 }).limit(1).populate('agencyId');
        if (clients.length === 0) {
            return res.status(404).json({ message: 'No clients found' });
        }

        const topClient = clients[0];
        res.status(200).json({
            agencyName: topClient.agencyId.name,
            clientName: topClient.name,
            totalBill: topClient.totalBill
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};