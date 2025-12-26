async function runFile() {
  const fileName = process.argv[2];

  if (!fileName) {
    console.error("Please provide a file name to run");
    console.log("Usage: npm start <filename>");
    console.log("Example: npm start 2");
    process.exit(1);
  }

  const filePath = `./${fileName}.ts`;

  try {
    await import(filePath);
  } catch (error) {
    console.error(`Error running file ${fileName}:`, error);
    process.exit(1);
  }
}

runFile();
