# 免费且无需API密钥的MCP服务列表

根据awesome-mcp-servers仓库的分析,以下是可以集成到你项目中的免费MCP服务:

## 🔎 搜索和数据提取类

### 1. **open-webSearch** ⭐ 强烈推荐
- **仓库**: `Aas-ee/open-webSearch`
- **语言**: Python + TypeScript
- **特点**: 
  - 完全免费,无需API密钥
  - 支持多个搜索引擎: Bing, Baidu, DuckDuckGo, Brave, Exa, CSDN
  - 可以替代你当前的DuckDuckGo搜索
- **部署**: 云端或本地

### 2. **web-search**
- **仓库**: `pskill9/web-search`
- **语言**: TypeScript
- **特点**:
  - 使用Google搜索结果
  - 完全免费,无需API密钥
- **部署**: 本地

### 3. **duckduckgo-mcp-server**
- **仓库**: `zhsama/duckduckgo-mcp-server`
- **语言**: TypeScript
- **特点**: 纯DuckDuckGo搜索
- **部署**: 本地/云端

### 4. **searxng**
- **仓库**: `SecretiveShell/MCP-searxng`
- **语言**: Python
- **特点**: 连接到SearXNG实例(隐私保护的元搜索引擎)
- **部署**: 本地

## 📹 YouTube相关

### 5. **youtube-transcript**
- **仓库**: `kimtaeyoon83/mcp-server-youtube-transcript`
- **语言**: TypeScript
- **特点**: 获取YouTube字幕和转录文本
- **部署**: 云端

## 🌐 网页数据提取

### 6. **ashra-mcp** ⭐ 推荐
- **仓库**: `getrupt/ashra-mcp`
- **语言**: TypeScript
- **特点**: 从任何网站提取结构化数据,返回JSON
- **部署**: 本地

### 7. **browser-kit**
- **仓库**: `imprvhub/mcp-browser-kit`
- **语言**: TypeScript
- **特点**: 与本地浏览器交互
- **部署**: 本地

### 8. **puppeteer**
- **仓库**: `modelcontextprotocol/server-puppeteer`
- **语言**: TypeScript
- **特点**: 官方浏览器自动化工具
- **部署**: 本地

## 🗺️ 位置和天气服务

### 9. **open-meteo weather** ⭐ 强烈推荐
- **仓库**: `isdaniel/mcp_weather_server`
- **语言**: Python
- **特点**: 
  - 使用Open-Meteo API(完全免费)
  - 高精度天气数据
  - 无需API密钥
- **部署**: 云端

### 10. **timeserver**
- **仓库**: `SecretiveShell/MCP-timeserver`
- **语言**: Python
- **特点**: 获取任何时区的时间
- **部署**: 本地

### 11. **OpenStreetMap**
- **仓库**: `jagan-shanmugam/open-streetmap-mcp`
- **语言**: Python
- **特点**: 基于位置的服务和地理空间数据
- **部署**: 本地

## 💰 金融和加密货币

### 12. **coincap** ⭐ 推荐
- **仓库**: `QuantGeekDev/coincap-mcp`
- **语言**: TypeScript
- **特点**: 
  - 实时加密货币市场数据
  - 使用CoinCap公共API
  - 无需API密钥
- **部署**: 云端

### 13. **yfinance**
- **仓库**: `narumiruna/yfinance-mcp`
- **语言**: Python
- **特点**: 从Yahoo Finance获取股票数据
- **部署**: 云端

### 14. **mlb-api**
- **仓库**: `guillochon/mlb-api-mcp`
- **语言**: Python
- **特点**: 免费的MLB API代理
- **部署**: 本地

## 🌐 社交媒体

### 15. **reddit-buddy** ⭐ 推荐
- **仓库**: `karanb192/reddit-buddy-mcp`
- **语言**: TypeScript
- **特点**: 
  - 浏览Reddit帖子
  - 搜索内容
  - 分析用户活动
  - 无需API密钥
- **部署**: 本地

### 16. **bluesky-social**
- **仓库**: `gwbischof/bluesky-social-mcp`
- **语言**: Python
- **特点**: 与Bluesky社交平台交互
- **部署**: 本地

## 🧠 知识和内存

### 17. **memory** (官方)
- **仓库**: `modelcontextprotocol/server-memory`
- **语言**: TypeScript
- **特点**: 基于知识图谱的持久化内存系统
- **部署**: 本地

### 18. **openzim**
- **仓库**: `cameronrye/openzim-mcp`
- **语言**: Python
- **特点**: 离线访问Wikipedia等知识库(ZIM格式)
- **部署**: 本地

