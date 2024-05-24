import { apiKey } from "./apiKeys";


const baseUrlLive = `http://118.139.167.79/`;
const baseUrlDev = `http://118.139.167.79/`;

const api_key = `${apiKey}`;

// Only change this to change app environment
const isLive = false;
const baseUrl = isLive ? baseUrlLive : baseUrlDev;

const endpoints = {
    locationOptions: `${baseUrl}locationOptions?${api_key}`,
};

export const propShopMastersBaseURL = "http://118.139.167.79/";

export default endpoints;
