import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./excel.css";

// custom Fucntion

function createData(data = [], hideColumns = []) {
	let headings = [];
	if (Array.isArray(data) && data.length > 0) {
		const newData = data.map((item, index) => {
			if (item === undefined) {
				item = {};
			}
			if (index === 0) {
				headings = Object.keys(item);
				headings = headings.filter((heading) => {
					if (!hideColumns.includes(heading)) {
						return { id: heading, label: heading };
					}
				});
			}
			return {
				...item,
			};
		});

		return {
			rows: newData,
			columns: headings,
		};
	}
	return {
		rows: [],
		columns: [],
	};
}

const ExcelReader = () => {
	const [items, setItems] = useState([]);

	const readExcel = (file) => {
		const promise = new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(file);

			fileReader.onload = (e) => {
				const bufferArray = e.target.result;

				const wb = XLSX.read(bufferArray, { type: "buffer" });

				const wsname = wb.SheetNames[0];

				const ws = wb.Sheets[wsname];

				const data = XLSX.utils.sheet_to_json(ws);

				resolve(data);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});

		promise.then((d) => {
			setItems(d);
		});
	};
	console.log(items);
	//  var r = items ;
	// Object.keys(r).forEach(function(key){
	//     var value = r[key];
	//     console.log(key);
	// });
	const { rows, columns } = createData(items);
	console.log(createData(items));
	return (
		<div>
			<input
				type="file"
				onChange={(e) => {
					const file = e.target.files[0];
					readExcel(file);
				}}
			/>

			<table className="table container">
				<thead>
					<tr>
						{columns.map((column, index) => (
							<th
								key={index}
								//   align={column.align}
								//   style={{ minWidth: column.minWidth }}
							>
								{column}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((item) => (
						<tr>
							{columns.map((col) => {
								if (col === "Reference No. /Image") {
									return (
										<a href={item[col]} target="_blank">
											{" "}
											Click Here
										</a>
									);
								} else {
									return <td>{item[col]}</td>;
								}
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ExcelReader;
