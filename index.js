let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!",
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory",
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)",
  },
];

// console.log(myCollection);

function describeItem(item) {
  console.log(
    "I have a " +
      item[0].name +
      ". Here is what I like about it: " +
      item[0].whatILike
  );
  console.log(
    "I have " +
      item[1].count +
      " " +
      item[1].name +
      "s" +
      ". Here is what I like about them: " +
      item[1].whatILike
  );
  console.log(
    "I have a " +
      item[2].name +
      ". Here is what I like about it: " +
      item[2].whatILike
  );
}
describeItem(myCollection);
