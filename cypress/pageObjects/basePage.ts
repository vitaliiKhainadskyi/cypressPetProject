import {MainHeader} from "./mainHeader";


export abstract class BasePage {
  readonly mainHeader: MainHeader;

  constructor() {
    this.mainHeader = new MainHeader();
  }
}