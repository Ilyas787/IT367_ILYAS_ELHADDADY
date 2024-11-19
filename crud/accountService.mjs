export const accountService = {
    addAccount(lastName, firstName) {
        const newAccount = new Account(null, lastName, firstName, null);
        accountDAO.insertAccount(newAccount);
      },
    getAccountList() {},
    saveAccount(id, lastName, firstName) {},
    getAccount(id) {},
  };
