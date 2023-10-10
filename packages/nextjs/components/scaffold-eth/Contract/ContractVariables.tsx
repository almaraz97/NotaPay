import { DisplayVariable } from "./DisplayVariable";
import { Abi, AbiFunction } from "abitype";
import { Contract, ContractName, InheritedFunctions } from "~~/utils/scaffold-eth/contract";

export const ContractVariables = ({
  refreshDisplayVariables,
  deployedContractData,
}: {
  refreshDisplayVariables: boolean;
  deployedContractData: Contract<ContractName>;
}) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    (deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[]
  ).filter(fn => {
    const isQueryableWithNoParams =
      (fn.stateMutability === "view" || fn.stateMutability === "pure") && fn.inputs.length === 0;
    return isQueryableWithNoParams;
  });

  if (!functionsToDisplay.length) {
    return <>No contract variables</>;
  }

  return (
    <>
      {functionsToDisplay
        .map(fn => (
          <DisplayVariable
            abiFunction={fn}
            contractAddress={deployedContractData.address}
            key={fn.name}
            refreshDisplayVariables={refreshDisplayVariables}
            inheritedBy={(deployedContractData.inheritedFunctions as InheritedFunctions)[fn.name]}
          />
        ))
        .sort((a, b) => (b.props.inheritedBy ? b.props.inheritedBy.localeCompare(a.props.inheritedBy) : 1))}
    </>
  );
};