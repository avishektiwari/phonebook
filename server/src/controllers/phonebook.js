import { json } from "express";
import * as phonebookService from "../services/phonebook";

export async function getUsers(req, res, next) {
  try {
    const data = await phonebookService.find(req.query);

    res.json(data.rows);
  } catch (err) {
    next(err);
  }
}

export async function getUsersById(req, res, next) {
  try {
    const data = await phonebookService.findById(req.params.id);

    res.json(data.rows);
  } catch (err) {
    next(err);
  }
}

export async function createUser(req, res, next) {
  try {
    const data = await phonebookService.createUser(req.body);

    console.log(data);

    res.status(201).send(`User added`);
  } catch (err) {
    next(err);
  }
}

export async function updateUser(req, res, next) {
  try {
    const data = await phonebookService.updateUser(req.params.id, req.body);

    res.status(200).send(`User modified with ID: ${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const data = await phonebookService.deleteUser(req.params.id);

    res.status(200).send(`User deleted with ID: ${req.params.id}`);
  } catch (err) {
    next(err);
  }
}
