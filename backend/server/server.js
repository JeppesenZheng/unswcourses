const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(fileUpload());

// Ensure the temp directory exists
const tempDir = path.join(__dirname, "temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Autotest configurations for each question
const autotests = {
  "positive_negative_zero": {
    input: [5, -2, 0],
    expected: ["The number is positive.", "The number is negative.", "The number is zero."]
  },
  "even_odd": {
    input: [4, 7],
    expected: ["The number is even.", "The number is odd."]
  },
  "multiple_of_ten": {
    input: [30, 23],
    expected: ["The number is a multiple of 10.", "The number is not a multiple of 10."]
  }
};

app.post('/run', (req, res) => {
  if (!req.files || !req.files.code) {
    console.error('No file uploaded.');
    return res.status(400).send({ error: 'No code file uploaded.' });
  }

  const codeFile = req.files.code;
  const codePath = path.join(tempDir, 'uploaded.c');
  const compiledPath = codePath.replace('.c', '');

  console.log('Saving uploaded file...');
  fs.writeFileSync(codePath, codeFile.data);

  console.log('Compiling the code...');
  exec(`gcc ${codePath} -o ${compiledPath}`, (compileError, _, compileStderr) => {
    if (compileError) {
      console.error('Compilation error:', compileStderr);
      return res.status(400).send({ error: `Compilation error: ${compileStderr}` });
    }

    console.log('Running autotests...');
    const testResults = [];
    const { input, expected } = autotests[req.body.testKey];
    let completedTests = 0;

    input.forEach((testInput, index) => {
      exec(`${compiledPath} ${testInput}`, (runError, stdout, stderr) => {
        completedTests++;
        const output = runError ? `Error: ${stderr.trim()}` : stdout.trim();
      
        console.log(`Test Input: ${testInput}`);
        console.log(`Expected Output: ${expected[index]}`);
        console.log(`Actual Output: ${output}`);
      
        testResults.push({
          input: testInput,
          expected: expected[index],
          output,
          passed: output === expected[index],
        });
      
        if (completedTests === input.length) {
          console.log('All tests completed. Sending results...');
          fs.unlinkSync(codePath);
          fs.unlinkSync(compiledPath);
          res.send({ results: testResults });
        }
      });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));