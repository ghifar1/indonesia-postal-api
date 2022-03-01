const cliProgress = require("cli-progress");
const csv = require("csv-parser");
const fs = require("fs");

const csvArray = [
	"provinces.csv",
	"cities.csv",
	"subDistricts.csv",
	"villages.csv",
];

const CSV_DIRNAME = "src";
const OUTPUT_JSON = "data";

function extractData(fileName) {
	let folderName = fileName.split(".")[0];
	let dataPath = `${__dirname}/${CSV_DIRNAME}/${fileName}`;
	let jsonPath = `${__dirname}/${OUTPUT_JSON}/${folderName}`;
	let tempArray = {};

	if (!fs.existsSync(jsonPath)) {
		fs.mkdirSync(jsonPath);
	}

	console.log(`Scanning file ${dataPath}`);
	fs.createReadStream(dataPath)
		.pipe(csv())
		.on("data", (data) => {
			let parent = data.Parent == 62 ? "provinces" : data.Parent;

			if (!tempArray[parent]) {
				tempArray[parent] = [];
				tempArray[parent].push(data);
			} else {
				tempArray[parent].push(data);
			}
		})
		.on("end", () => {
			//create a new progress bar instance and use shades_classic theme

			const bar = new cliProgress.SingleBar(
				{
					format: `Creating json from ${fileName} | {bar} | {percentage}% || {value}/{total} Chunks`,
				},
				cliProgress.Presets.shades_classic
			);
			bar.start(Object.keys(tempArray).length, 0);

			Object.keys(tempArray).forEach((parent) => {
				fs.writeFileSync(
					`${jsonPath}/${parent}.json`,
					JSON.stringify(tempArray[parent])
				);
				bar.increment();
			});
			bar.stop();
		});
}

csvArray.forEach((data) => {
	extractData(data);
});
console.log("Data extracted successfuly");
