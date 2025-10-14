import React, { useState } from 'react'
import { AlertCircle, Search, Cloud, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useMcpManager } from '@/hooks/useMcpManager'
import { McpPathConfigDialog } from './McpPathConfig'

import { createLogger } from '../../lib/logger'
const logger = createLogger('McpServiceConfigSimple')


/**
 * 简化的MCP服务配置组件
 */
export default function McpServiceConfigSimple() {
  const { services, loading, error, toggleService } = useMcpManager()

  const handleToggleServer = async (serverId) => {
    try {
      const service = services.find(s => s.id === serverId)
      const newEnabled = !service.enabled
      
      await toggleService(serverId, newEnabled)
    } catch (err) {
      logger.error('Failed to toggle server:', err)
      alert('操作失败，请重试')
    }
  }

  const getServiceIcon = (id) => {
    const icons = {
      // 原有服务
      weather: '🌤️',
      search: '🔍',
      time: '🕐',
      youtube: '📹',
      coincap: '💰',
      fetch: '🌐',
      dexscreener: '💹',
      playwright: '🎭',
      // 新MCP服务
      memory: '🧠',
      filesystem: '📁',
      git: '🔀',
      sequential_thinking: '💭',
      sqlite: '🗄️',
      wikipedia: '📚',
      brave_search: '🔎',
      github: '🐙',
      puppeteer: '🎪',
      fetch_official: '🌍',
      google_maps: '🗺️'
    }
    return icons[id] || '🔧'
  }

  if (loading) {
    return <div className="p-4">加载中...</div>
  }

  if (error) {
    return (
      <div className="p-4 flex items-center gap-2" style={{ color: 'var(--destructive)' }}>
        <AlertCircle className="w-5 h-5" />
        <span>{error}</span>
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          通过启用 MCP 服务，您的 AI 助手将能够访问实时信息，包括网络搜索、天气查询、网页抓取等功能。
          所有服务都是免费的，无需API密钥即可使用。
        </p>
      </div>

      <div className="space-y-4">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            server={service}
            onToggle={() => handleToggleServer(service.id)}
            getServiceIcon={getServiceIcon}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * 简化的服务卡片组件
 */
function ServiceCard({ server, onToggle, getServiceIcon }) {
  // 判断服务是否需要配置
  const requiresConfig = server.requiresConfig || (server.id === 'brave_search' || server.id === 'github')
  const hasApiKey = server.apiKey && server.apiKey.length > 0

  return (
    <div className={`border rounded-lg p-4 ${server.enabled ? 'bg-opacity-5' : 'bg-opacity-5'}`} style={{
      backgroundColor: server.enabled ? 'color-mix(in srgb, var(--border) 8%, transparent)' : 'color-mix(in srgb, var(--muted) 8%, transparent)',
      borderColor: server.enabled ? 'var(--border)' : 'color-mix(in srgb, var(--border) 50%, transparent)'
    }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{getServiceIcon(server.id)}</span>
          <div>
            <div className="flex items-center gap-2">
              <h5 className="font-medium">{server.name}</h5>
              {(server.id === 'sqlite' || server.id === 'filesystem') && (
                <McpPathConfigDialog service={server} onSave={() => {}} />
              )}
            </div>
            <p className="text-sm text-gray-600">{server.description}</p>
            <div className="flex gap-2 mt-2">
              {requiresConfig ? (
                <>
                  <Badge variant="outline">需要配置</Badge>
                  {hasApiKey && (
                    <Badge variant="secondary" style={{ 
                      color: 'var(--foreground)', 
                      backgroundColor: 'color-mix(in srgb, var(--border) 15%, transparent)',
                      opacity: 0.9
                    }}>
                      ✓ 已配置
                    </Badge>
                  )}
                </>
              ) : (
                <>
                  <Badge variant="secondary">免费</Badge>
                  <Badge variant="outline">无需配置</Badge>
                </>
              )}
              {server.tools && server.tools.length > 0 && (
                <Badge variant="outline">{server.tools.length} 个工具</Badge>
              )}
            </div>
          </div>
        </div>
        <div>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={server.enabled}
              onChange={onToggle}
              className="sr-only"
            />
            <div 
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
              style={{
                backgroundColor: server.enabled ? 'var(--foreground)' : 'var(--muted)',
                opacity: server.enabled ? 0.9 : 0.7
              }}
            >
              <span 
                className="inline-block h-4 w-4 transform rounded-full transition-transform"
                style={{
                  backgroundColor: 'var(--background)',
                  transform: server.enabled ? 'translateX(1.5rem)' : 'translateX(0.25rem)'
                }}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

