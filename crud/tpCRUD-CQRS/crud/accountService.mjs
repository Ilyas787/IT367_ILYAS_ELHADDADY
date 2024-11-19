import { accountDAO } from "./accountDAO.mjs";
import { Account } from "./account.mjs"; // Assurez-vous que l'import est correct

export const accountService = {
  addAccount,
  getAccountList,
  saveAccount,
  getAccount,
};

function addAccount(lastName, firstName) {
  const newAccount = new Account(null, lastName, firstName); 
  accountDAO.insertAccount(newAccount);                      
}

function getAccountList() {
  return accountDAO.retrieveAccountList();
}

function saveAccount(id, lastName, firstName) {
  const account = accountDAO.retrieveAccount(id);
  if (account) {
    account.lastName = lastName;
    account.firstName = firstName;
    accountDAO.updateAccount(account);
  }
}

function getAccount(id) {
  return accountDAO.retrieveAccount(id);
}
