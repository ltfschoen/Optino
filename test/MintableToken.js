var tokenOutput={
  "contracts":
  {
    "MintableToken_flattened.sol:ApproveAndCallFallBack":
    {
      "abi": "[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"receiveApproval\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": ""
    },
    "MintableToken_flattened.sol:ERC20Interface":
    {
      "abi": "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"remaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": ""
    },
    "MintableToken_flattened.sol:MintableToken":
    {
      "abi": "[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"decimals\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSupply\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"remaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"approveAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferAnyERC20Token\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnershipImmediately\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": "60806040523480156200001157600080fd5b506040516200101438038062001014833981810160405260a08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040908152602082015190820151606090920151909350909150620001c7336001600160e01b036200026216565b8451620001dc90600290602088019062000284565b508351620001f290600390602087019062000284565b506004805460ff191660ff85161790556001600160a01b03821660008181526006602090815260408083208590556005859055805185815290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a3505050505062000329565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002c757805160ff1916838001178555620002f7565b82800160010185558215620002f7579182015b82811115620002f7578251825591602001919060010190620002da565b506200030592915062000309565b5090565b6200032691905b8082111562000305576000815560010162000310565b90565b610cdb80620003396000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063cae9ca5111610071578063cae9ca511461034c578063d4ee1d90146103d1578063dc39d06d146103d9578063dd62ed3e14610405578063f2fde38b1461043357610116565b80638da5cb5b146102c857806395d89b41146102ec5780639dc29fac146102f4578063a9059cbb1461032057610116565b8063313ce567116100e9578063313ce5671461022857806340c10f191461024657806370a082311461027257806379ba5097146102985780637e71fb09146102a257610116565b806306fdde031461011b578063095ea7b31461019857806318160ddd146101d857806323b872dd146101f2575b600080fd5b610123610459565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015d578181015183820152602001610145565b50505050905090810190601f16801561018a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c4600480360360408110156101ae57600080fd5b506001600160a01b0381351690602001356104ef565b604080519115158252519081900360200190f35b6101e0610556565b60408051918252519081900360200190f35b6101c46004803603606081101561020857600080fd5b506001600160a01b03813581169160208101359091169060400135610599565b610230610692565b6040805160ff9092168252519081900360200190f35b6101c46004803603604081101561025c57600080fd5b506001600160a01b03813516906020013561069b565b6101e06004803603602081101561028857600080fd5b50356001600160a01b0316610743565b6102a061075e565b005b6102a0600480360360208110156102b857600080fd5b50356001600160a01b03166107d9565b6102d061084b565b604080516001600160a01b039092168252519081900360200190f35b61012361085a565b6101c46004803603604081101561030a57600080fd5b506001600160a01b0381351690602001356108b8565b6101c46004803603604081101561033657600080fd5b506001600160a01b03813516906020013561099c565b6101c46004803603606081101561036257600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561039257600080fd5b8201836020820111156103a457600080fd5b803590602001918460018302840111640100000000831117156103c657600080fd5b509092509050610a3a565b6102d0610b4b565b6101c4600480360360408110156103ef57600080fd5b506001600160a01b038135169060200135610b5a565b6101e06004803603604081101561041b57600080fd5b506001600160a01b0381358116916020013516610bfc565b6102a06004803603602081101561044957600080fd5b50356001600160a01b0316610c27565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104e55780601f106104ba576101008083540402835291602001916104e5565b820191906000526020600020905b8154815290600101906020018083116104c857829003601f168201915b5050505050905090565b3360008181526007602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b600080805260066020527f54cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f8546005546105949163ffffffff610c6016565b905090565b6001600160a01b0383166000908152600660205260408120546105c2908363ffffffff610c6016565b6001600160a01b03851660009081526006602090815260408083209390935560078152828220338352905220546105ff908363ffffffff610c6016565b6001600160a01b038086166000908152600760209081526040808320338452825280832094909455918616815260069091522054610643908363ffffffff610c7516565b6001600160a01b038085166000818152600660209081526040918290209490945580518681529051919392881692600080516020610c8683398151915292918290030190a35060019392505050565b60045460ff1690565b600080546001600160a01b031633146106b357600080fd5b6001600160a01b0383166000908152600660205260409020546106dc908363ffffffff610c7516565b6001600160a01b038416600090815260066020526040902055600554610708908363ffffffff610c7516565b6005556040805183815290516001600160a01b03851691600091600080516020610c868339815191529181900360200190a350600192915050565b6001600160a01b031660009081526006602052604090205490565b6001546001600160a01b0316331461077557600080fd5b600154600080546040516001600160a01b0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000546001600160a01b031633146107f057600080fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b60028054604080516020601f60001961010060018716150201909416859004938401819004810282018101909252828152606093909290918301828280156104e55780601f106104ba576101008083540402835291602001916104e5565b600080546001600160a01b031633146108d057600080fd5b6001600160a01b03831660009081526006602052604090205482101561090c576001600160a01b03831660009081526006602052604090205491505b6001600160a01b038316600090815260066020526040902054610935908363ffffffff610c6016565b6001600160a01b038416600090815260066020526040902055600554610961908363ffffffff610c6016565b6005556040805183815290516000916001600160a01b03861691600080516020610c868339815191529181900360200190a350600192915050565b336000908152600660205260408120546109bc908363ffffffff610c6016565b33600090815260066020526040808220929092556001600160a01b038516815220546109ee908363ffffffff610c7516565b6001600160a01b038416600081815260066020908152604091829020939093558051858152905191923392600080516020610c868339815191529281900390910190a350600192915050565b3360008181526007602090815260408083206001600160a01b038916808552908352818420889055815188815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a3604051638f4ffcb160e01b81523360048201818152602483018790523060448401819052608060648501908152608485018790526001600160a01b038a1694638f4ffcb194938a93928a928a92919060a401848480828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610b2857600080fd5b505af1158015610b3c573d6000803e3d6000fd5b50600198975050505050505050565b6001546001600160a01b031681565b600080546001600160a01b03163314610b7257600080fd5b600080546040805163a9059cbb60e01b81526001600160a01b0392831660048201526024810186905290519186169263a9059cbb926044808401936020939083900390910190829087803b158015610bc957600080fd5b505af1158015610bdd573d6000803e3d6000fd5b505050506040513d6020811015610bf357600080fd5b50519392505050565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205490565b6000546001600160a01b03163314610c3e57600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600082821115610c6f57600080fd5b50900390565b8181018281101561055057600080fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220809d887bb99273c465e11d463cc38d816f8f54524b77fb6846336e593ef1675a64736f6c63430006000033"
    },
    "MintableToken_flattened.sol:MintableTokenInterface":
    {
      "abi": "[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"approveAndCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]",
      "bin": ""
    },
    "MintableToken_flattened.sol:Owned":
    {
      "abi": "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnershipImmediately\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": "608060405234801561001057600080fd5b50610258806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806379ba50971461005c5780637e71fb09146100665780638da5cb5b1461008c578063d4ee1d90146100b0578063f2fde38b146100b8575b600080fd5b6100646100de565b005b6100646004803603602081101561007c57600080fd5b50356001600160a01b0316610159565b6100946101cb565b604080516001600160a01b039092168252519081900360200190f35b6100946101da565b610064600480360360208110156100ce57600080fd5b50356001600160a01b03166101e9565b6001546001600160a01b031633146100f557600080fd5b600154600080546040516001600160a01b0393841693909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a360018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000546001600160a01b0316331461017057600080fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b6001546001600160a01b031681565b6000546001600160a01b0316331461020057600080fd5b600180546001600160a01b0319166001600160a01b039290921691909117905556fea26469706673582212209b840cd034c3212f94904fee86ba60e143732663bea35910ad450d0f43c0515d64736f6c63430006000033"
    },
    "MintableToken_flattened.sol:SafeMath":
    {
      "abi": "[]",
      "bin": "60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e8e2f71cd1eefb5f0308243e2b46f2da192f8f83b6ac11853f27f982b61e994964736f6c63430006000033"
    }
  },
  "version": "0.6.0+commit.26b70077.Darwin.appleclang"
};
