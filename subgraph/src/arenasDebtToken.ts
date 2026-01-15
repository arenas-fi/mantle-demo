import { BorrowAllowanceDelegated } from "../generated/templates/ArenasDebtToken/ArenasDebtToken";
import { Vault } from "../generated/schema";

export function handleBorrowAllowance(event: BorrowAllowanceDelegated): void {
  let vault = Vault.load(event.params.toUser.toHexString());
  if (vault !== null) {
    vault.allowance = event.params.amount;
    vault.save();
  }
}
