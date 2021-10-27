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

interface NFTTicketInterface extends ethers.utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "baseURI()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "initialize(string,uint128,uint48[],uint160[])": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "isInit()": FunctionFragment;
    "mintToken(uint8[],uint256[])": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "payee(uint256)": FunctionFragment;
    "release(address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "settings()": FunctionFragment;
    "shares(address)": FunctionFragment;
    "specialMint(address,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "totalShares()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "isInit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintToken",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "payee", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(functionFragment: "released", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "settings", values?: undefined): string;
  encodeFunctionData(functionFragment: "shares", values: [string]): string;
  encodeFunctionData(
    functionFragment: "specialMint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
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
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isInit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "specialMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PayeeAdded(address,uint256)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class NFTTicket extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NFTTicketInterface;

  functions: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    baseURI(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "baseURI()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getApproved(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    initialize(
      baseURI_: string,
      startTimestamp_: BigNumberish,
      ticketAmounts_: BigNumberish[],
      ticketPrices_: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(string,uint128,uint48[],uint160[])"(
      baseURI_: string,
      startTimestamp_: BigNumberish,
      ticketAmounts_: BigNumberish[],
      ticketPrices_: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isApprovedForAll(address,address)"(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isInit(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "isInit()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    mintToken(
      levels: BigNumberish[],
      ticketNum: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "mintToken(uint8[],uint256[])"(
      levels: BigNumberish[],
      ticketNum: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "name()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "ownerOf(uint256)"(
      tokenId: BigNumberish,
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

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setApprovalForAll(address,bool)"(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    settings(overrides?: CallOverrides): Promise<{
      maxSupply: number;
      totalSupply: number;
      maxPurchase: number;
      typeOfNFT: number;
      startTimestamp: BigNumber;
      0: number;
      1: number;
      2: number;
      3: number;
      4: BigNumber;
    }>;

    "settings()"(overrides?: CallOverrides): Promise<{
      maxSupply: number;
      totalSupply: number;
      maxPurchase: number;
      typeOfNFT: number;
      startTimestamp: BigNumber;
      0: number;
      1: number;
      2: number;
      3: number;
      4: BigNumber;
    }>;

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

    specialMint(
      recevier: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "specialMint(address,uint256)"(
      recevier: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    symbol(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "symbol()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    tokenURI(
      ticketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      uri: string;
      0: string;
    }>;

    "tokenURI(uint256)"(
      ticketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      uri: string;
      0: string;
    }>;

    totalReleased(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalReleased()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    totalShares(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "totalShares()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  baseURI(overrides?: CallOverrides): Promise<string>;

  "baseURI()"(overrides?: CallOverrides): Promise<string>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getApproved(uint256)"(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    baseURI_: string,
    startTimestamp_: BigNumberish,
    ticketAmounts_: BigNumberish[],
    ticketPrices_: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(string,uint128,uint48[],uint160[])"(
    baseURI_: string,
    startTimestamp_: BigNumberish,
    ticketAmounts_: BigNumberish[],
    ticketPrices_: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isApprovedForAll(address,address)"(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isInit(overrides?: CallOverrides): Promise<boolean>;

  "isInit()"(overrides?: CallOverrides): Promise<boolean>;

  mintToken(
    levels: BigNumberish[],
    ticketNum: BigNumberish[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "mintToken(uint8[],uint256[])"(
    levels: BigNumberish[],
    ticketNum: BigNumberish[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "ownerOf(uint256)"(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

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

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setApprovalForAll(address,bool)"(
    operator: string,
    approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  settings(overrides?: CallOverrides): Promise<{
    maxSupply: number;
    totalSupply: number;
    maxPurchase: number;
    typeOfNFT: number;
    startTimestamp: BigNumber;
    0: number;
    1: number;
    2: number;
    3: number;
    4: BigNumber;
  }>;

  "settings()"(overrides?: CallOverrides): Promise<{
    maxSupply: number;
    totalSupply: number;
    maxPurchase: number;
    typeOfNFT: number;
    startTimestamp: BigNumber;
    0: number;
    1: number;
    2: number;
    3: number;
    4: BigNumber;
  }>;

  shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "shares(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  specialMint(
    recevier: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "specialMint(address,uint256)"(
    recevier: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  tokenURI(ticketId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "tokenURI(uint256)"(
    ticketId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

  "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approve(address,uint256)"(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<string>;

    "baseURI()"(overrides?: CallOverrides): Promise<string>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getApproved(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      baseURI_: string,
      startTimestamp_: BigNumberish,
      ticketAmounts_: BigNumberish[],
      ticketPrices_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(string,uint128,uint48[],uint160[])"(
      baseURI_: string,
      startTimestamp_: BigNumberish,
      ticketAmounts_: BigNumberish[],
      ticketPrices_: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isApprovedForAll(address,address)"(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isInit(overrides?: CallOverrides): Promise<boolean>;

    "isInit()"(overrides?: CallOverrides): Promise<boolean>;

    mintToken(
      levels: BigNumberish[],
      ticketNum: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "mintToken(uint8[],uint256[])"(
      levels: BigNumberish[],
      ticketNum: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "ownerOf(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

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

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setApprovalForAll(address,bool)"(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    settings(overrides?: CallOverrides): Promise<{
      maxSupply: number;
      totalSupply: number;
      maxPurchase: number;
      typeOfNFT: number;
      startTimestamp: BigNumber;
      0: number;
      1: number;
      2: number;
      3: number;
      4: BigNumber;
    }>;

    "settings()"(overrides?: CallOverrides): Promise<{
      maxSupply: number;
      totalSupply: number;
      maxPurchase: number;
      typeOfNFT: number;
      startTimestamp: BigNumber;
      0: number;
      1: number;
      2: number;
      3: number;
      4: BigNumber;
    }>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    specialMint(
      recevier: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "specialMint(address,uint256)"(
      recevier: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    tokenURI(
      ticketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "tokenURI(uint256)"(
      ticketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      approved: string | null,
      tokenId: BigNumberish | null
    ): EventFilter;

    ApprovalForAll(
      owner: string | null,
      operator: string | null,
      approved: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PayeeAdded(account: null, shares: null): EventFilter;

    PaymentReceived(from: null, amount: null): EventFilter;

    PaymentReleased(to: null, amount: null): EventFilter;

    Transfer(
      from: string | null,
      to: string | null,
      tokenId: BigNumberish | null
    ): EventFilter;
  };

  estimateGas: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseURI(overrides?: CallOverrides): Promise<BigNumber>;

    "baseURI()"(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getApproved(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      baseURI_: string,
      startTimestamp_: BigNumberish,
      ticketAmounts_: BigNumberish[],
      ticketPrices_: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(string,uint128,uint48[],uint160[])"(
      baseURI_: string,
      startTimestamp_: BigNumberish,
      ticketAmounts_: BigNumberish[],
      ticketPrices_: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isApprovedForAll(address,address)"(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInit(overrides?: CallOverrides): Promise<BigNumber>;

    "isInit()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintToken(
      levels: BigNumberish[],
      ticketNum: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "mintToken(uint8[],uint256[])"(
      levels: BigNumberish[],
      ticketNum: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ownerOf(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setApprovalForAll(address,bool)"(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    settings(overrides?: CallOverrides): Promise<BigNumber>;

    "settings()"(overrides?: CallOverrides): Promise<BigNumber>;

    shares(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    specialMint(
      recevier: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "specialMint(address,uint256)"(
      recevier: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      ticketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenURI(uint256)"(
      ticketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalReleased(overrides?: CallOverrides): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalShares()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baseURI()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getApproved(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      baseURI_: string,
      startTimestamp_: BigNumberish,
      ticketAmounts_: BigNumberish[],
      ticketPrices_: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(string,uint128,uint48[],uint160[])"(
      baseURI_: string,
      startTimestamp_: BigNumberish,
      ticketAmounts_: BigNumberish[],
      ticketPrices_: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isApprovedForAll(address,address)"(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isInit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintToken(
      levels: BigNumberish[],
      ticketNum: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "mintToken(uint8[],uint256[])"(
      levels: BigNumberish[],
      ticketNum: BigNumberish[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ownerOf(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setApprovalForAll(address,bool)"(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    settings(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "settings()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shares(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "shares(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    specialMint(
      recevier: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "specialMint(address,uint256)"(
      recevier: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      ticketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenURI(uint256)"(
      ticketId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalReleased(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalShares()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
