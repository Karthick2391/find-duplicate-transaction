export interface Transaction {
  // TODO
  id: number;
  source: string;
  target: string;
  amount: number;
  description: string;
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 * 
 * This is how a transaction looks like.
 * 
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 * 
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *  
 * 
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
export function findDuplicateTransactions(transactions: Transaction[]): Transaction[] {
	 
  // This has been done just to make the test pass for now. 
	if (transactions.length === 0) {
		return [];
	}
  
	let result = []; 
	for (let item of transactions) {
		for (let checkingItem of transactions) {
		  if (
			transactions.indexOf(item) !== transactions.indexOf(checkingItem) &&
			item.source === checkingItem.source &&
			item.target === checkingItem.target &&
			item.amount === checkingItem.amount &&
			item.description === checkingItem.description
		  ) {
			if (result.indexOf(checkingItem) === -1) {
			  result.push(checkingItem);
			}
		  }
		}
	} 
	result.sort((a, b) => Number(a.id) - Number(b.id));
	 
	return result;  
}