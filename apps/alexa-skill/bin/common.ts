export function parseFilePath(
    fileType: string,
    filePath: string | undefined,
    extension: string,
): filePath is string {
    if (filePath === undefined) {
        console.error(`You did not specify an ${fileType} file`);
        return false;
    } else if (!filePath.endsWith(extension)) {
        console.error(`${fileType} has to be a ${extension}`);
        return false;
    }
    return true;
}
