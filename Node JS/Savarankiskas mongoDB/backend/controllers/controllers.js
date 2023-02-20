import express from 'express'
const router = express.Router();
import Membership from  '../models/membershipModel'
import User from '../models/userModel'

async function getAllMemberships(req,res){
  try {
    const memberships = await Membership.find();
    res.status(200).json(memberships);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}

async function postNewMembership(req,res){
    try {
    const membership = new Membership(req.body);
    await membership.save();
    res.status(201).json(membership);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function deleteMembershipById(req,res){
    try {
    const deletedMembership = await Membership.findByIdAndDelete(req.params.id);
    if (!deletedMembership) {
      return res.status(404).json({ message: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

async function getUsersByOrder(req,res){
  try {
    const order = req.params.order;
    const users = await User.find().sort({ name: order });
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}

async function postANewUser(req,res){
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}

export default router
