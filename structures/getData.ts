import axios, { AxiosResponse } from "axios";
import { Stats } from "./postInformation";

export class FlairManager {
    private _apiUrl: string = "https://www.reddit.com/r/<subreddit>/new.json?raw_json=1";

    public async getFlairs(): Promise<void> {
        const response: AxiosResponse<any> = await axios.get<string>(this._apiUrl.replace('<subreddit>', 'developersindia'));

        for (let i: number = 0; i < response.data.data.children.length; i++) {
            Stats.retriveData(response.data.data.children[i].data);
        };
    };

}