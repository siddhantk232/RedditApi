export class Stats {
    static rawFlairs?: Array<string> = [];
    static sortedArray?: Array<string> = [];

    public static async retriveData(post: any): Promise<void> {
        this.rawFlairs?.push(post.link_flair_text);
    }

    public static sortFlairs(array: Array<string>) {
        array.forEach((char: string) => {
            if (!this.sortedArray?.includes(char)) {
                this.sortedArray?.push(char);
            }
        })
    }
}