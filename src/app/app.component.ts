import { Component } from "@angular/core";
import { Set } from "immutable";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // passing NUMBERS in a set of STRING
  wrongSet: Set<string> = Set<string>([1, 2, 3]);
  correctSet: Set<string> = Set<string>(["1", "2", "3"]);

  constructor() {
   AppComponent.toStringSet(this.wrongSet);
   AppComponent.toStringSet(this.correctSet);
  }

  static toStringSet(set: Set<string>): Set<string> {

    if (typeof set.first() === "number") {
      console.log("Need Conversion");
      const mutableArray: string[] = set.toArray();
      mutableArray.forEach((value, index, mutableArray) => {
        mutableArray[index] = value.toString();
      });
      set = Set<string>(mutableArray);
      console.log('Successfully converted to ' + typeof set.first());
    } else {
      console.log('No need of conversion.');
    }
    return set;
  }
}
