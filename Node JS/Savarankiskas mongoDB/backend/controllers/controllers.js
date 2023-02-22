import User from '../models/userModel.js'
import Service from '../models/serviceModel.js'
import mongoose from 'mongoose';

export async function getAllMemberships(req,res){
  try {
    const memberships = await Service.find();
    res.status(200).json(memberships);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}

export async function postNewMembership(req,res){
    try {
    const membership = new Service(req.body);
    await membership.save();
    res.status(201).json(membership);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function deleteMembershipById(req,res){
    try {
    const deletedMembership = await Service.findByIdAndDelete(req.params.id);
    if (!deletedMembership) {
      return res.status(404).json({ message: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function getUsersByOrder(req,res){
  try {
    const order = req.params.order;
    const users = await User.find().sort({ name: order });
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}

export async function postANewUser(req,res){
  try {
    const {
      name,
      surname,
      email,
      service_id
    } = req.body

    const newUser = {
      name,
      surname,
      email,
      service_id: mongoose.Types.ObjectId(service_id)
    }
    const user = await User.create(newUser)
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}
