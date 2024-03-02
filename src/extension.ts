import * as vscode from 'vscode';
import { SidebarProvider } from './Sidebar';

export function activate(context: vscode.ExtensionContext) {
    const sidebarProvider = new SidebarProvider(context.extensionUri);
    
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("CodeHub-sidebar", sidebarProvider)
  );
    console.log('Congratulations, your extension "CodeHub" is now active!');

    // Register the "Hello World" command
    let disposable = vscode.commands.registerCommand('CodeHub.helloWorld', () => {
    });

    context.subscriptions.push(disposable);
}
export function deactivate() {}
// import * as vscode from 'vscode';

// export function activate(context: vscode.ExtensionContext) {
//     console.log('Congratulations, your extension "CodeHub" is now active!');

//     // Register the "Hello World" command
//     let disposable = vscode.commands.registerCommand('CodeHub.helloWorld', () => {
//         // Create a webview panel
//         const panel = vscode.window.createWebviewPanel(
//             'helloWorld', // Unique identifier
//             'Hello, World!', // Title
//             vscode.ViewColumn.One, // Column to show the panel in
//             {}
//         );

//         // Get the path to your HTML file
//         const htmlPath = context.asAbsolutePath('../helloWorld.html');

//         // Read and display the content of the HTML file in the webview panel
//         vscode.workspace.fs.readFile(vscode.Uri.file(htmlPath)).then(content => {
//             panel.webview.html = content.toString();
//         });
//     });

//     context.subscriptions.push(disposable);
// }

// export function deactivate() {}
