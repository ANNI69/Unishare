// communityController.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createCommunity = async (req, res) => {
  try {
    const { name, description,moto,imageUrl } = req.body;
    const creatorId = req.user.id; // Assuming you have user info in req.user after authentication

    const newCommunity = await prisma.community.create({
      data: {
        name,
        description,
        moto,
        imageUrl,
        members: { connect: { id: creatorId } },
        moderators: { connect: { id: creatorId } },
        memberIds: [creatorId],
        moderatorIds: [creatorId],
      },
      include: {
        members: { select: { id: true, username: true } },
        moderators: { select: { id: true, username: true } },
      },
    });

    res.status(201).json(newCommunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const community = await prisma.community.findUnique({
      where: { id },
      include: {
        members: { select: { id: true, username: true } },
        moderators: { select: { id: true, username: true } },
      },
    });

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    res.json(community);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const userId = req.user.id;

    const community = await prisma.community.findUnique({ where: { id } });

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    if (!community.moderatorIds.includes(userId)) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this community" });
    }

    const updatedCommunity = await prisma.community.update({
      where: { id },
      data: { name, description },
    });

    res.json(updatedCommunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const community = await prisma.community.findUnique({ where: { id } });

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    if (!community.moderatorIds.includes(userId)) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this community" });
    }

    await prisma.community.delete({ where: { id } });

    res.json({ message: "Community deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const joinCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const updatedCommunity = await prisma.community.update({
      where: { id },
      data: {
        members: { connect: { id: userId } },
        memberIds: { push: userId },
      },
      include: {
        members: { select: { id: true, username: true } },
      },
    });

    res.json(updatedCommunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const leaveCommunity = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const community = await prisma.community.findUnique({ where: { id } });

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    const updatedCommunity = await prisma.community.update({
      where: { id },
      data: {
        members: { disconnect: { id: userId } },
        memberIds: {
          set: community.memberIds.filter((memberId) => memberId !== userId),
        },
      },
      include: {
        members: { select: { id: true, username: true } },
      },
    });

    res.json(updatedCommunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addModerator = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const currentUserId = req.user.id;

    const community = await prisma.community.findUnique({ where: { id } });

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    if (!community.moderatorIds.includes(currentUserId)) {
      return res
        .status(403)
        .json({ message: "Not authorized to add moderators" });
    }

    const updatedCommunity = await prisma.community.update({
      where: { id },
      data: {
        moderators: { connect: { id: userId } },
        moderatorIds: { push: userId },
      },
      include: {
        moderators: { select: { id: true, username: true } },
      },
    });

    res.json(updatedCommunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const removeModerator = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const currentUserId = req.user.id;

    const community = await prisma.community.findUnique({ where: { id } });

    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    if (!community.moderatorIds.includes(currentUserId)) {
      return res
        .status(403)
        .json({ message: "Not authorized to remove moderators" });
    }

    const updatedCommunity = await prisma.community.update({
      where: { id },
      data: {
        moderators: { disconnect: { id: userId } },
        moderatorIds: {
          set: community.moderatorIds.filter((modId) => modId !== userId),
        },
      },
      include: {
        moderators: { select: { id: true, username: true } },
      },
    });

    res.json(updatedCommunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCommunities = async (req, res) => {
  try {
    const communities = await prisma.community.findMany({
      include: {
        _count: {
          select: { members: true },
        },
      },
      orderBy: {
        members: {
          _count: "desc",
        },
      },
    });

    res.json(communities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
