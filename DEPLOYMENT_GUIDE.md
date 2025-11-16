# 🚀 SUB Language VS Code Extension - Deployment Guide

## ✅ What's Ready

Your VS Code extension is **100% ready** for deployment! Here's what we've created:

### Files Structure
```
vscode-sub-language/
├── package.json                    # Extension manifest
├── README.md                       # Marketplace description
├── LICENSE                         # MIT License
├── tsconfig.json                   # TypeScript config
├── language-configuration.json     # Language settings
├── .vscodeignore                   # Package exclusions
├── .gitignore                      # Git exclusions
├── SETUP.md                        # Setup instructions
├── src/
│   └── extension.ts                # Extension logic
├── syntaxes/
│   └── sub.tmLanguage.json         # Syntax highlighting
├── snippets/
│   └── sub.json                    # Code snippets
└── .github/
    └── workflows/
        └── publish.yml             # Automated publishing
```

### Features Included
✨ **Syntax Highlighting** - Beautiful colors for SUB code  
📝 **10 Code Snippets** - var, func, if, for, while, ui, embed, etc.  
⚙️ **Compile Command** - Run SUB compiler from VS Code  
📦 **Auto-closing Pairs** - Brackets, quotes, etc.  
📊 **Indentation Rules** - Smart indenting for SUB  
💬 **Comment Support** - Toggle comments with `Ctrl+/`  
🤖 **Automated CI/CD** - Push tag, auto-publish!

---

## 🛠️ Quick Deployment Steps

### Step 1: Get Your Personal Access Token (PAT)

1. **Go to Azure DevOps**:
   - Visit: https://dev.azure.com/
   - Sign in with your Microsoft account

