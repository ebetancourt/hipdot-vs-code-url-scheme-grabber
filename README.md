# VS Code URL Scheme Grabber README

Visual Studio Code has a documented way to open VS code using URLs (in the MacOS / iOS world, this is commonly called a URL Scheme or URI Scheme). You can see the documentation here: [Opening VS Code with URLs](https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls). This is something I personally use when planning out the steps I will take to implement a feature. However there is no built in way to get the URL from VS Code, so I have been copying the absolute path and manually creating the URLs (with snippets in my notes program of choice).

## Features

This extension adds two commands:

* Copy Link to Current File and Line Number
* Copy Link to Current File and Line Number in Markdown Format

A short demo of it in action:

![Screencast of URL Scheme Grabber in Use](./images/screencast.gif)

## Extension Settings

This extension contributes following setting, which can be found under the heading "URL Scheme Grabber":

* `hipdotUrlSchemeGrabber.includeColumn`: Include the column number in the link to the current file and line number

## Known Issues

None yet

## Release Notes

### 1.0.0

Initial release of VS Code URL Scheme Grabber

---

## TODO List / Future Improvement Ideas:

- [x] Add Command to copy the raw URL of the current location~
- [x] Add Command to copy a markdown link to the current location
- [x] Add a setting to optionally include the column number in the link
- [ ] Add copying the link and markdown link with the column number as optional additional commands
- [ ] Context menu to right click on files in the file explorer or the current cursor and copy the file/cursor location
- [ ] Be able to call the extension via a VS Code URL from outside VS Code to get the current location of the cursor or the current file (I know, how meta!) so that it can be used by apps like [Hookmark](https://hookproductivity.com/), MacOS Shortcuts that get the current file url from the active app - or to be able to script getting the current location from outside Visual Studio Code in interesting ways


**Enjoy!**
