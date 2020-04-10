// import NavigationController from "./components/NavigationController";
import PortfolioListController from "./components/PortfolioListController";
import MagneticCtaController from "./components/MagneticCtaController";
import HotspotsController from "./components/HotspotsController";
import Dummy from "./components/Dummy";

function ready(callbackFunc) {
    if (document.readyState !== "loading") {
        /**
         * Document is already ready, call the callback directly
         */
        callbackFunc();
    } else if (document.addEventListener) {
        /**
         * All modern browsers to register DOMContentLoaded
         */
        document.addEventListener("DOMContentLoaded", callbackFunc);
    } else {
        /**
         * Old IE browsers
         */
        document.attachEvent("onreadystatechange", function() {
            if (document.readyState === "complete") {
                callbackFunc();
            }
        });
    }
}

/**
 * Document ready callback
 */
ready(function() {
    const dummy = new Dummy();
    dummy.init();

    // const navigation = new NavigationController();
    // navigation.init();

    if (document.getElementById("portfolio") !== null) {
        const portfolioList = new PortfolioListController();
        portfolioList.init();
    }

    if(document.getElementById("hotspots") !== null) {

        const magneticCta = document.querySelectorAll(".js-hotspot");

        magneticCta.forEach((element) => {
            new MagneticCtaController(element, "span");
        });

        const hotspots = new HotspotsController();
        hotspots.init();

    }
});
