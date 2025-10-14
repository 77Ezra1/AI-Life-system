# Git 推送脚本使用指南

本项目提供了多个 Git 推送脚本，帮助你更高效地管理代码提交和推送。

## 📋 脚本概览

| 脚本名称 | 用途 | 推荐程度 |
|---------|------|---------|
| `setup-ssh-keychain.sh` | 配置 SSH 密钥自动认证 | ⭐⭐⭐⭐⭐ 必须首次运行 |
| `quick-push.sh` | 快速推送（日常使用） | ⭐⭐⭐⭐⭐ 最常用 |
| `push-with-auth.sh` | 智能推送（功能全面） | ⭐⭐⭐⭐ 复杂场景 |

---

## 🔧 首次配置（必须）

### setup-ssh-keychain.sh

**用途**: 配置 macOS Keychain 来记住 SSH 密钥密码，以后所有 Git 操作都不再需要输入密码。

**使用方法**:
```bash
./setup-ssh-keychain.sh
```

**配置过程**:
1. 脚本会检查或创建 `~/.ssh/config` 文件
2. 添加 macOS Keychain 配置
3. 要求输入 SSH 密钥密码（只需输入一次）
4. 密码保存到系统钥匙串中

**配置后的效果**:
- ✅ 以后所有 `git push`、`git pull`、`git fetch` 操作都不需要密码
- ✅ 系统重启后仍然有效
- ✅ 安全：密码加密存储在 macOS 系统钥匙串中

**验证配置**:
```bash
# 测试 GitHub SSH 连接
ssh -T git@github.com

# 应该显示：
# Hi [你的用户名]! You've successfully authenticated...
```

---

## ⚡ 日常使用

### 1. quick-push.sh（推荐）

**用途**: 一键完成 `git add` + `git commit` + `git push`，适合日常快速提交。

**使用方法**:
```bash
# 使用自定义提交信息
./quick-push.sh "修复了登录页面的 bug"

# 使用默认提交信息（带时间戳）
./quick-push.sh
```

**功能**:
- 📋 显示当前未提交的更改
- ➕ 自动添加所有更改到暂存区（`git add -A`）
- 💾 提交更改
- 🚀 推送到 GitHub
- ✅ 全程无需输入密码

**输出示例**:
```
📦 Git 快速推送
================================

📋 当前状态:
M  src/App.jsx
A  src/components/NewFeature.jsx

➕ 添加更改...
💾 提交更改: 修复了登录页面的 bug
🚀 推送到 GitHub...

✅ 推送完成！
```

---

### 2. push-with-auth.sh（高级）

**用途**: 智能推送脚本，提供更多交互和控制选项。

**使用方法**:
```bash
./push-with-auth.sh
```

**功能**:
- 🔍 检查 Git 仓库状态
- 🔐 自动设置 SSH Agent（会话期间缓存密钥）
- 📝 交互式选择是否提交未暂存的更改
- ✏️ 可自定义提交信息或使用默认信息
- 📊 显示推送摘要和新提交列表
- 🎨 彩色输出，清晰易读

**交互流程**:
```bash
$ ./push-with-auth.sh

=========================================
   Git 智能推送脚本 v1.0
=========================================

[SUCCESS] Git 仓库检查通过
[INFO] 检查 SSH Agent 状态...
[SUCCESS] SSH 密钥已在 agent 中

[WARNING] 检测到未提交的更改：
M  src/App.jsx
?? src/components/NewFeature.jsx

是否要先提交这些更改？(y/n) y

输入提交信息 (回车使用默认信息): 添加新功能组件

[INFO] 添加所有更改到暂存区...
[INFO] 提交更改...
[SUCCESS] 提交完成

[INFO] 当前分支: main
[INFO] 推送到远程仓库...
[SUCCESS] 推送成功！

[INFO] 推送摘要：
6daade7 添加新功能组件

✨ 所有操作完成！
```

---

## 🎯 使用场景

### 场景1: 快速修改并推送
```bash
# 修改了几个文件后
./quick-push.sh "优化了性能"
```

### 场景2: 大量修改需要确认
```bash
# 修改了很多文件，想先看看再决定是否提交
./push-with-auth.sh
# 脚本会显示所有更改，你可以选择是否提交
```

### 场景3: 只推送已有的提交
```bash
# 已经手动 commit 了，只需要推送
./push-with-auth.sh
# 脚本检测到没有未提交的更改，直接推送
```

### 场景4: 查看推送了什么内容
```bash
# 使用 push-with-auth.sh 会显示推送摘要
./push-with-auth.sh
# 输出会包含新推送的 commit 列表
```

---

## 🔒 安全说明

### SSH 密钥密码的存储方式

1. **macOS Keychain 存储**:
   - 密码加密存储在系统钥匙串中
   - 只有你的用户账户可以访问
   - 使用系统级别的安全机制

2. **不在脚本中存储密码**:
   - ❌ 脚本中不包含任何密码
   - ❌ 不使用明文存储
   - ✅ 依赖系统安全机制

