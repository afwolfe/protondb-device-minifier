import "../scss/styles.scss";
import 'bootstrap';

export function filterLines(input, prefixRules) {
  const lines = input.split('\n');
  let filteredLines = [];
  let keepNextLine = false;

  for (const line of lines) {
    let ruleMatched = false;
    for (const rule in prefixRules) {
      if (line.trim().startsWith(rule)) {
        filteredLines.push(line);
        keepNextLine = prefixRules[rule].keepNextLine;
        ruleMatched = true;
        break;
      }
    }
    if (ruleMatched) continue; // Skip to the next line if there was already a match

    if (keepNextLine) {
      filteredLines.push(line);
      keepNextLine = false; // Reset after processing the next line
    }
  }

  return filteredLines.join('\n');
};

window.filterInputBox = () => {
  const textBoxInput = document.getElementById('protonInput');
  const filteredOutput = filterLines(textBoxInput.value, prefixRules);
  document.getElementById('protonResult').textContent = filteredOutput;
};

const prefixRules = {
  'Computer Information:': { keepNextLine: false },
  'Processor Information:': { keepNextLine: false },
  'CPU Vendor:': { keepNextLine: false },
  'CPU Brand:': { keepNextLine: false },
  'Operating System Version:': { keepNextLine: true },
  'Kernel Name:': { keepNextLine: false },
  'Kernel Version:': { keepNextLine: false },
  'X Server Vendor:': { keepNextLine: false},
  'X Server Release:': { keepNextLine: false},
  'X Window Manager': { keepNextLine: false },
  'Steam Runtime Version': { keepNextLine: false},
  'Video Card:': { keepNextLine: false },
  'Driver:': { keepNextLine: false },
  'Driver Version:': { keepNextLine: false },
  'Sound card:': { keepNextLine: false },
  'Audio device:': { keepNextLine: false },
  'Memory:': { keepNextLine: false },
  'RAM:': { keepNextLine: false },
};