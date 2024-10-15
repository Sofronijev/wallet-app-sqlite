import { hooksPrisma } from "dbClient";

export const getUser = () => hooksPrisma.users.useFindFirst();

export const getUserId = () => {
  const query = hooksPrisma.users.useFindFirst({ select: { id: true } });
  return query?.id;
};

// export const getSelectedWallet = () => {
//     const userId =  getUserId()
//   if (!userId) return null;
//   const query = hooksPrisma.users.useFindFirst({
//     where: {
//       id: userId,
//     },
//     select: {
//       selectedWallet: true,
//     },
//   });
//   return query?.selectedWallet;
// };

export const getSelectedWallet = async () => {
  const userId = getUserId();
  if (!userId) return null;

  const query = await hooksPrisma.users.findFirst({
    where: {
      id: userId,
    },
    select: {
      selectedWallet: true,
    },
  });

  return query ? query.selectedWallet : null;
};

export const setCurrentWalletId = (userId: number, selectedWalletId: number) =>
  hooksPrisma.users.update({
    where: {
      id: userId,
    },
    data: {
      selectedWalletId: selectedWalletId,
    },
  });
