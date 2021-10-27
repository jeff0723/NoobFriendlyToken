/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface NoobFriendlyTokenAdminInterface extends ethers.utils.Interface {
  functions: {
    "genNFTContract(tuple)": FunctionFragment;
    "getContractList()": FunctionFragment;
    "owner()": FunctionFragment;
    "payee(uint256)": FunctionFragment;
    "release(address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "shares(address)": FunctionFragment;
    "slottingFee(uint32)": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "totalShares()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "typeToGenerator(uint32)": FunctionFragment;
    "updateGenerator(uint32,address)": FunctionFragment;
    "userContracts(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "genNFTContract",
    values: [
      {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractList",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(functionFragment: "released", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "shares", values: [string]): string;
  encodeFunctionData(
    functionFragment: "slottingFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "typeToGenerator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGenerator",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "userContracts",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "genNFTContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "slottingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "typeToGenerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGenerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userContracts",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PayeeAdded(address,uint256)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
}

export class NoobFriendlyTokenAdmin extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NoobFriendlyTokenAdminInterface;

  functions: {
    genNFTContract(
      baseSettings: {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "genNFTContract((string,string,address[],uint256[],uint32,uint32))"(
      baseSettings: {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getContractList(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    "getContractList()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    payee(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "payee(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    release(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "release(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    released(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "released(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    shares(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    slottingFee(
      generatorType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "slottingFee(uint32)"(
      generatorType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    totalReleased(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalReleased()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    totalShares(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "totalShares()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    typeToGenerator(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "typeToGenerator(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    updateGenerator(
      typeOfNFT: BigNumberish,
      generatorAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateGenerator(uint32,address)"(
      typeOfNFT: BigNumberish,
      generatorAddr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    userContracts(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "userContracts(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  genNFTContract(
    baseSettings: {
      name: string;
      symbol: string;
      payees: string[];
      shares: BigNumberish[];
      typeOfNFT: BigNumberish;
      maxSupply: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "genNFTContract((string,string,address[],uint256[],uint32,uint32))"(
    baseSettings: {
      name: string;
      symbol: string;
      payees: string[];
      shares: BigNumberish[];
      typeOfNFT: BigNumberish;
      maxSupply: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getContractList(overrides?: CallOverrides): Promise<string[]>;

  "getContractList()"(overrides?: CallOverrides): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "payee(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  release(account: string, overrides?: Overrides): Promise<ContractTransaction>;

  "release(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "released(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "shares(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  slottingFee(
    generatorType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "slottingFee(uint32)"(
    generatorType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

  "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  typeToGenerator(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "typeToGenerator(uint32)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  updateGenerator(
    typeOfNFT: BigNumberish,
    generatorAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateGenerator(uint32,address)"(
    typeOfNFT: BigNumberish,
    generatorAddr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  userContracts(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "userContracts(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    genNFTContract(
      baseSettings: {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "genNFTContract((string,string,address[],uint256[],uint32,uint32))"(
      baseSettings: {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    getContractList(overrides?: CallOverrides): Promise<string[]>;

    "getContractList()"(overrides?: CallOverrides): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "payee(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    release(account: string, overrides?: CallOverrides): Promise<void>;

    "release(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    slottingFee(
      generatorType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "slottingFee(uint32)"(
      generatorType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    typeToGenerator(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "typeToGenerator(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    updateGenerator(
      typeOfNFT: BigNumberish,
      generatorAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateGenerator(uint32,address)"(
      typeOfNFT: BigNumberish,
      generatorAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userContracts(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "userContracts(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PayeeAdded(account: null, shares: null): EventFilter;

    PaymentReceived(from: null, amount: null): EventFilter;

    PaymentReleased(to: null, amount: null): EventFilter;
  };

  estimateGas: {
    genNFTContract(
      baseSettings: {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "genNFTContract((string,string,address[],uint256[],uint32,uint32))"(
      baseSettings: {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    getContractList(overrides?: CallOverrides): Promise<BigNumber>;

    "getContractList()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    payee(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "payee(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    release(account: string, overrides?: Overrides): Promise<BigNumber>;

    "release(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    released(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    slottingFee(
      generatorType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "slottingFee(uint32)"(
      generatorType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    typeToGenerator(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "typeToGenerator(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateGenerator(
      typeOfNFT: BigNumberish,
      generatorAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateGenerator(uint32,address)"(
      typeOfNFT: BigNumberish,
      generatorAddr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    userContracts(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "userContracts(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    genNFTContract(
      baseSettings: {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "genNFTContract((string,string,address[],uint256[],uint32,uint32))"(
      baseSettings: {
        name: string;
        symbol: string;
        payees: string[];
        shares: BigNumberish[];
        typeOfNFT: BigNumberish;
        maxSupply: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getContractList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getContractList()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payee(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "payee(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    release(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "release(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    released(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "released(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    shares(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    slottingFee(
      generatorType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "slottingFee(uint32)"(
      generatorType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalShares()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    typeToGenerator(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "typeToGenerator(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateGenerator(
      typeOfNFT: BigNumberish,
      generatorAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateGenerator(uint32,address)"(
      typeOfNFT: BigNumberish,
      generatorAddr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    userContracts(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userContracts(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
