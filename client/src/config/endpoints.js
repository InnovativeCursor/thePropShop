

const baseUrlLive = `http://api.thepropshopworldwide.com`;
const baseUrlDev = `http://api.thepropshopworldwide.com`;



// Only change this to change app environment
const isLive = false;
const baseUrl = isLive ? baseUrlLive : baseUrlDev;

const endpoints = {
    locationOptions: `${baseUrl}/locationOptions`,
    boothsizeOptions: `${baseUrl}/boothsizeOptions`,
    budgetOptions: `${baseUrl}/budgetOptions`,
    secondaryOptions: `${baseUrl}/secondaryOptions`,
    functionalReq: `${baseUrl}/functionalReq`,
    products: `${baseUrl}/products`
};

export const propShopMastersBaseURL = "http://api.thepropshopworldwide.com";

export default endpoints;
