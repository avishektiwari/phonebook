import { Pool } from "pg";
import config from "../env";

const pool = new Pool(config.database);

export async function getUsers() {
  const data = pool.query("SELECT * FROM users ORDER BY id ASC");
  return data;
}

export async function getUserById(params) {
  const id = parseInt(params);
  const data = pool.query(`SELECT * FROM users WHERE id = ${id}`);

  return data;
}

export async function createUser(body) {
  const { name, phone_number, email, blood_group, address } = body;

  const data = pool.query(
    `INSERT INTO users (name,phone_number,email,blood_group,address) VALUES ($1,$2,$3,$4,$5)`,
    [name, phone_number, email, blood_group, address]
  );

  return data;
}

export async function updateUser(params, body) {
  const id = parseInt(params);
  const { name, phone_number, email, blood_group, address } = body;

  const data = pool.query(
    `UPDATE users SET name = $1, phone_number = $2, email = $3, blood_group = $4, address = $5 WHERE id = ${id}`,
    [name, phone_number, email, blood_group, address]
  );

  return data;
}

export async function deleteUser(params) {
  const id = parseInt(params);
  const data = pool.query(`DELETE FROM users WHERE id = ${id}`);

  return data;
}
