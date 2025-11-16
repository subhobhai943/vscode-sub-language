# ⚡ Quick Start - Deploy SUB Extension NOW!

## 🚨 DO THIS RIGHT NOW (5 minutes)

### Step 1: Get Your Token (2 minutes)

1. **Open**: https://dev.azure.com/
2. **Click**: Your profile icon (top right) → **Personal access tokens**
3. **Click**: **+ New Token**
4. **Fill**:
   - Name: `VS Code Marketplace`
   - Expiration: `1 year`
   - Scopes: **Custom** → **Marketplace** → ✅ **Manage**
5. **Click**: **Create**
6. **⚠️ COPY THE TOKEN** (save it somewhere safe!)

### Step 2: Add Token to GitHub (1 minute)

1. **Open**: https://github.com/subhobhai943/vscode-sub-language/settings/secrets/actions
2. **Click**: **New repository secret**
3. **Type**:
   - Name: `VSCE_TOKEN`
   - Secret: Paste your token from Step 1
4. **Click**: **Add secret**

### Step 3: Publish Extension (2 minutes)

Run these commands in your terminal:

```bash
# Clone the extension repo
git clone https://github.com/subhobhai943/vscode-sub-language.git
cd vscode-sub-language

# Create version tag
git tag v1.0.0

# Push the tag (this triggers auto-publish!)
git push origin v1.0.0
```

**DONE!** 🎉 Your extension is publishing!

---

## 👀 Watch It Deploy

1. **Go to**: https://github.com/subhobhai943/vscode-sub-language/actions
2. You'll see "Publish VS Code Extension" workflow running
3. Wait 2-3 minutes for completion
4. Green checkmark = SUCCESS! ✅

---

## ✅ Verify It's Live

### Option 1: Check Marketplace
1. Go to: https://marketplace.visualstudio.com/manage/publishers/subhadipsarkar
2. You should see "sub-language" listed

### Option 2: Install in VS Code
1. Open VS Code
2. Press `Ctrl+Shift+X`
3. Search: "SUB Language"
4. You should see your extension!
5. Click **Install**

---

## 🎓 Test Your Extension

1. Create new file: `test.sb`
2. Type:
   ```sub
   #var name = "World"
   #print("Hello, " + name)
   ```
3. See beautiful syntax highlighting! 🎨
4. Type `func` and press `Tab` - snippet expands!
5. Try `Ctrl+/` to toggle comments

---

## 🔥 Common Issues

### "Token is invalid"
- Token needs **Marketplace: Manage** scope
- Create new token with correct scope
- Update GitHub secret

### "Publisher 'SubhadipSarkar' not found"
- Check capitalization: `SubhadipSarkar`
- Verify at: https://marketplace.visualstudio.com/manage/publishers/subhadipsarkar

### "Workflow not triggering"
- Tag must start with `v`: `v1.0.0` ✅, `1.0.0` ❌
- Push tag: `git push origin v1.0.0`

---

## 🚀 What Happens After Publishing?

### Immediately (0-5 minutes)
- Extension appears on Marketplace
- Users can search and install
- Shows on your publisher page

### First Hour
- Marketplace indexes your extension
- Search results populate
- Install count starts tracking

### First Day
- Users discover your extension
- Reviews and ratings appear
- Download statistics available

---

## 🎯 Success Checklist

- [ ] PAT created with Marketplace:Manage scope
- [ ] `VSCE_TOKEN` added to GitHub secrets
- [ ] Tag `v1.0.0` created and pushed
- [ ] GitHub Actions workflow succeeded
- [ ] Extension visible on Marketplace
- [ ] Installed in VS Code successfully
- [ ] Syntax highlighting works
- [ ] Snippets work
- [ ] Shared on social media

---

## 📞 Need Help?

- **Extension Issues**: https://github.com/subhobhai943/vscode-sub-language/issues
- **VS Code Docs**: https://code.visualstudio.com/api
- **Publishing Guide**: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

---

## 🎉 You're Ready!

**Just complete Steps 1-3 above and your SUB Language extension will be LIVE on VS Code Marketplace!**

Users worldwide can install it with one click! 🌍

---

**Time to complete**: ~5 minutes  
**Difficulty**: Easy  
**Result**: Professional VS Code extension published! 🚀
