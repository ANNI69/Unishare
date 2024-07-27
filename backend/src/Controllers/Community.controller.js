import Community from '../Models/Community.model.js';

export const createCommunity = async (req, res) => {
  try {
    const newCommunity = new Community({
      ...req.body,
      creator: req.user._id 
    });
    await newCommunity.save();
    res.status(201).json(newCommunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }
    res.json(community);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }
    Object.assign(community, req.body);
    await community.save();
    res.json(community);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCommunity = async (req, res) => {
  try {
    const community = await Community.findByIdAndDelete(req.params.id);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }
    res.json({ message: 'Community deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const joinCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }
    await community.addMember(req.user._id);
    res.json({ message: 'Joined community successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
