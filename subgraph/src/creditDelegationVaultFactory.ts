import { VaultCreated as VaultCreatedEvent } from "../generated/CreditDelegationVaultFactory/CreditDelegationVaultFactory";
import { Vault, Owner, Manager, DebtToken } from "../generated/schema";
import { CreditDelegationVault as CreditDelegationVaultContract } from "../generated/templates/CreditDelegationVault/CreditDelegationVault";
import { CreditDelegationVault, ArenasDebtToken } from "../generated/templates";

export function handleVaultCreated(event: VaultCreatedEvent): void {
  let vault = new Vault(event.params.vault.toHexString());

  vault.vault = event.params.vault;
  vault.owner = event.params.owner.toHexString();
  vault.createdAt = event.block.timestamp;

  // Bind to the new contract instance
  let vaultContract = CreditDelegationVaultContract.bind(event.params.vault);

  // Fetch contract data
  vault.atomicaPool = vaultContract.ATOMICA_POOL();
  
  // NEW: Fetch the adapter address
  // Ensure your ABI is updated so 'adapter()' exists on the generated class
  vault.adapter = vaultContract.adapter(); 

  vault.asset = vaultContract.getUnderlyingAsset();

  const debtTokenAddress = vaultContract.DEBT_TOKEN();
  const managerAddress = vaultContract.manager();
  
  vault.manager = managerAddress.toHexString();
  vault.debtToken = debtTokenAddress;
  
  vault.save();

  // Create or load Owner
  let owner = Owner.load(event.params.owner.toHexString());
  if (!owner) {
    owner = new Owner(event.params.owner.toHexString());
    owner.save();
  }

  // Create or load Manager
  let manager = Manager.load(managerAddress.toHexString());
  if (!manager) {
    manager = new Manager(managerAddress.toHexString());
    manager.save();
  }

  // Create vault proxy template
  CreditDelegationVault.create(event.params.vault);

  // Create debt token template if it doesn't exist
  let debtToken = DebtToken.load(debtTokenAddress.toHexString());
  if (!debtToken) {
    debtToken = new DebtToken(debtTokenAddress.toHexString());
    debtToken.save();
    ArenasDebtToken.create(debtTokenAddress);
  }
}
