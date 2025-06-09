#!/usr/bin/env node

import { execSync } from "child_process";
import dotenv from "dotenv";
dotenv.config({ path: "./.openai.env" }); // Use custom env file

const diff = execSync("git diff --cached", { encoding: "utf-8" });

if (!diff.trim()) {
  console.log("❌ No staged changes to commit.");
  process.exit(1);
}

const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Generate a concise git commit message from this diff:\n\n${diff}`
      }
    ],
    temperature: 0.5
  })
});

const data = await response.json();

if (!data.choices || !data.choices[0]) {
  console.error("❌ Error from OpenAI:", JSON.stringify(data, null, 2));
  process.exit(1);
}

const message = data.choices[0].message.content.trim();
console.log(`\n✅ Suggested Commit Message:\n"${message}"\n`);

const confirm = await ask("Use this commit message? (y/N): ");
if (confirm.toLowerCase() === "y") {
  execSync(`git commit -m "${message}"`, { stdio: "inherit" });
  execSync("git push", { stdio: "inherit" });
} else {
  console.log("🛑 Aborted.");
}

function ask(question) {
  return new Promise(resolve => {
    process.stdout.write(question);
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    process.stdin.once("data", data => resolve(data.trim()));
  });
}