## 📂 文件系统

### 19. **filesystem** (官方)
- **仓库**: `modelcontextprotocol/server-filesystem`
- **语言**: TypeScript
- **特点**: 文件系统操作
- **部署**: 本地

## 🎮 游戏和娱乐

### 20. **chess**
- **仓库**: `jiayao/mcp-chess`
- **语言**: Python
- **特点**: 与LLM下国际象棋
- **部署**: 本地

### 21. **tic-tac-toe**
- **仓库**: `tomholford/mcp-tic-tac-toe`
- **语言**: Go
- **特点**: 井字棋游戏
- **部署**: 本地

## 📊 数据科学

### 22. **sqlite** (官方)
- **仓库**: `modelcontextprotocol/server-sqlite`
- **语言**: TypeScript
- **特点**: SQLite数据库操作
- **部署**: 本地

## 🛠️ 开发工具

### 23. **git** (官方)
- **仓库**: `modelcontextprotocol/server-git`
- **语言**: TypeScript
- **特点**: Git仓库操作
- **部署**: 本地

### 24. **github** (官方)
- **仓库**: `modelcontextprotocol/server-github`
- **语言**: TypeScript
- **特点**: GitHub API集成
- **部署**: 云端(需要GitHub token,但token免费)

## 📰 新闻和内容

### 25. **hackernews**
- **仓库**: `imprvhub/mcp-claude-hackernews`
- **语言**: TypeScript
- **特点**: Hacker News集成
- **部署**: 本地/云端

### 26. **rss-aggregator**
- **仓库**: `imprvhub/mcp-rss-aggregator`
- **语言**: TypeScript
- **特点**: RSS订阅聚合
- **部署**: 云端/本地

## 🎨 多媒体

### 27. **stocky**
- **仓库**: `joelio/stocky`
- **语言**: Python
- **特点**: 
  - 搜索和下载免费图片
  - 支持Pexels和Unsplash
  - 无需API密钥
- **部署**: 云端/本地

## 🔍 域名和网络

### 28. **domain-availability**
- **仓库**: `imprvhub/mcp-domain-availability`
- **语言**: Python
- **特点**: 检查域名可用性(50+ TLD)
- **部署**: 云端

### 29. **ipinfo**
- **仓库**: `briandconnelly/mcp-server-ipinfo`
- **语言**: Python
- **特点**: IP地址地理位置信息
- **部署**: 云端

## 推荐优先集成的服务

基于你的项目需求,建议优先集成以下服务:

### 高优先级 ⭐⭐⭐

1. **open-webSearch** - 多引擎搜索,可以大幅提升搜索质量
2. **open-meteo weather** - 已经在你的项目中,保持使用
3. **ashra-mcp** - 网页数据提取,增强信息获取能力
4. **coincap** - 加密货币数据,补充金融信息
5. **reddit-buddy** - 社交媒体数据,获取用户观点

### 中优先级 ⭐⭐

6. **youtube-transcript** - 视频内容分析
7. **memory** (官方) - 持久化记忆系统
8. **hackernews** - 科技新闻和讨论
9. **yfinance** - 股票市场数据
10. **rss-aggregator** - 新闻聚合

### 低优先级 ⭐

11. **openzim** - 离线知识库(如果需要离线功能)
12. **stocky** - 免费图片搜索
13. **domain-availability** - 域名查询

## 集成建议

1. **替换现有搜索**: 用`open-webSearch`替换当前的DuckDuckGo搜索,获得更好的搜索结果
2. **添加数据提取**: 集成`ashra-mcp`用于从网页提取结构化数据
3. **扩展金融数据**: 添加`coincap`和`yfinance`提供更全面的市场数据
4. **社交媒体洞察**: 集成`reddit-buddy`获取用户讨论和观点
5. **内容分析**: 添加`youtube-transcript`用于视频内容分析

## 技术实现注意事项

### Python服务
- 需要在服务器端运行Python进程
- 可以通过子进程或HTTP API调用

### TypeScript服务
- 可以直接在Node.js环境中运行
- 与你的项目技术栈一致

### 部署方式
- **本地服务**: 在用户机器上运行,隐私性好
- **云端服务**: 在服务器上运行,性能稳定

## 下一步

1. 选择要集成的服务
2. 克隆对应的GitHub仓库
3. 按照各服务的README进行配置
4. 在你的`useMcpManager.js`中添加新的工具定义
5. 实现对应的工具调用逻辑

