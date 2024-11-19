import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount,
  retrieveAccountList,
  updateAccount,
  retrieveAccount,
};

function insertAccount(account) {
  // Ajouter le compte à la base de données 
  ACCOUNT_LIST.push(account);
  // Afficher le contenu de la base de données après l'insertion
  //console.log("Current Account List:");
  //console.log(ACCOUNT_LIST);
}

function retrieveAccountList(id) {
    return ACCOUNT_LIST; // Retourne la liste complète des comptes  
}

function retrieveAccount(id) {
  const account = ACCOUNT_LIST.find((account) => account.id === id);
  if (account) {
    // Retourner un nouvel objet avec une propriété `name` (concaténation de `lastName` et `firstName`)
    return {
      id: account.id,
      name: `${account.lastName} ${account.firstName}`,
      creationDate: account.creationDate,
    };
  }
  return null; // Retourne null si le compte n'est pas trouvé
}


function updateAccount(account) {
  const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
  if (index !== -1) {
    // Mise à jour des informations du compte
    ACCOUNT_LIST[index] = account;
    //console.log(`Account with ID ${account.id} updated.`);
  } else {
    //console.log(`Account with ID ${account.id} not found.`);
  }
    // Afficher le contenu de la base de données après la mise à jour
    //console.log("Current Account List after update:");
    //console.log(ACCOUNT_LIST);
}