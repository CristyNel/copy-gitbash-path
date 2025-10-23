const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "extension.copyGitBashPath",
    (uri) => {
      if (!uri) return;

      // Convert Windows path to Git Bash style
      let winPath = uri.fsPath; // e.g., D:\github\file.txt
      let gitPath = winPath
        .replace(/\\+/g, "/")
        .replace(/^([A-Za-z]):/, (m, p1) => "/" + p1.toLowerCase());

      // Copy to clipboard
      vscode.env.clipboard.writeText(gitPath);

      vscode.window.showInformationMessage(`Git Bash path copied: ${gitPath}`);
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
