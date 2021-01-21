const LOCAL_REEL_SET = './data/reel-set.json';
const LOCAL_SYMBOLS_INFO = './data/symbols-info.json';

const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Error code: ' + res.status);
    }
    return res.json();
};

const getReelSet = async () => {
    const data = await getResource(LOCAL_REEL_SET);
    return data;
};

const getSymbolsData = async () => {
    const data = await getResource(LOCAL_SYMBOLS_INFO);
    return data;
};