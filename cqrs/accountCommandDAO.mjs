// accountCommandDAO.mjs
import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
  insertAccount,
  updateAccount,
  getAccount
};

function insertAccount(account) {
  ACCOUNT_LIST.push(account);
  console.log("Comptes après ajout : ", ACCOUNT_LIST);
}

function updateAccount(account) {
  const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
  if (index !== -1) {
    ACCOUNT_LIST[index] = account;
    console.log("Comptes après mise à jour : ", ACCOUNT_LIST);
  }
}

function getAccount(id) {
  return ACCOUNT_LIST.find((account) => account.id === id);
}
