# 深度思考模式模型完整指南

> **更新时间**: 2025年10月17日
> **适用项目**: Personal Chatbox
> **文档版本**: v1.0

本文档详细列出项目中支持的所有模型服务商及其旗下支持深度思考/推理模式的模型。

---

## 📋 目录

- [支持深度思考的服务商概览](#支持深度思考的服务商概览)
- [详细模型列表](#详细模型列表)
  - [1. OpenAI](#1-openai)
  - [2. DeepSeek](#2-deepseek)
  - [3. Anthropic (Claude)](#3-anthropic-claude)
  - [4. Google Gemini](#4-google-gemini)
  - [5. Mistral AI](#5-mistral-ai)
  - [6. Moonshot AI (Kimi)](#6-moonshot-ai-kimi)
  - [7. Groq](#7-groq)
  - [8. Together AI](#8-together-ai)
  - [9. Volcano Engine (火山引擎/豆包)](#9-volcano-engine-火山引擎豆包)
- [深度思考模式类型说明](#深度思考模式类型说明)
- [集成建议](#集成建议)
- [性能对比](#性能对比)

---

## 支持深度思考的服务商概览

| 服务商 | 项目已集成 | 深度思考模型数量 | 推荐等级 | 备注 |
|--------|-----------|----------------|----------|------|
| **OpenAI** | ✅ | 3+ | ⭐⭐⭐⭐⭐ | o1/o3系列，业界标杆 |
| **DeepSeek** | ✅ | 2+ | ⭐⭐⭐⭐⭐ | R1系列，开源领先 |
| **Anthropic** | ✅ | 4+ | ⭐⭐⭐⭐⭐ | Extended Thinking |
| **Google** | ✅ | 3+ | ⭐⭐⭐⭐⭐ | Deep Think模式 |
| **Mistral** | ✅ | 2 | ⭐⭐⭐⭐ | Magistral系列 |
| **Moonshot** | ✅ | 3+ | ⭐⭐⭐⭐ | K系列，长上下文 |
| **Groq** | ✅ | 4+ | ⭐⭐⭐⭐ | 超快推理速度 |
| **Together AI** | ✅ | 3+ | ⭐⭐⭐ | 开源模型托管 |
| **Volcano Engine** | ✅ | 2+ | ⭐⭐⭐⭐ | 豆包1.5系列 |

---

## 详细模型列表

### 1. OpenAI

#### 🏆 推荐模型

| 模型名称 | 发布时间 | 思考模式 | 上下文窗口 | 特点 |
|---------|---------|---------|-----------|------|
| **o3** | 2025年4月 | Always-On | - | 最强推理模型，AIME 96.7%准确率 |
| **o3-mini** | 2025年1月 | Always-On | - | 轻量版，面向免费用户 |
| **o4-mini** | 2025年4月 | Always-On | - | o3-mini升级版 |
| **o1** | 2024年9月 | Always-On | 128K | 首个o系列模型 |
| **o1-Pro** | 2024年12月 | Always-On | 128K | o1专业版 |

#### 🎯 核心能力

- **思考机制**: 私有思维链 (Private Chain of Thought)
- **训练方式**: 强化学习 (Reinforcement Learning)
- **擅长领域**:
  - 🧮 数学 (AIME达到96.7%准确率)
  - 💻 编程 (复杂算法设计)
  - 🔬 科学推理
- **Deep Research**: o3集成深度研究功能，可进行网络级搜索和分析

#### 💰 成本

- o1/o3系列相比GPT-4o成本更高
- o3-mini/o4-mini为免费用户开放

#### 🔧 API配置

```javascript
{
  provider: 'openai',
  model: 'o3',  // 或 o1, o3-mini, o4-mini
  apiKey: 'YOUR_OPENAI_API_KEY',
  thinkingMode: 'always-on',  // 强制开启
  temperature: 1.0,  // o系列模型推荐使用1.0
  maxTokens: -1  // 无限制
}
```

---

### 2. DeepSeek

#### 🏆 推荐模型

| 模型名称 | 发布时间 | 参数量 | 思考模式 | 上下文窗口 | 特点 |
|---------|---------|--------|---------|-----------|------|
| **DeepSeek-R1** | 2025年1月 | 671B (37B激活) | Hybrid | 128K | 性能对标OpenAI o1 |
| **DeepSeek-R1-0528** | 2025年5月 | - | Hybrid | 128K | 推理能力大幅提升 |
| **DeepSeek-R1-Zero** | 2025年1月 | - | Always-On | 128K | 纯RL训练版本 |
| **DeepSeek-Reasoner** | 2025年 | - | Always-On | 128K | 推理专用版本 |

#### 🎯 核心能力

- **创新点**: 首个验证纯RL训练即可实现推理能力的开源模型
- **思考机制**:
  - 长链思维 (Long Chain of Thought)
  - 自我验证 (Self-verification)
  - 反思机制 (Reflection)
- **擅长领域**:
  - 💻 编程 (与o1相当)
  - 🧮 数学推理
  - 🔍 逻辑分析
- **成本优势**: 比OpenAI o1便宜约96%

#### 🌟 蒸馏版本

DeepSeek提供6个蒸馏版本 (基于Qwen和Llama):
- 1.5B、7B、8B、14B、32B、70B

#### 💰 成本

- DeepSeek-R1-0528更新后性能接近o3和Gemini 2.5 Pro
- 成本极低，约为OpenAI的4%

#### 🔧 API配置

```javascript
{
  provider: 'deepseek',
  model: 'deepseek-reasoner',  // 或 deepseek-chat (非思考模式)
  apiKey: 'YOUR_DEEPSEEK_API_KEY',
  thinkingMode: 'optional',  // 可选模式
  deepThinking: true,  // 启用推理模式
  temperature: 0.7,
  maxTokens: 8192
}
```

#### 📦 开源许可

- **许可证**: MIT License
- **商用**: ✅ 完全支持
- **修改/蒸馏**: ✅ 允许

---

### 3. Anthropic (Claude)

#### 🏆 推荐模型

| 模型名称 | 发布时间 | 思考模式 | 思考预算 | 特点 |
|---------|---------|---------|---------|------|
| **Claude 4 Opus** | 2025年5月 | Extended Thinking | 128K tokens | 最强推理能力 |
| **Claude 4 Sonnet** | 2025年5月 | Extended Thinking | 128K tokens | 平衡性能与成本 |
| **Claude 3.7 Sonnet** | 2025年2月 | Extended Thinking | 128K tokens | 首个混合推理模型 |
| **Claude Sonnet 4.5** | 2025年10月 | Extended Thinking | 128K tokens | 最强编程模型 |

#### 🎯 核心能力

- **思考机制**: Extended Thinking (扩展思考)
- **独特功能**:
  - 🎛️ **可控思考预算**: 最高128K tokens
  - 🔧 **工具调用**: Claude 4支持思考过程中使用工具
  - 🔄 **交错思考**: 在工具调用之间进行推理
  - 👁️ **思考过程可见**: 向用户展示完整思考过程
- **擅长领域**:
  - 💻 编程 (Sonnet 4.5是世界最强编程模型)
  - 🤖 复杂Agent构建
  - 🖥️ 计算机使用 (Computer Use)
  - 🧮 数学问题 (准确率随思考tokens对数增长)

#### 💡 工作原理

- 不是切换到不同模型，而是给同一模型更多思考时间
- API返回思考过程摘要
- 支持在思考和工具使用之间交替

#### 💰 成本

- 思考tokens按标准输入token计费
- 可通过控制thinking budget来管理成本

#### 🔧 API配置

```javascript
{
  provider: 'anthropic',
  model: 'claude-4-opus',  // 或其他Claude 4/3.7模型
  apiKey: 'YOUR_ANTHROPIC_API_KEY',
  thinkingMode: 'optional',  // 可选模式
  deepThinking: true,  // 启用Extended Thinking
  temperature: 0.7,
  maxTokens: 4096,
  // Extended Thinking 配置
  thinking: {
    type: 'enabled',
    budget_tokens: 10000  // 思考预算 (最高128K)
  }
}
```

---

### 4. Google Gemini

#### 🏆 推荐模型

| 模型名称 | 发布时间 | 思考模式 | 上下文窗口 | 特点 |
|---------|---------|---------|-----------|------|
| **Gemini 2.5 Pro** | 2025年 | Deep Think | 1M tokens | 旗舰推理模型 |
| **Gemini 2.5 Flash** | 2025年 | Thinking Mode | 1M tokens | 快速推理 |
| **Gemini 2.0 Flash Thinking** | 2025年 | Thinking Mode | 1M tokens | 实验性推理模型 |

#### 🎯 核心能力

- **思考机制**:
  - 🌟 **Deep Think**: 增强推理模式，使用并行思考技术
  - 🔄 **并行思考**: 同时生成和考虑多个假设
  - 🔧 **动态调整**: 可修改或组合不同想法
- **Deep Research功能**:
  - 使用2.5 Pro模型进行深度研究
  - 网络浏览和数据分析优化
  - 生成综合研究报告
- **擅长领域**:
  - 🔬 科学与数学发现
  - 💻 算法开发
  - 📊 复杂编程问题
  - 📖 权衡分析

#### 💡 工作原理

- 并行生成多个想法并同时考虑
- 在得出最佳答案前修改或组合想法
- Gemini Advanced订阅用户可免费使用Deep Research

#### 💰 成本

- Gemini AI Ultra订阅用户可优先访问Deep Think
- Deep Research对所有用户免费开放（有限次数）

#### 🔧 API配置

```javascript
{
  provider: 'google',
  model: 'gemini-2.5-pro',  // 或 gemini-2.5-flash
  apiKey: 'YOUR_GOOGLE_API_KEY',
  thinkingMode: 'adaptive',  // 自适应模式
  deepThinking: true,
  temperature: 0.7,
  maxTokens: 8192,
  // Thinking 配置
  thinkingConfig: {
    thinkingBudget: 1024,
    includeThoughts: true
  }
}
```

---

### 5. Mistral AI

#### 🏆 推荐模型

| 模型名称 | 发布时间 | 参数量 | 思考模式 | 开源 | 特点 |
|---------|---------|--------|---------|------|------|
| **Magistral Medium** | 2025年6月 | - | Always-On | ❌ | 推理能力最强 |
| **Magistral Small** | 2025年6月 | 24B | Always-On | ✅ Apache 2.0 | 开源推理模型 |
| **Magistral Small 1.2** | 2025年 | 24B | Always-On | ✅ Apache 2.0 | 支持多模态 |

#### 🎯 核心能力

- **特色优势**:
  - 🌍 **多语言推理**: 擅长欧洲语言
    - 英语、法语、西班牙语、德语、意大利语
    - 阿拉伯语、俄语、简体中文
  - 🔍 **透明思考**: 可追溯的思考过程
  - 🖼️ **多模态**: 1.2版本支持图像和文本推理
- **性能**:
  - 速度: 1000 tokens/秒 (专有版本)
  - 超越竞品性能
- **擅长领域**:
  - ⚖️ 法律研究
  - 💰 金融预测
  - 💻 软件开发
  - ✍️ 创意写作

#### 💰 成本

- Small版本: 开源免费
- Medium版本: API付费使用

#### 🔧 API配置

```javascript
{
  provider: 'mistral',
  model: 'magistral-medium',  // 或 magistral-small
  apiKey: 'YOUR_MISTRAL_API_KEY',
  thinkingMode: 'always-on',  // 强制开启
  temperature: 0.7,
  maxTokens: 4096
}
```

#### 📦 开源许可

- **Magistral Small**: Apache 2.0
- **可下载**: Hugging Face

---

### 6. Moonshot AI (Kimi)

#### 🏆 推荐模型

| 模型名称 | 发布时间 | 参数量 | 思考模式 | 开源 | 特点 |
|---------|---------|--------|---------|------|------|
| **Kimi K2** | 2025年7月 | 1T (32B激活) | Non-Thinking | ✅ | MoE架构，超长上下文 |
| **Kimi-VL-Thinking** | 2025年6月 | 2.8B激活 | Always-On | ✅ | 视觉-语言推理 |
| **Kimi-Researcher** | 2025年6月 | - | Always-On | ❌ | 自主研究Agent |
| **Kimi K1.5** | 2025年1月 | - | Always-On | ❌ | 对标OpenAI o1 |

#### 🎯 核心能力

- **Kimi K2** (主力模型):
  - MoE架构: 1万亿总参数，32B激活参数
  - 最强非推理模型之一
  - 擅长: 前沿知识、数学、编程

- **Kimi-VL-Thinking** (视觉推理):
  - 长CoT监督微调 + 强化学习
  - 基准测试:
    - MMMU: 61.7
    - MathVision: 36.8
    - MathVista: 71.3
  - 仅2.8B激活参数

- **Kimi-Researcher** (研究Agent):
  - 端到端强化学习训练
  - 匹配Google Gemini Deep Research (26.9分)
  - 超越OpenAI版本
  - 自主复杂推理和搜索

#### 💡 特色

- 超长上下文: 支持百万级token
- 中文能力强
- 免费使用 (K2)

#### 💰 成本

- Kimi K2: 免费开源
- 在关键基准测试中超越GPT-4

#### 🔧 API配置

```javascript
{
  provider: 'moonshot',
  model: 'kimi-k1.5',  // 或其他Kimi推理模型
  apiKey: 'YOUR_MOONSHOT_API_KEY',
  thinkingMode: 'always-on',  // K1.5/VL-Thinking/Researcher
  temperature: 0.7,
  maxTokens: 8192
}
```

---

### 7. Groq

#### 🏆 推荐模型

| 模型名称 | 参数量 | 思考模式 | 特点 |
|---------|--------|---------|------|
| **Qwen 3 32B** | 32B | Dual-Mode | 双模式切换 |
| **QwQ-32B** | 32B | Always-On | 工具使用 + 推理 |
| **DeepSeek R1-Llama-70B** | 70B | Always-On | 蒸馏版推理模型 |
| **GPT-OSS-120B** | 120B | Controllable | OpenAI开源模型 |
| **GPT-OSS-20B** | 20B | Controllable | OpenAI开源模型 |

#### 🎯 核心能力

- **极速推理**: Groq推理速度业界领先
  - 推理链从分钟级缩短到秒级
  - 实时应用的关键优势
- **灵活控制**:
  - `reasoning_format` 参数控制推理格式
  - `reasoning_effort` 参数控制推理强度
- **Qwen 3 32B特色**:
  - 🔄 **双模式系统**:
    - Thinking Mode: 复杂逻辑、数学、编程
    - Non-Thinking Mode: 高效通用对话
  - 无缝模式切换

#### 💡 工作原理

- 低延迟推理引擎
- 支持多种开源推理模型
- 工具使用 + 环境反馈自适应

#### 💰 成本

- 低成本推理
- 支持多种开源模型

#### 🔧 API配置

```javascript
{
  provider: 'groq',
  model: 'qwen-3-32b',  // 或其他Groq支持的推理模型
  apiKey: 'YOUR_GROQ_API_KEY',
  thinkingMode: 'optional',  // Qwen 3支持双模式
  temperature: 0.7,
  maxTokens: 32768,
  // Groq特有参数
  reasoning_format: 'detailed',  // 推理格式控制
  reasoning_effort: 'medium'  // 推理强度 (low/medium/high)
}
```

---

### 8. Together AI

#### 🏆 推荐模型

| 模型名称 | 参数量 | 思考模式 | 上下文窗口 | 特点 |
|---------|--------|---------|-----------|------|
| **DeepSeek-R1** | 671B (37B激活) | Hybrid | 128K | 23K token思考 |
| **MoE Thinking Model** | 235B (22B激活) | Always-On | 256K | 开源SOTA推理 |
| **Hybrid MoE Reasoning** | 456B (40B激活) | Always-On | 1M | 40K思考预算 |

#### 🎯 核心能力

- **开源模型托管平台**:
  - 200+ 开源和专业化模型
  - DeepSeek-R1升级版
  - MoE架构推理模型
- **性能提升**:
  - DeepSeek-R1在Together AI上:
    - 更好的推理能力
    - 函数调用
    - 编程能力
    - AIME得分: 87.5%
- **应用场景**:
  - 编程Agent
  - 减少幻觉
  - 通过蒸馏改进非推理模型

#### 💡 特色

- Hybrid MoE模型支持1M token上下文
- Lightning Attention技术
- 高效推理和问题解决

#### 💰 成本

- Together AI 2025年2月获得3.05亿美元B轮融资
- 推理模型需求推动基础设施增长

#### 🔧 API配置

```javascript
{
  provider: 'together',
  model: 'deepseek-r1',  // 或其他Together托管的推理模型
  apiKey: 'YOUR_TOGETHER_API_KEY',
  thinkingMode: 'always-on',
  temperature: 0.7,
  maxTokens: 8192
}
```

---

### 9. Volcano Engine (火山引擎/豆包)

#### 🏆 推荐模型

| 模型名称 | 参数量 | 思考模式 | 上下文窗口 | 特点 |
|---------|--------|---------|-----------|------|
| **Doubao 1.5 Pro Thinking** | 200B (20B激活) | Always-On | 256K | MoE架构 |
| **Doubao 1.5 Pro 256K** | - | Optional | 256K | 长上下文 |
| **Doubao 1.5 Pro 32K** | - | Optional | 32K | 标准版本 |
| **Doubao Visual Reasoning** | - | Always-On | - | 视觉推理 |

#### 🎯 核心能力

- **性能表现**:
  - ✅ 超越 DeepSeek-R1 和 QwQ-32B
  - ✅ 对标 OpenAI o1 和 o3-mini-high
  - 🏆 ARC-AGI测试领先o1和o3-mini-high
- **擅长领域**:
  - 🧮 数学
  - 💻 编程
  - 🔬 科学推理
  - ✍️ 创意写作 (强泛化能力)
- **特色**:
  - MoE架构: 200B总参数，20B激活
  - 成本更低，效率更高
  - 中文能力强

#### 💡 工作原理

- Edge Large Model Gateway集成
- 支持视觉推理版本
- 多模态能力

#### 💰 成本

- **Doubao 1.5 Pro 32K**: ¥2/百万tokens
- **Doubao 1.5 Pro 256K**: ¥9/百万tokens
- **免费额度**: 500万tokens (Edge网关)

#### 🔧 API配置

```javascript
{
  provider: 'volcengine',
  model: 'doubao-1.5-thinking-pro',  // 或其他豆包模型
  apiKey: 'YOUR_VOLCENGINE_API_KEY',
  thinkingMode: 'optional',  // 可选模式
  deepThinking: true,  // 启用推理
  temperature: 0.7,
  maxTokens: 8192,
  // Volcano Engine特有参数
  thinking: {
    type: 'enabled'  // 或 'disabled'
  }
}
```

---

## 深度思考模式类型说明

项目支持4种思考模式（定义在 `src/lib/constants.js`）:

### 🔴 DISABLED (不支持)
```javascript
thinkingMode: 'disabled'
```
- 模型不支持深度思考功能
- 例如: GPT-4, Claude 3.5 Sonnet (非4.x)

### 🟡 OPTIONAL (可选)
```javascript
thinkingMode: 'optional'
```
- 用户可手动开启/关闭深度思考
- 例如: DeepSeek-Chat/Reasoner, Claude 3.7+, Gemini 2.5

### 🟢 ALWAYS_ON (强制开启)
```javascript
thinkingMode: 'always-on'
```
- 模型始终使用深度思考，无法关闭
- 例如: OpenAI o1/o3, DeepSeek-R1-Zero, Magistral

### 🔵 ADAPTIVE (自适应)
```javascript
thinkingMode: 'adaptive'
```
- 模型自动判断是否需要深度思考
- 例如: Gemini 2.5 (某些配置), Qwen 3 32B

---

## 集成建议

### 1️⃣ 高性能推理场景

**推荐组合**:
- 🥇 **首选**: OpenAI o3 (最强性能)
- 🥈 **备选**: DeepSeek-R1 (性价比最高)
- 🥉 **候补**: Claude 4 Opus (工具使用场景)

### 2️⃣ 成本优化场景

**推荐组合**:
- 🥇 **首选**: DeepSeek-R1 (开源，超低成本)
- 🥈 **备选**: Groq (低成本 + 高速推理)
- 🥉 **候补**: Magistral Small (开源免费)

### 3️⃣ 中文场景

**推荐组合**:
- 🥇 **首选**: Doubao 1.5 Thinking (国产最强)
- 🥈 **备选**: Kimi K1.5/Researcher (长上下文)
- 🥉 **候补**: DeepSeek-R1 (中文能力强)

### 4️⃣ 编程场景

**推荐组合**:
- 🥇 **首选**: Claude Sonnet 4.5 (世界最强编程模型)
- 🥈 **备选**: OpenAI o3 (复杂算法)
- 🥉 **候补**: DeepSeek-R1 (开源编程)

### 5️⃣ 多模态推理

**推荐组合**:
- 🥇 **首选**: Gemini 2.5 Pro (多模态 + Deep Think)
- 🥈 **备选**: Kimi-VL-Thinking (轻量级视觉推理)
- 🥉 **候补**: Magistral Small 1.2 (多模态 + 开源)

### 6️⃣ 研究与分析

**推荐组合**:
- 🥇 **首选**: Gemini 2.5 Pro Deep Research
- 🥈 **备选**: Kimi-Researcher (自主研究)
- 🥉 **候补**: OpenAI o3 Deep Research

---

## 性能对比

### 数学能力 (AIME)

| 排名 | 模型 | 准确率 | 备注 |
|------|------|--------|------|
| 🥇 | OpenAI o3 | 96.7% | 业界最高 |
| 🥈 | DeepSeek-R1 (Together) | 87.5% | 开源最强 |
| 🥉 | OpenAI o1 | ~85% | - |
| 4 | Doubao 1.5 Thinking | ~83% | 超越DeepSeek-R1原版 |

### 科学推理 (GPQA Diamond)

| 排名 | 模型 | 准确率 | 备注 |
|------|------|--------|------|
| 🥇 | OpenAI o3 | 87.7% | - |
| 🥈 | Claude 4 Opus | ~85% | Extended Thinking |
| 🥉 | Gemini 2.5 Pro | ~83% | Deep Think |
| 4 | DeepSeek-R1 | ~80% | - |

### 编程能力

| 排名 | 模型 | 特点 | 备注 |
|------|------|------|------|
| 🥇 | Claude Sonnet 4.5 | 世界最强编程模型 | - |
| 🥈 | OpenAI o3 | 复杂算法设计 | - |
| 🥉 | DeepSeek-R1 | 开源编程最强 | - |
| 4 | Gemini 2.5 Pro | 算法开发 | - |

### 多语言支持

| 排名 | 模型 | 语言覆盖 | 备注 |
|------|------|---------|------|
| 🥇 | Magistral | 8种语言 | 欧洲语言专精 |
| 🥈 | Gemini 2.5 | 全球语言 | - |
| 🥉 | GPT-4 系列 | 全球语言 | - |

### 中文能力

| 排名 | 模型 | 备注 |
|------|------|------|
| 🥇 | Doubao 1.5 Thinking | 国产最强 |
| 🥈 | Kimi K系列 | 长上下文中文 |
| 🥉 | DeepSeek-R1 | 中文能力强 |
| 4 | Magistral | 简体中文支持 |

### 成本效益比

| 排名 | 模型 | 成本 | 性能 | 性价比 |
|------|------|------|------|--------|
| 🥇 | DeepSeek-R1 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 极高 |
| 🥈 | Magistral Small | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 极高 |
| 🥉 | Groq (开源模型) | ⭐⭐⭐⭐ | ⭐⭐⭐ | 高 |
| 4 | Doubao 1.5 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 高 |
| 5 | OpenAI o3 | ⭐ | ⭐⭐⭐⭐⭐ | 中 |

### 推理速度

| 排名 | 模型 | 速度 | 备注 |
|------|------|------|------|
| 🥇 | Groq (任何模型) | 1000+ tokens/s | 极速推理引擎 |
| 🥈 | Magistral Medium | 1000 tokens/s | - |
| 🥉 | Gemini 2.5 Flash | ~800 tokens/s | 快速推理版 |
| 4 | 其他模型 | 100-500 tokens/s | - |

---

## 更新日志

### v1.0 (2025-10-17)
- ✅ 初始版本发布
- ✅ 覆盖9个服务商
- ✅ 详细列出30+推理模型
- ✅ 包含性能对比和集成建议

---

## 参考资源

### 官方文档

- [OpenAI o1 Documentation](https://platform.openai.com/docs/models/o1)
- [DeepSeek R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)
- [Anthropic Extended Thinking Docs](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)
- [Google Gemini Thinking Mode](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/)
- [Mistral Magistral](https://mistral.ai/news/magistral)
- [Moonshot Kimi K2](https://moonshotai.github.io/Kimi-K2/)
- [Groq Reasoning Docs](https://console.groq.com/docs/reasoning)
- [Together AI Models](https://www.together.ai/models)
- [Volcano Engine 豆包](https://www.volcengine.com/product/doubao)

### 项目相关文件

- 配置文件: `src/lib/constants.js`
- AI客户端: `src/lib/aiClient.js`
- 模型配置: `src/lib/modelConfig.js`
- 思考检测: `src/lib/modelThinkingDetector.js`

---

**📝 文档维护者**: Personal Chatbox Team
**🔄 最后更新**: 2025年10月17日
**📧 反馈与建议**: 请提交Issue到项目仓库
