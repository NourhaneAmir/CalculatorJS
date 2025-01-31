class Component {
  static styleIsLoaded = false;

  static load(href) {
    const linkTag = document.createElement("link");
    linkTag.rel = "stylesheet";
    linkTag.href = href;
    document.head.append(linkTag);

    //console.log("CSS Loaded:", href);
  }
}
export default Component;
