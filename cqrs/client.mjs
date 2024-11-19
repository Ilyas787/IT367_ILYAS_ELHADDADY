// client.mjs
import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

// Ajouter un nouveau compte
accountCommand.addAccount("El Haddady", "Ilyas");

let accounts = accountQuery.getAccountList();
console.log("Liste initiale des comptes :", accounts);

// Vérifier que le compte a bien été ajouté dans accountCache
console.log("Liste des résumés des comptes (sans la date de création) :", accountSummaryList);

// Récupérer l'ID du premier compte
const accountId = accounts[0].id;

// Sauvegarder un compte existant avec un changement
accountCommand.saveAccount(accountId, "El Haddady", "Ilyas");

// Vérifier les comptes après la mise à jour
accounts = accountQuery.getAccountList();
console.log("Liste des comptes après mise à jour :", accounts);

// Vérifier les résumés des comptes après mise à jour
console.log("Liste des résumés des comptes après mise à jour :", accountSummaryList);

// Récupérer le compte à partir de accountCache (ou base de données si nécessaire)
const account = accountQuery.getAccount(accountId);
console.log("Compte récupéré avec la propriété 'name' :", account);
