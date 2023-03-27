import { Market } from "@/@types/Market";
import { Routes } from "@/constants/Routes";
import axios, { AxiosInstance } from "axios";

export class ApiService {
    private static _service: ApiService;
    private static _api: AxiosInstance;

    private constructor() {
        ApiService._api = axios.create()
    }

    public static getInstance(): ApiService {
        ApiService._service ??= new ApiService();
        return ApiService._service;
    }

    async getMarkets(): Promise<Market[]> {
        const response = await ApiService._api.get<Market[]>(Routes.API_MARKETS);
        return response?.data;
    }
    
    async createMarket(name: string): Promise<Market> {
        const response = await ApiService._api.post(Routes.API_MARKETS, { name });
        return response?.data;
    }
}