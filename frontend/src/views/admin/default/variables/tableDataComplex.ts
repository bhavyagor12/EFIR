type RowObj = {
	firNo: string;
	branch: string;
	contractAddress: string;
	status: string;
};

const tableDataComplex: RowObj[] = [
	{
		firNo: '1',
		branch: "Mumbai",
		status: 'Approved',
		contractAddress: '0x933bCbFE3264021529324a1C93cC893680D850C1'
	},
	{
		firNo: '2',
		branch: "Pune",
		status: 'In progress',
		contractAddress: '0xb727058fa0B78057dE4268d43938d44987C120d3'
	},
	{
		firNo: '3',
		branch: "Pune",
		status: 'In progress',
		contractAddress: '0x8254058368922Be3A4C6DbE3c562832395b20593'
	},
	{
		firNo: '4',
		branch: "Mumbai",
		status: 'Approved',
		contractAddress: '0x8254058368922Be3C4C6DbE3c562832395b20593'
	}
];
export default tableDataComplex;
