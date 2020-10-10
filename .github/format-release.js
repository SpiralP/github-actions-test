const analysis = process.argv[2];

console.log(
  analysis
    .split(",")
    .map((line) => {
      const [file, url] = line.split("=");
      return `\`${file}\`: [VirusTotal](${url})`;
    })
    .join("\n")
);
