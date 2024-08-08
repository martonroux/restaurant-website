import { execSync } from 'child_process';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

try {
    // Delete the remote gh-pages branch if it exists
    execSync('git push origin --delete gh-pages', { stdio: 'inherit' });
} catch (error) {
    console.log('No existing gh-pages branch to delete, proceeding with deployment.');
}

// Deploy to gh-pages
execSync('gh-pages -d dist', { stdio: 'inherit' });
