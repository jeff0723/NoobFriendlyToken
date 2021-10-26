/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NoobFriendlyTokenAdmin } from "../NoobFriendlyTokenAdmin";

export class NoobFriendlyTokenAdmin__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    payees: string[],
    shares: BigNumberish[],
    overrides?: Overrides
  ): Promise<NoobFriendlyTokenAdmin> {
    return super.deploy(payees, shares, overrides || {}) as Promise<
      NoobFriendlyTokenAdmin
    >;
  }
  getDeployTransaction(
    payees: string[],
    shares: BigNumberish[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(payees, shares, overrides || {});
  }
  attach(address: string): NoobFriendlyTokenAdmin {
    return super.attach(address) as NoobFriendlyTokenAdmin;
  }
  connect(signer: Signer): NoobFriendlyTokenAdmin__factory {
    return super.connect(signer) as NoobFriendlyTokenAdmin__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NoobFriendlyTokenAdmin {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NoobFriendlyTokenAdmin;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "payees",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]",
          },
          {
            internalType: "uint32",
            name: "typeOfNFT",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxSupply",
            type: "uint32",
          },
        ],
        internalType: "struct BaseSettings",
        name: "baseSettings",
        type: "tuple",
      },
    ],
    name: "genNFTContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractList",
    outputs: [
      {
        internalType: "contract TemplateInterface[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "generatorType",
        type: "uint32",
      },
    ],
    name: "slottingFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReleased",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "typeToGenerator",
    outputs: [
      {
        internalType: "contract GeneratorInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "typeOfNFT",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "generatorAddr",
        type: "address",
      },
    ],
    name: "updateGenerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userContracts",
    outputs: [
      {
        internalType: "contract TemplateInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015d0380380620015d0833981016040819052620000349162000449565b8181620000413362000195565b8051825114620000b35760405162461bcd60e51b815260206004820152603260248201527f5061796d656e7453706c69747465723a2070617965657320616e6420736861726044820152710cae640d8cadccee8d040dad2e6dac2e8c6d60731b60648201526084015b60405180910390fd5b6000825111620001065760405162461bcd60e51b815260206004820152601a60248201527f5061796d656e7453706c69747465723a206e6f207061796565730000000000006044820152606401620000aa565b60005b82518110156200018a57620001758382815181106200013857634e487b7160e01b600052603260045260246000fd5b60200260200101518383815181106200016157634e487b7160e01b600052603260045260246000fd5b6020026020010151620001e560201b60201c565b8062000181816200059a565b91505062000109565b5050505050620005e4565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038216620002525760405162461bcd60e51b815260206004820152602c60248201527f5061796d656e7453706c69747465723a206163636f756e74206973207468652060448201526b7a65726f206164647265737360a01b6064820152608401620000aa565b60008111620002a45760405162461bcd60e51b815260206004820152601d60248201527f5061796d656e7453706c69747465723a207368617265732061726520300000006044820152606401620000aa565b6001600160a01b03821660009081526003602052604090205415620003205760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e7420616c726561647960448201526a206861732073686172657360a81b6064820152608401620000aa565b6005805460018082019092557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b0319166001600160a01b038516908117909155600090815260036020526040902082905554620003899082906200057f565b600155604080516001600160a01b0384168152602081018390527f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac910160405180910390a15050565b600082601f830112620003e3578081fd5b81516020620003fc620003f68362000559565b62000526565b80838252828201915082860187848660051b89010111156200041c578586fd5b855b858110156200043c578151845292840192908401906001016200041e565b5090979650505050505050565b600080604083850312156200045c578182fd5b82516001600160401b038082111562000473578384fd5b818501915085601f83011262000487578384fd5b815160206200049a620003f68362000559565b8083825282820191508286018a848660051b8901011115620004ba578889fd5b8896505b84871015620004f35780516001600160a01b0381168114620004de57898afd5b835260019690960195918301918301620004be565b50918801519196509093505050808211156200050d578283fd5b506200051c85828601620003d2565b9150509250929050565b604051601f8201601f191681016001600160401b0381118282101715620005515762000551620005ce565b604052919050565b60006001600160401b03821115620005755762000575620005ce565b5060051b60200190565b60008219821115620005955762000595620005b8565b500190565b6000600019821415620005b157620005b1620005b8565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b610fdc80620005f46000396000f3fe6080604052600436106100bc5760003560e01c8063097e02be14610101578063191655871461015457806331bc047c146101765780633a98ef3914610196578063715018a6146101b55780638b83209b146101ca5780638da5cb5b146101ea5780639852595c146101ff57806399acac8c14610235578063b789003d14610257578063ce7c2ac214610277578063e33b7de3146102ad578063e5c464e5146102c2578063f2fde38b146102e2578063fc004c241461030257600080fd5b366100fc577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be77033346040516100f2929190610c97565b60405180910390a1005b600080fd5b34801561010d57600080fd5b5061013761011c366004610bea565b6007602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561016057600080fd5b5061017461016f366004610b1f565b610315565b005b34801561018257600080fd5b50610174610191366004610c04565b6104e2565b3480156101a257600080fd5b506001545b60405190815260200161014b565b3480156101c157600080fd5b50610174610547565b3480156101d657600080fd5b506101376101e5366004610bba565b610582565b3480156101f657600080fd5b506101376105c0565b34801561020b57600080fd5b506101a761021a366004610b1f565b6001600160a01b031660009081526004602052604090205490565b34801561024157600080fd5b5061024a6105cf565b60405161014b9190610dc3565b34801561026357600080fd5b50610137610272366004610b57565b61063a565b34801561028357600080fd5b506101a7610292366004610b1f565b6001600160a01b031660009081526003602052604090205490565b3480156102b957600080fd5b506002546101a7565b3480156102ce57600080fd5b506101a76102dd366004610bea565b610672565b3480156102ee57600080fd5b506101746102fd366004610b1f565b610726565b610174610310366004610b82565b6107c6565b6001600160a01b03811660009081526003602052604090205461038e5760405162461bcd60e51b815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201526573686172657360d01b60648201526084015b60405180910390fd5b60006002544761039e9190610f0d565b6001600160a01b03831660009081526004602090815260408083205460015460039093529083205493945091926103d59085610f45565b6103df9190610f25565b6103e99190610f64565b90508061044c5760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201526a191d59481c185e5b595b9d60aa1b6064820152608401610385565b6001600160a01b038316600090815260046020526040902054610470908290610f0d565b6001600160a01b038416600090815260046020526040902055600254610497908290610f0d565b6002556104a4838261099b565b7fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b05683826040516104d5929190610c97565b60405180910390a1505050565b336104eb6105c0565b6001600160a01b0316146105115760405162461bcd60e51b815260040161038590610e44565b63ffffffff91909116600090815260076020526040902080546001600160a01b0319166001600160a01b03909216919091179055565b336105506105c0565b6001600160a01b0316146105765760405162461bcd60e51b815260040161038590610e44565b6105806000610ab6565b565b6000600582815481106105a557634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031692915050565b6000546001600160a01b031690565b3360009081526006602090815260409182902080548351818402810184019094528084526060939283018282801561063057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610612575b5050505050905090565b6006602052816000526040600020818154811061065657600080fd5b6000918252602090912001546001600160a01b03169150829050565b63ffffffff81166000908152600760205260408120546001600160a01b0316806106ae5760405162461bcd60e51b815260040161038590610e10565b806001600160a01b031663ea88a3b86040518163ffffffff1660e01b815260040160206040518083038186803b1580156106e757600080fd5b505afa1580156106fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071f9190610bd2565b9392505050565b3361072f6105c0565b6001600160a01b0316146107555760405162461bcd60e51b815260040161038590610e44565b6001600160a01b0381166107ba5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610385565b6107c381610ab6565b50565b60006007816107db60a0850160808601610bea565b63ffffffff1681526020810191909152604001600020546001600160a01b031690508061081a5760405162461bcd60e51b815260040161038590610e10565b806001600160a01b031663ea88a3b86040518163ffffffff1660e01b815260040160206040518083038186803b15801561085357600080fd5b505afa158015610867573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088b9190610bd2565b3410156108d65760405162461bcd60e51b815260206004820152601960248201527820b236b4b71d1039b637ba3a34b733903332b29032b93937b960391b6044820152606401610385565b60405163e962371360e01b81526000906001600160a01b0383169063e9623713906109079033908790600401610cb0565b602060405180830381600087803b15801561092157600080fd5b505af1158015610935573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109599190610b3b565b3360009081526006602090815260408220805460018101825590835291200180546001600160a01b0319166001600160a01b0392909216919091179055505050565b804710156109eb5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610385565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610a38576040519150601f19603f3d011682016040523d82523d6000602084013e610a3d565b606091505b5050905080610ab15760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c20726044820152791958da5c1a595b9d081b585e481a185d99481c995d995c9d195960321b6064820152608401610385565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803563ffffffff81168114610b1a57600080fd5b919050565b600060208284031215610b30578081fd5b813561071f81610f91565b600060208284031215610b4c578081fd5b815161071f81610f91565b60008060408385031215610b69578081fd5b8235610b7481610f91565b946020939093013593505050565b600060208284031215610b93578081fd5b813567ffffffffffffffff811115610ba9578182fd5b820160c0818503121561071f578182fd5b600060208284031215610bcb578081fd5b5035919050565b600060208284031215610be3578081fd5b5051919050565b600060208284031215610bfb578081fd5b61071f82610b06565b60008060408385031215610c16578182fd5b610c1f83610b06565b91506020830135610c2f81610f91565b809150509250929050565b81835260006001600160fb1b03831115610c52578081fd5b8260051b80836020870137939093016020019283525090919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b03929092168252602082015260400190565b600060018060a01b0380851683526020604081850152610cd08586610ec8565b60c06040870152610ce661010087018284610c6e565b915050610cf582870187610ec8565b603f1980888503016060890152610d0d848385610c6e565b9350610d1c60408a018a610e79565b898603830160808b0152808652909490935087925085015b83831015610d5d578435610d4781610f91565b8716815293850193600192909201918501610d34565b610d6a60608b018b610e79565b97509550818982030160a08a0152610d83818888610c3a565b9650505050505050610d9760808501610b06565b63ffffffff1660c0840152610dae60a08501610b06565b63ffffffff811660e085015250949350505050565b6020808252825182820181905260009190848201906040850190845b81811015610e045783516001600160a01b031683529284019291840191600101610ddf565b50909695505050505050565b6020808252601a908201527941646d696e3a20696e76616c6964207469636b6574207479706560301b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000808335601e19843603018112610e8f578283fd5b830160208101925035905067ffffffffffffffff811115610eaf57600080fd5b8060051b3603831315610ec157600080fd5b9250929050565b6000808335601e19843603018112610ede578283fd5b830160208101925035905067ffffffffffffffff811115610efe57600080fd5b803603831315610ec157600080fd5b60008219821115610f2057610f20610f7b565b500190565b600082610f4057634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610f5f57610f5f610f7b565b500290565b600082821015610f7657610f76610f7b565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146107c357600080fdfea2646970667358221220d78c85afb914e925b25577a5fb90d8a2e4fe14e50d90c96c91fd2f754e638a4864736f6c63430008040033";
