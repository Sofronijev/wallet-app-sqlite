import { extendedClient } from "dbClient";

export const getAllWallets = () => {
  return extendedClient.wallet.useFindMany();
};

// export const setWalletStartingBalance = async (data) => {
// };

// export const setWalletBalance = async (id) => {
// };
