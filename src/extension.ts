
import * as vscode from 'vscode';


let myStatusBarItem: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {

	// register a command that is invoked when the status bar
	// item is selected
	// const myCommandId = 'sample.showSelectionCount';
	// subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
	// 	const n = getNumberOfSelectedLines(vscode.window.activeTextEditor);
	// 	vscode.window.showInformationMessage(`Yeah, ${n} line(s) selected... Keep going!`);
	// }));

	// subscriptions.push(vscode.commands.registerCommand('CodeHub.aditya', () => {
	// 	vscode.window.showInformationMessage(`Aditya`);
	// }))
	// create a new status bar item that we can now manage
	// myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	// myStatusBarItem.command = myCommandId;
	// subscriptions.push(myStatusBarItem);

	// register some listener that make sure the status bar 
	// item always up-to-date
	// subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	// subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));

	// update status bar item once at start
	// updateStatusBarItem();

	// subscriptions.push(vscode.window.registerWebviewViewProvider('chat.view', {
	// 	resolveWebviewView(webviewView: vscode.WebviewView) {
	// 		webviewView.webview.options = {
	// 			enableScripts: true
	// 		};
	// 		webviewView.webview.html = getWebviewContent();
	// 	}
	// }))
}

// function getWebviewContent() {
//     return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Chat UI</title>
//         <style>
//             /* Your CSS styles for the chat UI */
//         </style>
//     </head>
//     <body>
//         <div>
//             <h1>Welcome to the Chat</h1>
//             <!-- Your chat UI elements here -->
//         </div>
//     </body>
//     </html>`;
// }


// function updateStatusBarItem(): void {
// 	const n = getNumberOfSelectedLines(vscode.window.activeTextEditor);
// 	if (n > 0) {
// 		myStatusBarItem.text = `$(megaphone) ${n} line(s) selected`;
// 		myStatusBarItem.show();
// 	} else {
// 		myStatusBarItem.hide();
// 	}
// }

// function getNumberOfSelectedLines(editor: vscode.TextEditor | undefined): number {
// 	let lines = 0;
// 	if (editor) {
// 		lines = editor.selections.reduce((prev, curr) => prev + (curr.end.line - curr.start.line), 0);
// 	}
// 	return lines;
// }