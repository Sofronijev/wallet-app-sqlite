export const getMonthlyTransactionData = async (
  userId: number,
  walletIds: number[],
  date: string,
  take = 10, // Default transaction limit
  skip = 0
): Promise<{ transactions: any[]; count: number }> => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;

  // Get paginated transactions
  const transactions = await prisma.transactions.findMany({
    where: {
      userId: userId,
      walletId: { in: walletIds },
      date: {
        gte: new Date(`${year}-${month}-01`),
        lt: new Date(`${year}-${month + 1}-01`), // This filters to the next month's first day
      },
    },
    skip: skip,
    take: take,
    orderBy: [
      { date: "desc" },
      { id: "desc" }, // Secondary ordering by ID in case of tie
    ],
  });

  // Get total count of matching transactions
  const count = await prisma.transactions.count({
    where: {
      userId: userId,
      walletId: { in: walletIds },
      date: {
        gte: new Date(`${year}-${month}-01`),
        lt: new Date(`${year}-${month + 1}-01`),
      },
    },
  });

  return { transactions, count };
};
