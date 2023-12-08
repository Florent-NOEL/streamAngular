import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  page = 0;
  doNext() {
    this.page++;
    console.log("page from home: " + this.page);
  }
  goBack() {
    if (this.page > 0) {
      this.page--;
      console.log("page from home: " + this.page);
    }
  }
}
