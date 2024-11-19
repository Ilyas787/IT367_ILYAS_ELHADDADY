// accountQuery.mjs
import { accountQueryDAO } from "./accountQueryDAO.mjs";

export const accountQuery = {
  getAccountList,
  getAccount,
};

function getAccountList() {
  return accountQueryDAO.retrieveAccountList();
}

function getAccount(id) {
  return accountQueryDAO.retrieveAccount(id);
}
