# VS Code URL Scheme Grabber README

Visual Studio Code has a documented way to open VS code using URLs (in the MacOS / iOS world, this is commonly called a URL Scheme or URI Scheme). You can see the documentation here: [Opening VS Code with URLs](https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls). This is something I personally use when planning out the steps I will take to implement a feature. However there is no built in way to get the URL from VS Code, so I have been copying the absolute path and manually creating the URLs (with snippets in my notes program of choice).

Other times you might want links that open VS Code to a specific file location:
- When adding tasks for yourself in your task manager
- taking notes on the way a codebase works

## Features

This extension adds two commands:

* Copy Link to Current File and Line Number
* Copy Link to Current File and Line Number in Markdown Format
* Copy Link to Current File and Line Number and Selection in Markdown Format


A short demo of it in action:

![Screencast of URL Scheme Grabber in Use](https://github.com/ebetancourt/hipdot-vs-code-url-scheme-grabber/raw/main/images/screencast.gif)

## Extension Settings

This extension contributes following setting, which can be found under the heading "URL Scheme Grabber":

* `hipdotUrlSchemeGrabber.includeColumn`: Include the column number in the link to the current file and line number

## Known Issues

None yet

## Release Notes

### 1.0.5

- [\[Fix\] Remove workspace existing check by velios · Pull Request #5](https://github.com/ebetancourt/hipdot-vs-code-url-scheme-grabber/pull/5)
- [Add option to open links in VSCode Insiders by dandavison · Pull Request #2](https://github.com/ebetancourt/hipdot-vs-code-url-scheme-grabber/pull/2)
- [Added command to copy selected text in addition to line number/link by CommanderPho · Pull Request #4](https://github.com/ebetancourt/hipdot-vs-code-url-scheme-grabber/pull/4)

### 1.0.2

Initial release of VS Code URL Scheme Grabber

---

## Acknowlegements

My extension is heavily based off the hardwork of [Nisanth Chunduru](https://github.com/nisanthchunduru) in his repo here:

- [nisanthchunduru/vscode-copy-filepath-with-line-number: VSCode extention to copy current file's full path with current line number](https://github.com/nisanthchunduru/vscode-copy-filepath-with-line-number)

I just took the Yoeman generated starter for a VS Code Extension and added his logic because I wanted to be able to grab the full URL link.

Thanks Nisanth!

## TODO List / Future Improvement Ideas:

- [x] Add Command to copy the raw URL of the current location~
- [x] Add Command to copy a markdown link to the current location
- [x] Add a setting to optionally include the column number in the link
- [ ] Add copying the link and markdown link with the column number as optional additional commands
- [ ] Context menu to right click on files in the file explorer or the current cursor and copy the file/cursor location
- [ ] Be able to call the extension via a VS Code URL from outside VS Code to get the current location of the cursor or the current file (I know, how meta!) so that it can be used by apps like [Hookmark](https://hookproductivity.com/), MacOS Shortcuts that get the current file url from the active app - or to be able to script getting the current location from outside Visual Studio Code in interesting ways

## Contributing:

Issue reports and PRs are welcome at [https://github.com/ebetancourt/hipdot-vs-code-url-scheme-grabber](https://github.com/ebetancourt/hipdot-vs-code-url-scheme-grabber)


**Enjoy!**