3. **如何移除密钥**:
```bash
# 从 SSH Agent 中移除密钥
ssh-add -d ~/.ssh/id_ed25519

# 从 macOS Keychain 中移除（需要重新运行 setup-ssh-keychain.sh）
```

---

## 🛠️ 故障排除

### 问题1: 推送时仍然要求输入密码

**原因**: 
- SSH Keychain 配置未生效
- SSH 密钥未添加到 Keychain

**解决方案**:
```bash
# 重新运行配置脚本
./setup-ssh-keychain.sh

# 验证密钥是否已添加
ssh-add -l
# 应该显示你的 SSH 密钥信息
```

---

### 问题2: SSH 连接失败

**原因**: 
- SSH 密钥文件不存在
- SSH 密钥未添加到 GitHub

**解决方案**:
```bash
# 1. 检查 SSH 密钥是否存在
ls -la ~/.ssh/id_ed25519*

# 2. 如果不存在，生成新密钥
ssh-keygen -t ed25519 -C "your_email@example.com"

# 3. 复制公钥并添加到 GitHub
cat ~/.ssh/id_ed25519.pub
# 然后到 GitHub Settings > SSH and GPG keys > New SSH key 添加

# 4. 测试连接
ssh -T git@github.com
```

---

### 问题3: `quick-push.sh` 推送失败

**原因**: 
- 远程仓库有新的提交
- 本地分支落后于远程分支

**解决方案**:
```bash
# 先拉取最新代码
git pull origin main

# 然后再推送
./quick-push.sh "你的提交信息"
```

---

### 问题4: 脚本没有执行权限

**症状**:
```bash
$ ./quick-push.sh
zsh: permission denied: ./quick-push.sh
```

**解决方案**:
```bash
# 添加执行权限
chmod +x quick-push.sh
chmod +x push-with-auth.sh
chmod +x setup-ssh-keychain.sh

# 或者一次性添加
chmod +x *.sh
```

---

## 📚 相关命令参考

### 查看 Git 状态
```bash
git status              # 查看工作区状态
git status -s           # 简洁模式
git log --oneline -10   # 查看最近 10 个提交
```

### 手动操作（不使用脚本）
```bash
# 传统方式
git add .
git commit -m "提交信息"
git push origin main

# 现在只需要
./quick-push.sh "提交信息"
```

### SSH 相关命令
```bash
ssh-add -l                    # 查看已添加的 SSH 密钥
ssh-add -D                    # 删除所有已添加的密钥
ssh-add ~/.ssh/id_ed25519     # 手动添加密钥
ssh -T git@github.com         # 测试 GitHub 连接
```

---

## 💡 最佳实践

1. **首次使用必须运行配置脚本**:
   ```bash
   ./setup-ssh-keychain.sh
   ```

2. **日常提交使用快速推送**:
   ```bash
   ./quick-push.sh "清晰的提交信息"
   ```

3. **提交信息要清晰**:
   ```bash
   # ✅ 好的提交信息
   ./quick-push.sh "修复了用户登录时的验证码错误"
   ./quick-push.sh "添加了深色模式支持"
   
   # ❌ 不好的提交信息
   ./quick-push.sh "fix"
   ./quick-push.sh "update"
   ```

4. **大改动前先拉取**:
   ```bash
   git pull origin main
   # 然后进行修改
   ./quick-push.sh "重构了认证系统"
   ```

5. **定期推送，避免积累**:
   - 完成一个小功能就推送一次
   - 不要等到积累大量修改才推送

---

## 🎓 进阶技巧

### 创建命令别名

在 `~/.zshrc` 或 `~/.bashrc` 中添加：

```bash
# Git 快速推送别名
alias gp='./quick-push.sh'
alias gpa='./push-with-auth.sh'

# 使用方法
gp "提交信息"
gpa
```

### 结合项目启动脚本

```bash
# 先启动项目
./start.sh

# 开发完成后快速推送
./quick-push.sh "完成了新功能开发"
```

### 批量推送多个仓库

如果你有多个项目需要推送：

```bash
# 创建批量推送脚本
cat > push-all.sh << 'EOF'
#!/bin/bash
cd ~/project1 && ./quick-push.sh "Update project1"
cd ~/project2 && ./quick-push.sh "Update project2"
cd ~/project3 && ./quick-push.sh "Update project3"
EOF

chmod +x push-all.sh
```

---

## 📞 获取帮助

如果遇到问题：

1. 查看脚本输出的错误信息
2. 参考本文档的故障排除部分
3. 检查 Git 和 SSH 配置：
   ```bash
   git config --list
   cat ~/.ssh/config
   ```

---

## 📝 更新日志

### v1.0 (2025-01-14)
- ✅ 创建 `setup-ssh-keychain.sh` - SSH 自动认证配置
- ✅ 创建 `quick-push.sh` - 快速推送脚本
- ✅ 创建 `push-with-auth.sh` - 智能推送脚本
- ✅ 支持 macOS Keychain 密码存储
- ✅ 彩色输出和友好的用户界面

---

## 🤝 贡献

欢迎提出改进建议或报告问题！

---

**Happy Coding! 🚀**
