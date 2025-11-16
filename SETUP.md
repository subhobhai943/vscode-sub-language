# VS Code Extension Setup & Publishing Guide

## Prerequisites

1. **Node.js** (v20 or higher)
2. **npm** (comes with Node.js)
3. **VS Code Marketplace Publisher Account** ✅ (You have: SubhadipSarkar)
4. **Personal Access Token (PAT)** from Azure DevOps

## Getting Your Personal Access Token

### Step 1: Create PAT
1. Go to: https://dev.azure.com/
2. Click your profile icon (top right) → **Personal access tokens**
3. Click **+ New Token**
4. Settings:
   - Name: `VS Code Marketplace`
   - Organization: **All accessible organizations**
   - Expiration: **Custom defined** (1 year recommended)
   - Scopes: **Custom defined**
     - ✅ Check **Marketplace** → **Manage**
5. Click **Create**
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Add Token to GitHub Secrets
1. Go to: https://github.com/subhobhai943/vscode-sub-language/settings/secrets/actions
2. Click **New repository secret**
3. Name: `VSCE_TOKEN`
4. Value: Paste your PAT
5. Click **Add secret**

## Local Development

### Install Dependencies
```bash
git clone https://github.com/subhobhai943/vscode-sub-language.git
cd vscode-sub-language
npm install
```

### Compile TypeScript
```bash
npm run compile
```

### Test Extension Locally
1. Open this folder in VS Code
2. Press `F5` to launch Extension Development Host
3. Create a new file with `.sb` extension
4. Test syntax highlighting and snippets

### Package Extension
```bash
npm run package
```
This creates a `.vsix` file you can install manually.

## Publishing

### Automated Publishing (Recommended)

1. **Update version** in `package.json`:
   ```json
   "version": "1.0.1"
   ```

2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Release v1.0.1"
   git push
   ```

3. **Create and push tag**:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

4. **GitHub Actions will automatically**:
   - Install dependencies
   - Compile TypeScript
   - Package extension
   - Publish to VS Code Marketplace

5. **Check workflow**: https://github.com/subhobhai943/vscode-sub-language/actions

### Manual Publishing

```bash
# Login (one-time)
npx vsce login SubhadipSarkar
# Enter your PAT when prompted

# Publish
npm run publish
```

## After Publishing

### Check Status
1. Go to: https://marketplace.visualstudio.com/manage/publishers/subhadipsarkar
2. View your published extension
3. See install counts, ratings, reviews

### Install Your Extension
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search: "SUB Language"
4. Click **Install**

### Share Your Extension
- **Marketplace URL**: https://marketplace.visualstudio.com/items?itemName=SubhadipSarkar.sub-language
- **Badge for README**: 
  ```markdown
  ![Version](https://img.shields.io/visual-studio-marketplace/v/SubhadipSarkar.sub-language)
  ![Installs](https://img.shields.io/visual-studio-marketplace/i/SubhadipSarkar.sub-language)
  ```

## Updating the Extension

1. Make your changes
2. Update version in `package.json` (follow [semver](https://semver.org/))
3. Commit changes
4. Create new tag: `git tag v1.0.2`
5. Push tag: `git push origin v1.0.2`
6. GitHub Actions publishes automatically!

## Troubleshooting

### Extension Not Publishing
- Check GitHub Actions logs
- Verify `VSCE_TOKEN` secret is set correctly
- Ensure publisher name matches: `SubhadipSarkar`
- Check PAT hasn't expired

### TypeScript Compilation Errors
```bash
npm run compile -- --watch
```
Fix errors and recompile.

### Testing Issues
- Delete `out/` folder
- Run `npm run compile` again
- Restart VS Code Extension Development Host (`F5`)

## Version History

### v1.0.0 (Initial Release)
- Syntax highlighting for `.sb` files
- Code snippets (var, func, if, for, while, ui, embed)
- Compile command
- Auto-closing pairs
- Indentation rules
- Comment toggling

## Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)
- [TextMate Grammar](https://macromates.com/manual/en/language_grammars)

## Support

- Issues: https://github.com/subhobhai943/sub-lang/issues
- SUB Language: https://github.com/subhobhai943/sub-lang

---

**Happy Publishing! 🚀**
