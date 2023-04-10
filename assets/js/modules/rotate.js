const rotate = {
  // Proprietes availables in the object.
  wrapperSpans: [],
  wrapperSpan: null,
  letters: [],
  letter: null,
  init: function () {
    console.log("Hello world, I'm rotate.js");

    // We use the Array.from() method to crearte a array from the elements.
    rotate.wrapperSpans = Array.from(
      document.querySelectorAll(".wrapper-span")
    );

    rotate.dropSpansContent();
  },
  /**
   * Method that drop the content of the rotate.wrapperSpans elements.
   * @return {void}
   */
  dropSpansContent: function () {
    console.log("rorate.dropSpansContent()");

    for (rotate.wrapperSpan of rotate.wrapperSpans) {
      // We create a array from all the letters contains in each span.
      rotate.letters = rotate.wrapperSpan.children[0].textContent.split("");
      // We drop the content of each span.
      rotate.wrapperSpan.innerHTML = "";
      // We call rotate.fillSpans() to add the letters in the span with some CSS style.
      rotate.fillSpans();
    }
  },
  /**
   * Method that get the index of each letter form the array rotate.letters and add the letters in the span with some CSS style.
   * @return {void}
   */
  fillSpans: function () {
    console.log("rorate.fillSpans()");

    // We initialaze a index.
    let index = 0;

    for (rotate.letter of rotate.letters) {
      // We get the index of each rotate.letter.
      index = rotate.letters.indexOf(rotate.letter);
      // We create a CSS style from the index and we add the letter.
      rotate.wrapperSpan.innerHTML += `<span style="transition-delay: ${
        0.07 * index
      }s">${rotate.letter}</span>`;
    }
  },
};
