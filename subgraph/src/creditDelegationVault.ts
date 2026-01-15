import {
  CreditDelegationVault,
  Borrow,
} from "../generated/templates/CreditDelegationVault/CreditDelegationVault";
import { Vault } from "../generated/schema";

export function handleBorrow(event: Borrow): void {
  let vault = Vault.load(event.params.vault.toHexString());
  if (vault !== null) {
    const vaultContract = CreditDelegationVault.bind(event.params.vault);
    vault.loanAmount = vaultContract.loanAmount();
    vault.save();
  }
}
