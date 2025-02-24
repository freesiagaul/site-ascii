// splashShrug timer
const splashShrug = document.querySelector(".splashShrug");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(
    () => {
      splashShrug.classList.add("display-none");
    },
    // splashShrug timer
    2250
  );
});

// splashShrug writing
const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString =
      options.resolveString ||
      options.element.getAttribute("data-target-resolver");
    const combinedOptions = Object.assign({}, options, {
      resolveString: resolveString,
    });

    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    }

    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {
            iterations: iterations - 1,
          });

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent =
              partialString.substring(0, partialString.length - 1) +
              randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      }, options.timeout);
    }

    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {
        partialString: partialString,
      });

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, { offset: offset + 1 });

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    }

    doResolverEffect(combinedOptions, callback);
  },
};

const strings = ["	Who am I?	"];

let counter = 0;

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 4,
  // Number of random characters to show
  iterations: 6,
  // Random characters to pick from
  characters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "x",
    "#",
    "%",
    "&",
    "-",
    "+",
    "_",
    "?",
    "/",
    "\\",
    "=",
  ],
  // String to resolve
  resolveString: strings[counter],
  // The element
  element: document.querySelector("[data-target-resolver]"),
};

// Typing effect
function callback() {
  setTimeout(() => {
    counter++;

    if (counter >= strings.length) {
      counter = 0;
    }

    let nextOptions = Object.assign({}, options, {
      resolveString: strings[counter],
    });
    resolver.resolve(nextOptions, callback);
  }, 2250);
}

resolver.resolve(options, callback);

// FAQ Open/Close
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // Change + to - when clicked
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Visibility of body
    groupBody.classList.toggle("open");

    // Close if other opened
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
