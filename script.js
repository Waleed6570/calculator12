const codeTable = {
  4: "AA",
  5: "AB",
  6: "AC",
  7: "AD",
  8: "AE",
  9: "AF",
  10: "AG",
  11: "AH",
  12: "AI",

  13: "BA",
  14: "BB",
  15: "BC",
  16: "BD",
  17: "BE",
  18: "BF",
  19: "BG",
  20: "BH",
  21: "BI",

  22: "CA",
  23: "CB",
  24: "CC",
  25: "CD",
  26: "CE",
  27: "CF",
  28: "CG",
  29: "CH",
  30: "CI",

  31: "DA",
  32: "DB",
  33: "DC",
  34: "DD",
  35: "DE",
  36: "DF"
};

function decodeCode() {
  const input = document.getElementById("codeInput").value.trim();
  const resultBox = document.getElementById("result");

  if (input === "") {
    resultBox.innerText = "Please enter a number code!";
    return;
  }

  const codeNum = parseInt(input);
  const decoded = codeTable[codeNum];

  if (decoded) {
    resultBox.innerText = `Decoded: ${decoded}`;
  } else {
    resultBox.innerText = "Invalid code. No match found.";
  }
}
