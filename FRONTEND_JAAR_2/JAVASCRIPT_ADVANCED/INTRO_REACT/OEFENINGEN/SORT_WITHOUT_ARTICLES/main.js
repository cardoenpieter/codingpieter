const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

//remove the, a, an

const arr1 = bands
  .map((bandName) => {
    return bandName.replace(/^(A|The|An)\s+/i, "");
  })
  .sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
console.log(arr1);
