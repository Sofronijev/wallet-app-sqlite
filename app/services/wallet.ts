import { hooksPrisma } from "dbClient";

export const getAllWallets = () => {
  return hooksPrisma.wallet.useFindMany();
};

// export const setWalletStartingBalance = async (data) => {
// };

// export const setWalletBalance = async (id) => {
// };
