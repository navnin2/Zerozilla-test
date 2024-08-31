const Client = require('../models/client');

exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    const updatedClient = await Client.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};