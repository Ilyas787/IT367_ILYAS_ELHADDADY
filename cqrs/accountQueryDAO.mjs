// accountQueryDAO.mjs
import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs"; 
import { accountCache } from "./cache.mjs"; // Importation du cache

export const accountQueryDAO = {
  retrieveAccountList,
  retrieveAccount,
};

function retrieveAccountList() {
  return accountSummaryList;
}

function retrieveAccount(id) {
  // D'abord chercher dans accountCache
  const account = accountCache[id];
  if (account) {
    return account; // Retourner directement depuis le cache
  }

  // Si le compte n'est pas dans le cache, on le cherche dans la base de données
  const dbAccount = ACCOUNT_LIST.find((account) => account.id === id);
  if (dbAccount) {
    const { creationDate, ...accountWithoutDate } = dbAccount;
    return accountWithoutDate;
  }
  return null;
}
