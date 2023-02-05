export function parseFilePath(fileType, filePath, extension) {
    if (filePath === undefined) {
        console.error(`You did not specify an ${fileType} file`);
        return false;
    }
    else if (!filePath.endsWith(extension)) {
        console.error(`${fileType} has to be a ${extension}`);
        return false;
    }
    return true;
}
//# sourceMappingURL=common.js.map