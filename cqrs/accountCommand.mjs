// accountCommand.mjs
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { Account } from "./account.mjs";
import { accountCache } from "./cache.mjs"; 

export const accountCommand = {
  addAccount,
  saveAccount,
};

function addAccount(lastName, firstName) {
  const newAccount = new Account(null, lastName, firstName);
  accountCommandDAO.insertAccount(newAccount);
  
  accountCache[newAccount.id] = {
    id: newAccount.id,
    name: `${newAccount.lastName} ${newAccount.firstName}`,
  };

  accountSummaryList.push({
    id: newAccount.id,
    name: `${newAccount.lastName} ${newAccount.firstName}`,
  });
}

function saveAccount(id, lastName, firstName) {
  const account = accountCommandDAO.getAccount(id); 
  if (account) {
    account.lastName = lastName;
    account.firstName = firstName;
    accountCommandDAO.updateAccount(account);
    
    accountCache[account.id] = {
      id: account.id,
      name: `${account.lastName} ${account.firstName}`,
    };

    const summaryIndex = accountSummaryList.findIndex(a => a.id === account.id);
    if (summaryIndex !== -1) {
      accountSummaryList[summaryIndex] = {
        id: account.id,
        name: `${account.lastName} ${account.firstName}`,
      };
    }
  }
}
