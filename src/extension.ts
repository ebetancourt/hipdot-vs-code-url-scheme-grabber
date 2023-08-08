// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

class NoWorkspaceOpen extends Error {
}

class NoTextEditorOpen extends Error {
}

class DocumentIsUntitled extends Error {
}

function copyCurrentFilePathWithCurrentLineNumber(markdown: boolean = false, includeHighlightedTextAsCodeBlock: boolean = false): string {
	if (!vscode.workspace.rootPath) {
		throw new NoWorkspaceOpen;
	}

	let editor = vscode.window.activeTextEditor;
	if (!editor) {
		throw new NoTextEditorOpen;
	}

	let document = editor.document;
	if (document.isUntitled) {
		throw new DocumentIsUntitled;
	}

	const path = document.uri.path;
	const relativePath = path.replace(vscode.workspace.rootPath, '');
	const lineNumber = editor.selection.active.line + 1;
	const columnNumber = editor.selection.active.character + 1;
	const includeColumn = vscode.workspace.getConfiguration('hipdotUrlSchemeGrabber').get('includeColumn');

	const url = `vscode://file${path}:${lineNumber}${includeColumn ? `:${columnNumber}` : ''}`;
	// return markdown ? `[${relativePath}:${lineNumber}${includeColumn ? `:${columnNumber}` : ''}](${url})` : url;
    let output = markdown ? `[${relativePath}:${lineNumber}${includeColumn ? `:${columnNumber}` : ''}](${url})` : url;
    
    if (includeHighlightedTextAsCodeBlock) {
        const selectedText = editor.document.getText(editor.selection);
        const codeBlock = "```" + document.languageId + "\n" + selectedText + "\n```";
		// TODO: optionally de-indent to the appropriate (minimum) level
        output += "\n" + codeBlock;
    }
    
    return output;
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hipdot-vs-code-url-scheme-grabber" is now active!');

	let copyRawLink = vscode.commands.registerCommand('hipdot-vs-code-url-scheme-grabber.copyLink', () => {
		let filePathWithLineNumber;
		try {
			filePathWithLineNumber = copyCurrentFilePathWithCurrentLineNumber();
		} catch (e) {
			if (e instanceof NoWorkspaceOpen) {
			} else if (e instanceof NoTextEditorOpen) {
			} else if (e instanceof DocumentIsUntitled) {
			} else {
				throw e;
			}
		}

		if (!filePathWithLineNumber) {
			throw new Error("Could not get file path with line number.");
		}

		vscode.env.clipboard.writeText(filePathWithLineNumber).then(() => {
			vscode.window.showInformationMessage('URL Copied to Clipboard');
		});
	});

	context.subscriptions.push(copyRawLink);

	let copyMarkdownLink = vscode.commands.registerCommand('hipdot-vs-code-url-scheme-grabber.copyMarkdownLink', () => {
		let filePathWithLineNumber;
		try {
			filePathWithLineNumber = copyCurrentFilePathWithCurrentLineNumber(true, false);
		} catch (e) {
			if (e instanceof NoWorkspaceOpen) {
			} else if (e instanceof NoTextEditorOpen) {
			} else if (e instanceof DocumentIsUntitled) {
			} else {
				throw e;
			}
		}

		if (!filePathWithLineNumber) {
			throw new Error("Could not get file path with line number.");
		}

		vscode.env.clipboard.writeText(filePathWithLineNumber).then(() => {
			vscode.window.showInformationMessage('Markdown URL Copied to Clipboard');
		});
	});

	context.subscriptions.push(copyMarkdownLink);

	let copyLinkAndSelection = vscode.commands.registerCommand('hipdot-vs-code-url-scheme-grabber.copyLinkAndSelection', () => {
		let filePathWithLineNumberAndCode;
		try {
			filePathWithLineNumberAndCode = copyCurrentFilePathWithCurrentLineNumber(false, true);
		} catch (e) {
			if (e instanceof NoWorkspaceOpen) {
			} else if (e instanceof NoTextEditorOpen) {
			} else if (e instanceof DocumentIsUntitled) {
			} else {
				throw e;
			}
		}

		if (!filePathWithLineNumberAndCode) {
			throw new Error("Could not get file path with line number.");
		}

		vscode.env.clipboard.writeText(filePathWithLineNumberAndCode).then(() => {
			vscode.window.showInformationMessage('URL+Selection Copied to Clipboard');
		});
	});

	context.subscriptions.push(copyLinkAndSelection);


	let copyMarkdownLinkAndSelection = vscode.commands.registerCommand('hipdot-vs-code-url-scheme-grabber.copyMarkdownLinkAndSelection', () => {
		let filePathWithLineNumberAndCode;
		try {
			filePathWithLineNumberAndCode = copyCurrentFilePathWithCurrentLineNumber(true, true);
		} catch (e) {
			if (e instanceof NoWorkspaceOpen) {
			} else if (e instanceof NoTextEditorOpen) {
			} else if (e instanceof DocumentIsUntitled) {
			} else {
				throw e;
			}
		}

		if (!filePathWithLineNumberAndCode) {
			throw new Error("Could not get file path with line number.");
		}

		vscode.env.clipboard.writeText(filePathWithLineNumberAndCode).then(() => {
			vscode.window.showInformationMessage('Markdown URL+Selection Copied to Clipboard');
		});
	});

	context.subscriptions.push(copyMarkdownLinkAndSelection);




}

// This method is called when your extension is deactivated
export function deactivate() { }
