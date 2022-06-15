import fetch from 'node-fetch';

const URI = 'https://ddragon.leagueoflegends.com';

const getVersions = async () => {
	const response = await fetch(`${URI}/api/versions.json`);
	const versions = await response.json();
	return versions;
};

const getLatestVersion = async () => {
	const versions = await getVersions();
	return versions[0];
};

/*
const getVersionData = async (version) => {
	const response = await fetch(`${URI}/cdn/${version}/data/en_US/champion.json`);
	const data = await response.json();
	const keys = Object.keys(data.data);
	const results = keys.reduce((acc, key, index) => {
		const newData = data.data[key];
		return {
			...acc,
			indexes: [ ...acc.indexes, key ],
			named: { ...acc.named, [key]: index },
			data: [...acc.data, newData]
		}
	}, {
		indexes: [],
		named: {},
		data: [],
	});
	return results;
};*/

const getVersionData = async (version) => {
	const response = await fetch(`${URI}/cdn/${version}/data/en_US/champion.json`);
	const data = await response.json();
	const keys = Object.keys(data.data);
	const results = keys.reduce((acc, key, index) => ([
		...acc,
		data.data[key],
	]), []);
	return results;
};

const getRandomPlayer = async (data) => {
	const randomIndex = Math.floor(Math.random() * data.length);
	const randomPlayer = data[randomIndex];
	return randomPlayer;
};

const getCoparisonPlayers = async (data) => {
	const indexA = Math.floor(Math.random() * data.length);
	const indexB = Math.floor(Math.random() * data.length);
	if (indexA === indexB) return getCoparisonPlayers(data);
	return [data[indexA], data[indexB]];
}

const test = async () => {
	const version = await getLatestVersion();
	const data = await getVersionData(version);
	const randomPlayer = await getCoparisonPlayers(data);
	console.log(randomPlayer);
};

test();
