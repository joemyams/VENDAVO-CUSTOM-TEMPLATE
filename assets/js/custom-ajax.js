document.addEventListener("DOMContentLoaded", function() {

    console.log("Script started");

    let currentUrl = window.location.href;
    console.log("Current URL: ", currentUrl);

    let taxonomyTerm = currentUrl.split("/resources/")[1]?.split("/")[0];
    console.log("Taxonomy Term: ", taxonomyTerm);

    let currentPageNumber = document.querySelector('.alm-btn-wrap')?.getAttribute('data-current-page');
    console.log("Current Page Number: ", currentPageNumber);

    let baseUrl = "https://www.vendavo.com/resources/";
    let newCanonicalUrl = baseUrl + taxonomyTerm + "/";
    if (currentPageNumber !== "1") {
        newCanonicalUrl += "page/" + currentPageNumber + "/";
    }
    console.log("New Canonical URL: ", newCanonicalUrl);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    console.log("Canonical Tag Before Update: ", canonicalTag);

    canonicalTag?.setAttribute('href', newCanonicalUrl);
    console.log("Canonical Tag After Update: ", document.querySelector('link[rel="canonical"]').getAttribute('href'));
});