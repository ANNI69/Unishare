import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        email,
        passwordHash: hashedPassword,
      },
    })
    res.status(201).json(user)
    console.log(user)
  } catch (error) {
    // console.log(errowr)
    res.status(400).json({ message: error.message })
  }
}

export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        posts: true,
        comments: true,
        communities: true,
      },
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.update({
      where: { id },
      data: {
        username,
        email,
        passwordHash: hashedPassword,
      },
    })

    res.json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await prisma.user.delete({
      where: { id },
    })

    res.json({ message: 'User deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const loginUser = async (req, res) => {
  const jwt = jsonwebtoken;
  try {
    const { email, password } = req.body
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)

    res.json({ token })
  } catch (error) {
    res.status(500).json({ message: error.message })
    console.log(error)
  }
}