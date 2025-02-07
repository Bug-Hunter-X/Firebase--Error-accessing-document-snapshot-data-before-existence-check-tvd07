# Firebase: Error Accessing Document Snapshot Data Before Existence Check

This repository demonstrates a common error when working with Firebase and provides a solution.

## Problem

The Firebase SDK can throw errors if you attempt to access properties of a document snapshot before verifying its existence using `snapshot.exists()`.  This often results in unexpected crashes, especially when dealing with potentially non-existent documents.

## Solution

Always check `snapshot.exists()` before accessing any data within a document snapshot to prevent errors and ensure robust code.

## Usage

The `bug.js` file contains code that demonstrates the error, and `bugSolution.js` shows the corrected version.

## Contributing

Contributions are welcome.  Please open an issue or submit a pull request.