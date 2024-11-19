import { accountService } from "./accountService.mjs";

accountService.addAccount("DENIS", "lhdenis");

let accounts = accountService.getAccountList();
console.log("Initial List of Accounts:", accounts);

// Mettre à jour le compte avec de nouveaux noms
const accountId = accounts[0].id; // Utilisation de l'ID du premier compte ajouté
accountService.saveAccount(accountId, "denis", "lh");

accounts = accountService.getAccountList();
console.log("List of Accounts after update:", accounts);

const account = accountService.getAccount(accountId);
console.log("Retrieved Account with name property:", account);