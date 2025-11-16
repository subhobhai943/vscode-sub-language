import * as vscode from 'vscode';
import * as child_process from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('SUB Language extension is now active!');

    // Register compile command
    let compileCommand = vscode.commands.registerCommand('sub.compile', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        const document = editor.document;
        if (document.languageId !== 'sub') {
            vscode.window.showErrorMessage('Not a SUB file');
            return;
        }

        const filePath = document.fileName;
        const platform = vscode.workspace.getConfiguration('sub').get('targetPlatform', 'web');

        // Save file first
        document.save().then(() => {
            const terminal = vscode.window.createTerminal('SUB Compiler');
            terminal.show();
            terminal.sendText(`sub "${filePath}" ${platform}`);
        });
    });

    context.subscriptions.push(compileCommand);

    // Show welcome message on first activation
    const hasShownWelcome = context.globalState.get('hasShownWelcome', false);
    if (!hasShownWelcome) {
        vscode.window.showInformationMessage(
            'Welcome to SUB Language! Install the SUB compiler from https://github.com/subhobhai943/sub-lang',
            'Get SUB'
        ).then(selection => {
            if (selection === 'Get SUB') {
                vscode.env.openExternal(vscode.Uri.parse('https://github.com/subhobhai943/sub-lang'));
            }
        });
        context.globalState.update('hasShownWelcome', true);
    }
}

export function deactivate() {}
