import { hooksPrisma } from "dbClient";

const useWallets = () => {
  const getAllWallets = () => hooksPrisma.wallet.useFindMany();

  const getActiveWallet = () =>
    hooksPrisma.users.useFindFirst({
      select: { selectedWallet: true },
    })?.selectedWallet;

  return { getAllWallets, getActiveWallet };
};

export default useWallets;
