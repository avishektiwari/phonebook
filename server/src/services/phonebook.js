import * as queries from "../models/phonebook";

export async function find() {
  const data = await queries.getUsers();
  return data;
}

export async function findById(params) {
  const data = await queries.getUserById(params);
  return data;
}

export async function createUser(body) {
  const data = await queries.createUser(body);
  return data;
}

export async function updateUser(id, body) {
  const data = await queries.updateUser(id, body);
  return data;
}

export async function deleteUser(id) {
  const data = await queries.deleteUser(id);
  return data;
}
