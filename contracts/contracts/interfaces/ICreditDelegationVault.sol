// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// Grouping parameters to fix "Stack too deep"
struct CDVParams {
    address manager;
    address atomicaPool;
    address adapter;
    address debtToken;
    uint256 model;
    uint256 value;
    uint256 deadline;
    uint8 v;
    bytes32 r;
    bytes32 s;
    uint256 percentage;
}

interface ICreditDelegationVault {
    function initialize(
        address owner,
        CDVParams calldata params
    ) external;

    function borrow(uint256 amount) external;

    function borrowAllowance() external view returns (uint256);

    function changeManager(address _newManager) external;

    function getUnderlyingAsset() external view returns (address);

    function setModel(uint256 _model) external;

    function updateAllowance(
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;
}
