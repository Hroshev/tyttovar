import fs from 'fs-extra';
import path from 'path';

export const copy = async () => {
    if (app.path.src.files && fs.existsSync(app.path.src.files)) {
        const sourceFilesDir = path.resolve(app.path.srcFolder, app.path.src.files);
        await fs.copy(sourceFilesDir, app.path.build.files);
    }
    
    if (app.path.src.phpmailer && fs.existsSync(app.path.src.phpmailer)) {
        const sourcePhpmailerDir = path.resolve(app.path.srcFolder, app.path.src.phpmailer);
        await fs.copy(sourcePhpmailerDir, app.path.build.phpmailer);
    }
    
    if (app.path.src.php && fs.existsSync(app.path.src.php)) {
        const sourcePhpDir = path.resolve(app.path.srcFolder, app.path.src.php);
        await fs.copy(sourcePhpDir, app.path.build.php);
    }
}