2. **Create Token**:
   - Click your profile icon (top right) → **Personal access tokens**
   - Click **+ New Token**
   - **Name**: `VS Code Marketplace`
   - **Organization**: **All accessible organizations**
   - **Expiration**: **1 year**
   - **Scopes**: **Custom defined**
     - Expand **Marketplace**
     - ✅ Check **Manage**
   - Click **Create**
   - **⚠️ COPY THE TOKEN NOW** (won't be shown again!)

### Step 2: Add Token to GitHub

1. Go to: https://github.com/subhobhai943/vscode-sub-language/settings/secrets/actions
2. Click **New repository secret**
3. **Name**: `VSCE_TOKEN`
4. **Value**: Paste your token
5. Click **Add secret**

### Step 3: Publish Your Extension

You have **2 options**:

#### Option A: Automated (Recommended) 🤖

```bash
# Clone repository (if not already)
git clone https://github.com/subhobhai943/vscode-sub-language.git
cd vscode-sub-language

# Create and push a release tag
git tag v1.0.0
git push origin v1.0.0
```

**That's it!** GitHub Actions will automatically:
1. Install dependencies
2. Compile TypeScript
3. Package extension
4. Publish to VS Code Marketplace

Watch progress: https://github.com/subhobhai943/vscode-sub-language/actions

#### Option B: Manual Publishing

```bash
# Install dependencies
npm install

# Install vsce globally
npm install -g @vscode/vsce

# Login to marketplace
vsce login SubhadipSarkar
# Paste your PAT when prompted

# Package extension
vsce package

# Publish
vsce publish
```

---

## 🎉 After Publishing

### Verify Your Extension

1. **Marketplace Page**:
   - Go to: https://marketplace.visualstudio.com/manage/publishers/subhadipsarkar
   - View your published extension
   - Check installs, ratings, Q&A

2. **Direct Link**:
   - https://marketplace.visualstudio.com/items?itemName=SubhadipSarkar.sub-language

### Install in VS Code

1. Open VS Code
2. Press `Ctrl+Shift+X` (Extensions)
3. Search: **"SUB Language"**
4. Click **Install**
5. Create a `.sb` file to test!

### Test Features

```sub
# Try typing these snippets and press Tab:
var<Tab>     # Creates variable
func<Tab>    # Creates function
if<Tab>      # Creates if statement
for<Tab>     # Creates for loop
ui<Tab>      # Creates UI window
embedpy<Tab> # Embeds Python code
```

---

## 🔄 Updating Your Extension

### Version Updates

1. **Update `package.json`**:
   ```json
   "version": "1.0.1"  // Increment version
   ```

2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Release v1.0.1: Add new features"
   git push
   ```

3. **Create new tag**:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

4. **GitHub Actions auto-publishes!**

### Version Numbering (Semantic Versioning)

- `1.0.0` → `1.0.1` - Bug fixes
- `1.0.0` → `1.1.0` - New features
- `1.0.0` → `2.0.0` - Breaking changes

---

## 📊 Monitoring & Analytics

### View Statistics

1. Go to: https://marketplace.visualstudio.com/manage/publishers/subhadipsarkar
2. View:
   - 📊 Total installs
   - ⭐ Ratings & reviews
   - 📝 Q&A questions
   - 📈 Download trends

### Respond to Users

- Answer Q&A questions
- Reply to reviews
- Fix reported bugs
- Add requested features

---

## 📢 Marketing Your Extension

### Add Badges to README

```markdown
![VS Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/SubhadipSarkar.sub-language)
![Installs](https://img.shields.io/visual-studio-marketplace/i/SubhadipSarkar.sub-language)
![Rating](https://img.shields.io/visual-studio-marketplace/r/SubhadipSarkar.sub-language)
```

### Share on Social Media

**Twitter/X**:
```
🎉 SUB Language is now on VS Code!

Install the official extension for:
✨ Syntax highlighting
📝 Code snippets
⚡ One-click compilation

Search "SUB Language" in VS Code Extensions

#VSCode #Programming #SUBLang
```

**Reddit** (r/vscode, r/programming):
```
Title: SUB Language Extension for VS Code Released!

I've published an extension for SUB, a new cross-platform 
programming language. Features syntax highlighting, snippets, 
and compilation support.

Marketplace: [link]
Feedback welcome!
```

### Update Main SUB Repository

Add to `sub-lang/README.md`:
```markdown
## VS Code Extension

Install SUB language support in VS Code:

[![Install](https://img.shields.io/visual-studio-marketplace/v/SubhadipSarkar.sub-language)](https://marketplace.visualstudio.com/items?itemName=SubhadipSarkar.sub-language)

1. Open VS Code
2. Search "SUB Language" in Extensions
3. Click Install
```

---

## 🐛 Troubleshooting

### Extension Not Publishing

**Check these**:
1. `VSCE_TOKEN` secret is set correctly
2. Token has `Marketplace: Manage` scope
3. Publisher name is `SubhadipSarkar` (case-sensitive)
4. Tag follows `v*.*.*` format (e.g., `v1.0.0`)
5. No TypeScript compilation errors

**View logs**:
- https://github.com/subhobhai943/vscode-sub-language/actions

### Token Expired

1. Create new PAT (Step 1 above)
2. Update GitHub secret:
   - https://github.com/subhobhai943/vscode-sub-language/settings/secrets/actions
   - Edit `VSCE_TOKEN`
   - Paste new token

### Compilation Errors

```bash
# Check TypeScript errors
npm run compile

# If errors, fix them in src/extension.ts
# Then commit and push again
```

---

## 🎯 Next Steps

### Enhance Extension (v1.1+)

1. **Add IntelliSense**:
   - Auto-completion for functions
   - Hover information
   - Go to definition

2. **Add Debugger Support**:
   - Breakpoints
   - Variable inspection
   - Step through code

3. **Add Error Checking**:
   - Real-time syntax errors
   - Type checking
   - Linting

4. **Add Formatter**:
   - Format document
   - Format on save

5. **Add Tasks**:
   - Build tasks
   - Run tasks
   - Custom tasks

### Bundle Compiler (Advanced)

Include SUB compiler in extension:
```json
"activationEvents": [
  "onLanguage:sub"
],
"extensionDependencies": [],
"bundledCompiler": true
```

Auto-download compiler on first use.

---

## ✅ Checklist

Before first publish:

- [ ] Got PAT from Azure DevOps
- [ ] Added `VSCE_TOKEN` to GitHub secrets
- [ ] Reviewed `package.json` (name, version, publisher)
- [ ] Tested locally with `F5`
- [ ] Updated `README.md` with examples
- [ ] Created release tag `v1.0.0`
- [ ] Pushed tag to GitHub
- [ ] Checked GitHub Actions workflow
- [ ] Verified extension on Marketplace
- [ ] Installed in VS Code and tested
- [ ] Shared on social media

---

## 📞 Support

- **Extension Issues**: https://github.com/subhobhai943/vscode-sub-language/issues
- **SUB Language**: https://github.com/subhobhai943/sub-lang
- **VS Code API**: https://code.visualstudio.com/api

---

**You're all set! 🎉 Happy publishing!**

*Users will soon be able to install SUB Language in VS Code with just one click!*
