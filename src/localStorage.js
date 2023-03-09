import { v4 as uuidv4 } from "uuid";
/**
 * @typedef {{ id: string, name: string, surname: string, amount: number }} Account
 * @type {(key: string, data: Account) => void}
 */
export const write = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/** @returns {Account[]} */
export const read = (key) => {
  const data = localStorage.getItem(key);
  if (null === data) {
    return [];
  }
  return JSON.parse(data);
};

export const create = (key, data) => {
  const allData = read(key);
  data.id = uuidv4();
  allData.push(data);
  write(key, allData);
};

export const destroy = (key, id) => {
  const allData = read(key);
  const deletedData = allData.filter((d) => id !== d.id);
  write(key, deletedData);
};

/**
 * @param {string} key
 * @param {Account} data
 */
export const edit = (key, data) => {
  const allData = read(key);
  const editedData = allData.map((item) =>
    data.id === item.id ? { ...item, ...data } : item
  );
  write(key, editedData);
};
