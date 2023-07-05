import {homePage} from "../pageObjects/homePage";
import {productPageSteps} from "./productPageSteps";
import {homePageSteps} from "./homePageSteps";

class CommonSteps {

  navigateToPageFromHeader(desiredPage: 'EAWebApp' | 'Home' | 'Privacy' | 'Product'): any {
    switch (desiredPage) {
      case "Product":
        homePage.mainHeader.getHeaderLinkByText(desiredPage).click();
        return productPageSteps;
      default:
        return homePageSteps;
    }
  }
}

export const commonSteps = new CommonSteps();