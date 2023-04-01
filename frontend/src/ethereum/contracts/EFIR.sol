//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EFIR {
    address public immutable owner;

    struct Document {
        string documentHash;
        string policeStationName;
        string complainantName;
        string filerName;
    }

    mapping(uint256 => Document) private documents;
    uint256 private documentCounter = 0;

    constructor(address _owner) {
        owner = _owner;
    }

    function storeDocument(
        string memory _documentHash,
        string memory _policeStationName,
        string memory _complainantName,
        string memory _filerName
    ) public {
        require(msg.sender == owner, "not the owner cant call");
        documents[documentCounter] = Document(
            _documentHash,
            _policeStationName,
            _complainantName,
            _filerName
        );
        documentCounter++;
    }

    function retrieveDocument(
        uint256 _documentId
    )
        public
        view
        returns (string memory, string memory, string memory, string memory)
    {
        return (
            documents[_documentId].documentHash,
            documents[_documentId].policeStationName,
            documents[_documentId].complainantName,
            documents[_documentId].filerName
        );
    }

    function getContractAddress() public view returns (address) {
        return address(this);
    }
}
