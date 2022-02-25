import { FlairManager, Stats } from "./structures";

const d = new FlairManager();

d.getFlairs().then(() => {

    Stats.sortFlairs(Stats.rawFlairs as Array<string>);
    console.log(Stats.sortedArray?.join("\n"));

});