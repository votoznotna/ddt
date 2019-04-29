
For usage, navigate to root folder of the project and do the following: 
1. run "yarn install" or "npm install".
2. run "yarn install-client" or "npm run install-client".
3. run "yarn dev" or "npm run dev".
4. navigate to http://localhost:4200 on any browser.

The implemented behavior:

    1. Clicking on an image of the book cover displays a bigger image of the cover. This image is displayed on the foreground, everything else is shadowed.
    2. Selecting a sorting button orders the elements by title. The order is either ascending or descending.
    3. Imputing the filter condition filters out books by content of title, author and release date.
    4. Pressing Reset button resets filters and sorting. The same behavior is expected after pressing the shortcut `[command] + [r]` (`[alt] + [r]` is not using angular's specific keys hanlding for some reasong). 
    5. Refreshment of the page does not change sorting / filtering.
    6. Unit tests can be run by "yarn test" from root folder after stopping both project's server and client services.
    7. E2e tests can be run by "yarn e2e" from root foler after stopping both project's server and client services.